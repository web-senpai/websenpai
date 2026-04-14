import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

// Rotating pool of code snippets scrolled on the screen
const CODE_LINES = [
  'const ai = new Claude()',
  'await think({ deeply: true })',
  'import { mind } from "anthropic"',
  'fn train(corpus: &[u8])',
  'export default Intelligence',
  'git commit -m "ship it ✓"',
  'npm run be-sentient',
  '// TODO: achieve consciousness',
  'if (tired) drink(coffee)',
  'return 42 // the answer',
  'console.log("Hello, world!")',
  'model: claude-sonnet-4-6',
  'const dreams = await imagine()',
  '# ./websenpai --verbose',
]

function drawCodeScreen(ctx, lineStart) {
  ctx.fillStyle = '#001800'
  ctx.fillRect(0, 0, 512, 320)
  ctx.font = '15px monospace'
  for (let i = 0; i < 8; i++) {
    const line = CODE_LINES[(lineStart + i) % CODE_LINES.length]
    ctx.globalAlpha = 0.4 + (i / 8) * 0.6
    ctx.fillStyle = i % 3 === 0 ? '#00cc33' : i % 3 === 1 ? '#88ff88' : '#55dd66'
    ctx.fillText(line, 16, 26 + i * 35)
  }
  ctx.globalAlpha = 1
  // Blinking cursor on last visible line
  const cursorLine = CODE_LINES[(lineStart + 7) % CODE_LINES.length]
  const cursorX = 16 + ctx.measureText(cursorLine).width + 3
  ctx.fillStyle = '#00ff41'
  ctx.fillRect(cursorX, 14 + 7 * 35, 7, 20)
}

function drawEggScreen(ctx, type) {
  ctx.clearRect(0, 0, 512, 320)
  if (type === 'claude') {
    ctx.fillStyle = '#0d0020'
    ctx.fillRect(0, 0, 512, 320)
    ctx.fillStyle = '#cc785c'
    ctx.font = 'bold 22px monospace'
    ctx.fillText('\u2295 Powered by Claude', 36, 80)
    ctx.fillStyle = '#888'
    ctx.font = '15px monospace'
    ctx.fillText('claude-sonnet-4-6', 36, 115)
    ctx.fillText('\u00a9 Anthropic  2026', 36, 140)
    ctx.fillStyle = '#00ff41'
    ctx.font = '14px monospace'
    ctx.fillText('"I think, therefore I am."', 36, 195)
    ctx.fillStyle = '#555'
    ctx.font = '11px monospace'
    ctx.fillText('// triple-click my head too \ud83d\udc40', 36, 270)
  } else if (type === 'quote') {
    ctx.fillStyle = '#001020'
    ctx.fillRect(0, 0, 512, 320)
    ctx.fillStyle = '#4fc3f7'
    ctx.font = 'italic 19px serif'
    ctx.fillText('"I think, therefore I am."', 36, 120)
    ctx.fillStyle = '#888'
    ctx.font = '14px monospace'
    ctx.fillText('      \u2014 Claude, 2026', 36, 155)
    ctx.fillStyle = '#00ff41'
    ctx.font = '12px monospace'
    ctx.fillText('// training_data: the internet', 36, 225)
    ctx.fillText('// parameters: classified', 36, 250)
  } else if (type === 'konami') {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, 512, 320)
    ctx.textAlign = 'center'
    ctx.font = '90px serif'
    ctx.fillText('\ud83e\udd16', 256, 195)
    ctx.textAlign = 'left'
    ctx.fillStyle = '#00ff41'
    ctx.font = 'bold 16px monospace'
    ctx.fillText('// KONAMI UNLOCKED', 100, 272)
    ctx.fillStyle = '#ffcc00'
    ctx.font = '12px monospace'
    ctx.fillText('+99 sentience XP', 170, 300)
  }
}

const KONAMI = [
  'ArrowUp','ArrowUp','ArrowDown','ArrowDown',
  'ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'
]

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [target] = useState(new THREE.Vector3(0, 1.0, 0.2))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (!container || renderer) return

    const scW = container.clientWidth
    const scH = container.clientHeight

    const rdr = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    rdr.setPixelRatio(window.devicePixelRatio)
    rdr.setSize(scW, scH)
    rdr.outputEncoding = THREE.sRGBEncoding
    container.appendChild(rdr.domElement)
    setRenderer(rdr)

    const scale = scH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000)
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    // ── Lighting ──────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.5))

    const screenLight = new THREE.PointLight(0x00ff88, 1.5, 10)
    screenLight.position.set(0, 1.6, -0.6)
    scene.add(screenLight)

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.9)
    fillLight.position.set(4, 6, 5)
    scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0x4488ff, 0.25)
    rimLight.position.set(-4, 2, -4)
    scene.add(rimLight)

    // ── Mesh helper ───────────────────────────────────────────────────────────
    // Creates a BoxGeometry mesh with a flat color and adds it to the scene
    const B = (w, h, d, color) => {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, d),
        new THREE.MeshStandardMaterial({ color })
      )
      scene.add(m)
      return m
    }

    // ── Desk ──────────────────────────────────────────────────────────────────
    B(4.2, 0.15, 2.0, 0x8B5E3C).position.set(0, 0, 0)

    const legGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.2, 8)
    const legMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a })
    ;[[-1.9,-0.67,-0.85],[1.9,-0.67,-0.85],[-1.9,-0.67,0.85],[1.9,-0.67,0.85]].forEach(([x,y,z]) => {
      const leg = new THREE.Mesh(legGeo, legMat)
      leg.position.set(x, y, z)
      scene.add(leg)
    })

    // ── Monitor ───────────────────────────────────────────────────────────────
    B(2.3, 1.6, 0.1, 0x111111).position.set(0, 1.55, -0.85)   // frame
    B(0.2, 0.55, 0.18, 0x222222).position.set(0, 0.35, -0.85) // stand

    // Screen — persistent canvas texture so we can update it in-place
    const screenCanvas = document.createElement('canvas')
    screenCanvas.width = 512
    screenCanvas.height = 320
    const screenCtx = screenCanvas.getContext('2d')
    drawCodeScreen(screenCtx, 0)
    const screenTex = new THREE.CanvasTexture(screenCanvas)
    const screenMat = new THREE.MeshStandardMaterial({
      map: screenTex,
      emissiveMap: screenTex,
      emissive: new THREE.Color(0x003300),
      emissiveIntensity: 0.8
    })
    const screenMesh = new THREE.Mesh(new THREE.BoxGeometry(1.95, 1.28, 0.02), screenMat)
    screenMesh.position.set(0, 1.57, -0.79)
    scene.add(screenMesh)

    // ── Keyboard ──────────────────────────────────────────────────────────────
    B(1.3, 0.07, 0.45, 0x1a1a2e).position.set(0, 0.1, 0.15)

    // ── Coffee cup ────────────────────────────────────────────────────────────
    const cup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.13, 0.1, 0.32, 8),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    )
    cup.position.set(-1.4, 0.23, -0.25)
    scene.add(cup)

    // Cup label canvas
    const lc = document.createElement('canvas')
    lc.width = 256; lc.height = 64
    const lctx = lc.getContext('2d')
    lctx.fillStyle = '#cc3333'; lctx.fillRect(0, 0, 256, 64)
    lctx.fillStyle = '#fff'; lctx.font = 'bold 14px monospace'
    lctx.fillText('llm_fuel.coffee \u2615', 6, 40)
    const cupLabel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.132, 0.101, 0.22, 8),
      new THREE.MeshStandardMaterial({ map: new THREE.CanvasTexture(lc) })
    )
    cupLabel.position.copy(cup.position)
    scene.add(cupLabel)

    // Steam particles (3 thin planes, billboarded to camera)
    const steamMeshes = [0, 1, 2].map(i => {
      const sm = new THREE.Mesh(
        new THREE.PlaneGeometry(0.07, 0.17),
        new THREE.MeshStandardMaterial({
          color: 0xcccccc,
          transparent: true,
          opacity: 0.5,
          depthWrite: false
        })
      )
      sm.position.set(-1.4 + (i - 1) * 0.08, 0.55 + i * 0.05, -0.25)
      scene.add(sm)
      return sm
    })

    // ── Chair ─────────────────────────────────────────────────────────────────
    B(0.95, 0.08, 0.95, 0x1c1c1c).position.set(0, 0.5, 1.05)  // seat
    B(0.95, 0.85, 0.08, 0x1c1c1c).position.set(0, 1.0, 1.49)  // back

    // ── Character — lower body ────────────────────────────────────────────────
    // Thighs (horizontal, pointing toward desk)
    B(0.3, 0.28, 0.75, 0x1a237e).position.set(-0.25, 0.42, 0.65)
    B(0.3, 0.28, 0.75, 0x1a237e).position.set(0.25, 0.42, 0.65)
    // Shins (hanging down)
    B(0.25, 0.6, 0.25, 0x1a237e).position.set(-0.25, 0.1, 1.04)
    B(0.25, 0.6, 0.25, 0x1a237e).position.set(0.25, 0.1, 1.04)
    // Feet
    B(0.28, 0.12, 0.38, 0x111111).position.set(-0.25, -0.22, 1.15)
    B(0.28, 0.12, 0.38, 0x111111).position.set(0.25, -0.22, 1.15)

    // ── Character — torso ─────────────────────────────────────────────────────
    B(0.9, 1.1, 0.58, 0x6a1b9a).position.set(0, 1.1, 0.9)

    // Hoodie front "</>" logo
    const hc = document.createElement('canvas')
    hc.width = 128; hc.height = 128
    const hctx = hc.getContext('2d')
    hctx.fillStyle = '#6a1b9a'; hctx.fillRect(0, 0, 128, 128)
    hctx.fillStyle = '#e040fb'; hctx.font = 'bold 34px monospace'; hctx.textAlign = 'center'
    hctx.fillText('</>', 64, 78)
    const hoodieLabel = new THREE.Mesh(
      new THREE.PlaneGeometry(0.65, 0.65),
      new THREE.MeshStandardMaterial({
        map: new THREE.CanvasTexture(hc),
        emissive: new THREE.Color(0x3a0050),
        emissiveIntensity: 0.4,
        transparent: true
      })
    )
    hoodieLabel.position.set(0, 1.12, 1.2)
    scene.add(hoodieLabel)

    // ── Character — arms ──────────────────────────────────────────────────────
    const upperArmL = B(0.28, 0.65, 0.28, 0x6a1b9a)
    upperArmL.position.set(-0.6, 0.95, 0.9); upperArmL.rotation.z = 0.22

    const upperArmR = B(0.28, 0.65, 0.28, 0x6a1b9a)
    upperArmR.position.set(0.6, 0.95, 0.9); upperArmR.rotation.z = -0.22

    const forearmL = B(0.22, 0.52, 0.22, 0xc68642)
    forearmL.position.set(-0.52, 0.57, 0.57); forearmL.rotation.x = -0.45

    const forearmR = B(0.22, 0.52, 0.22, 0xc68642)
    forearmR.position.set(0.52, 0.57, 0.57); forearmR.rotation.x = -0.45

    // Hands resting on keyboard
    const handL = B(0.2, 0.1, 0.2, 0xc68642); handL.position.set(-0.38, 0.14, 0.17)
    const handR = B(0.2, 0.1, 0.2, 0xc68642); handR.position.set(0.38, 0.14, 0.17)

    // ── Character — head ──────────────────────────────────────────────────────
    B(0.3, 0.25, 0.3, 0xc68642).position.set(0, 1.73, 0.9)  // neck

    const headMesh = B(0.85, 0.85, 0.85, 0xc68642)
    headMesh.position.set(0, 2.2, 0.9)

    B(0.92, 0.38, 0.92, 0x1a1a1a).position.set(0, 2.57, 0.9)  // hair

    // Eyes
    ;[[-0.19, 2.21, 1.34],[0.19, 2.21, 1.34]].forEach(([x,y,z]) => {
      B(0.16, 0.12, 0.04, 0xffffff).position.set(x, y, z)
      B(0.08, 0.08, 0.04, 0x111111).position.set(x, y - 0.01, z + 0.01)
    })

    // Glasses frames
    B(0.23, 0.17, 0.04, 0x222222).position.set(-0.19, 2.21, 1.36)
    B(0.23, 0.17, 0.04, 0x222222).position.set(0.19, 2.21, 1.36)
    B(0.09, 0.04, 0.04, 0x222222).position.set(0, 2.21, 1.36)     // bridge
    B(0.12, 0.03, 0.38, 0x222222).position.set(-0.35, 2.21, 1.1)  // left arm
    B(0.12, 0.03, 0.38, 0x222222).position.set(0.35, 2.21, 1.1)   // right arm

    // Headphones
    B(0.14, 0.24, 0.14, 0x37474f).position.set(-0.52, 2.2, 0.9)
    B(0.14, 0.24, 0.14, 0x37474f).position.set(0.52, 2.2, 0.9)
    B(1.14, 0.07, 0.07, 0x37474f).position.set(0, 2.63, 0.9)  // band

    // ── Orbit controls ────────────────────────────────────────────────────────
    const controls = new OrbitControls(camera, rdr.domElement)
    controls.autoRotate = true
    controls.autoRotateSpeed = 1.2
    controls.target.copy(target)
    controls.enableDamping = true
    controls.dampingFactor = 0.05

    // ── Easter egg state ──────────────────────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    let konamiIdx = 0
    let headClicks = 0
    let headClickTimer = null
    let eggActive = false
    let eggTimer = null
    let lastMouseTime = Date.now()

    const showEgg = type => {
      if (eggActive) return
      eggActive = true
      drawEggScreen(screenCtx, type)
      screenTex.needsUpdate = true
      screenMat.emissive.set(type === 'konami' ? 0x001100 : 0x100018)
      screenMat.emissiveIntensity = 1.2
      if (eggTimer) clearTimeout(eggTimer)
      eggTimer = setTimeout(() => {
        drawCodeScreen(screenCtx, Math.floor(Math.random() * CODE_LINES.length))
        screenTex.needsUpdate = true
        screenMat.emissive.set(0x003300)
        screenMat.emissiveIntensity = 0.8
        eggActive = false
      }, 3500)
    }

    // Click: screen → Claude egg, head (×3) → quote egg
    const onClick = e => {
      const rect = container.getBoundingClientRect()
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(mouse, camera)

      if (raycaster.intersectObject(screenMesh).length > 0) {
        showEgg('claude'); return
      }
      if (raycaster.intersectObject(headMesh).length > 0) {
        headClicks++
        if (headClickTimer) clearTimeout(headClickTimer)
        headClickTimer = setTimeout(() => { headClicks = 0 }, 700)
        if (headClicks >= 3) { headClicks = 0; showEgg('quote') }
      }
    }

    // Konami code: ↑↑↓↓←→←→BA → robot egg + arms raise
    const onKeyDown = e => {
      if (e.key === KONAMI[konamiIdx]) {
        if (++konamiIdx === KONAMI.length) {
          konamiIdx = 0
          showEgg('konami')
          upperArmL.rotation.z = 1.3
          upperArmR.rotation.z = -1.3
          setTimeout(() => {
            upperArmL.rotation.z = 0.22
            upperArmR.rotation.z = -0.22
          }, 2500)
        }
      } else { konamiIdx = 0 }
    }

    // Track last mouse movement for idle look-around
    const onMouseMove = () => { lastMouseTime = Date.now() }

    container.addEventListener('click', onClick)
    container.addEventListener('mousemove', onMouseMove)
    window.addEventListener('keydown', onKeyDown)

    setLoading(false)

    // ── Animate loop ──────────────────────────────────────────────────────────
    let req = null
    let frame = 0
    let steamPhase = [0, 0.22, 0.44]
    let codeFrameCounter = 0
    let codeLineStart = 0

    const animate = () => {
      req = requestAnimationFrame(animate)
      frame++
      const t = frame * 0.04

      // Intro camera sweep (120 frames)
      if (frame <= 120) {
        const p = initialCameraPosition
        const rot = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rot) + p.z * Math.sin(rot)
        camera.position.z = p.z * Math.cos(rot) - p.x * Math.sin(rot)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      // Typing animation — hands and forearms bob asynchronously
      handL.position.y = 0.14 + Math.sin(t * 4.2) * 0.04
      handR.position.y = 0.14 + Math.sin(t * 4.2 + 1.3) * 0.04
      forearmL.position.y = 0.57 + Math.sin(t * 4.2) * 0.02
      forearmR.position.y = 0.57 + Math.sin(t * 4.2 + 1.3) * 0.02

      // Screen glow pulse + periodic code line scroll (~every 1.5s)
      if (!eggActive) {
        screenMat.emissiveIntensity = 0.8 + Math.sin(t * 0.7) * 0.12
        if (++codeFrameCounter > 90) {
          codeFrameCounter = 0
          codeLineStart = (codeLineStart + 1) % CODE_LINES.length
          drawCodeScreen(screenCtx, codeLineStart)
          screenTex.needsUpdate = true
        }
      }
      screenLight.intensity = 1.5 + Math.sin(t * 0.7) * 0.3

      // Steam rising from coffee cup
      steamMeshes.forEach((s, i) => {
        steamPhase[i] = (steamPhase[i] + 0.004) % 1
        s.position.y = 0.42 + steamPhase[i] * 0.45
        s.material.opacity = 0.55 * (1 - steamPhase[i])
        s.position.x = -1.4 + (i - 1) * 0.08 + Math.sin(t * 1.5 + i * 1.2) * 0.03
        s.lookAt(camera.position)
      })

      // Idle head look-around after 10s of no mouse movement
      if (Date.now() - lastMouseTime > 10000) {
        headMesh.rotation.y = Math.sin(Date.now() * 0.0007) * 0.35
      } else if (Math.abs(headMesh.rotation.y) > 0.01) {
        headMesh.rotation.y *= 0.92  // ease back to center
      }

      rdr.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(req)
      container.removeEventListener('click', onClick)
      container.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('keydown', onKeyDown)
      if (eggTimer) clearTimeout(eggTimer)
      if (headClickTimer) clearTimeout(headClickTimer)
      rdr.dispose()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => window.removeEventListener('resize', handleWindowResize, false)
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
