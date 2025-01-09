window.addEventListener('DOMContentLoaded', init);

function init() {
  const width = 800;
  const height = 800;

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    canvas: document.querySelector('#myCanvas'),
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = true;

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(20, width / height);
  camera.position.set(0, -30, 200);
  camera.lookAt(new THREE.Vector3(0, -10, 0));

  // 平行光源
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(0, 200, 0);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.top = -100;
  directionalLight.shadow.camera.bottom = 100;
  scene.add(directionalLight);

  // 平行光源
  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.2);
  directionalLight2.position.set(-3000, 1000, 0);
  directionalLight2.castShadow = true;

  scene.add(directionalLight2);


  // 半球光源を作成
  const lightH = new THREE.HemisphereLight(0xffffff, 0xFFF8DC, 0.6);
  scene.add(lightH);

  // 絨毯

  const geometryEn = new THREE.CircleGeometry(30, 32);
  const materialEn = new THREE.MeshLambertMaterial({ color: 0xa9a9a9, side: THREE.DoubleSide });
  const discMesh = new THREE.Mesh(geometryEn, materialEn);
  discMesh.position.set(0, -40, 0);
  discMesh.rotation.x = Math.PI / 2;
  discMesh.receiveShadow = true; // 影を受け付ける
  // シーンにメッシュを追加
  scene.add(discMesh);


  // グループを作る
  const group1 = new THREE.Group();
  scene.add(group1);

  const material1 = new THREE.MeshPhysicalMaterial({ transmission: 0.3, color: 0xffffff });
  const geometry1 = new THREE.BufferGeometry();
  const vertices1 = new Float32Array([
    0, 0, 0,
    20, 0, 0,
    20, -6, -6,

    0, 0, 0,
    20, 0, 0,
    20, -6, 6,

  ]);

 
  geometry1.setAttribute('position', new THREE.BufferAttribute(vertices1, 3));
  geometry1.computeVertexNormals();  // これを忘れると表示されない
  material1.side = THREE.DoubleSide; // 裏側も描画
  const mesh1 = new THREE.Mesh(geometry1, material1);

  mesh1.position.set(
    -6, // X座標
    10, // Y座標
    0 // Z座標
  );
  mesh1.rotation.z = Math.PI * 0.2;
  mesh1.castShadow = true;
  group1.add(mesh1);

  const materialLine1 = new THREE.LineBasicMaterial({
    color: 0x808080,
    linewidth: 0.00001,
  });
  const pointsLine1 = [];
  pointsLine1.push(new THREE.Vector3(- 6, 7.2, 0));
  pointsLine1.push(new THREE.Vector3(- 6, 10, 0));
  const geometryLine1 = new THREE.BufferGeometry().setFromPoints(pointsLine1);

  const line1 = new THREE.Line(geometryLine1, materialLine1);
  group1.add(line1);

  const pointsLine0 = [];
  pointsLine0.push(new THREE.Vector3(0, 69, 0));
  pointsLine0.push(new THREE.Vector3(0, 14, 0));
  const geometryLine0 = new THREE.BufferGeometry().setFromPoints(pointsLine0);

  const line0 = new THREE.Line(geometryLine0, materialLine1);

  group1.add(line0);

  //group2
  const group2 = new THREE.Group();
  // 3D空間にグループを追加する
  scene.add(group2);

  const material2 = new THREE.MeshPhysicalMaterial({ transmission: 0.3, color: 0xffffff });
  const geometry2 = new THREE.BufferGeometry();
  const vertices2 = new Float32Array([
    0, 0, 0,
    15, 0, 0,
    15, -4.5, -4.5,


    0, 0, 0,
    15, 0, 0,
    15, -4.5, 4.5
  ]);

  geometry2.setAttribute('position', new THREE.BufferAttribute(vertices2, 3));
  geometry2.computeVertexNormals();  // これを忘れると表示されない
  material2.side = THREE.DoubleSide; // 裏側も描画
  const mesh2 = new THREE.Mesh(geometry2, material2);

  mesh2.position.set(
    -4, // X座標
    6, // Y座標
    0 // Z座標
  );
  mesh2.rotation.z = Math.PI * 0.1;
  mesh2.castShadow = true;
  group2.add(mesh2);

  const pointsLine2 = [];
  pointsLine2.push(new THREE.Vector3(- 4, 6, 0));
  pointsLine2.push(new THREE.Vector3(- 4, 2.7, 0));
  const geometryLine2 = new THREE.BufferGeometry().setFromPoints(pointsLine2);

  const line2 = new THREE.Line(geometryLine2, materialLine1);
  group2.add(line2);

  //group3
  const group3 = new THREE.Group();
  // 3D空間にグループを追加する
  scene.add(group3);


  const material3 = new THREE.MeshPhysicalMaterial({ transmission: 0.3, color: 0xffffff });
  const geometry3 = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    0, 0, 0,
    10, 0, 0,
    10, -3.1, -3.1,

    0, 0, 0,
    10, 0, 0,
    10, -3.1, 3.1
  ]);

  geometry3.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry3.computeVertexNormals();  // これを忘れると表示されない
  material3.side = THREE.DoubleSide; // 裏側も描画
  const mesh3 = new THREE.Mesh(geometry3, material3);

  mesh3.position.set(
    -3, // X座標
    4, // Y座標
    0 // Z座標
  );
  mesh3.rotation.z = -Math.PI * 0.1;
  mesh3.castShadow = true;
  group3.add(mesh3);



  const pointsLine3 = [];
  pointsLine3.push(new THREE.Vector3(- 3, -6, 0));
  pointsLine3.push(new THREE.Vector3(- 3, 4, 0));
  const geometryLine3 = new THREE.BufferGeometry().setFromPoints(pointsLine3);

  const line3 = new THREE.Line(geometryLine3, materialLine1);
  group3.add(line3);

  const geometry = new THREE.SphereGeometry(1.2, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x800000, roughness: 0.1, metalness: 0 });
  const sphere = new THREE.Mesh(geometry, material);
  sphere.position.set(
    -3, -6, 0
  )
  sphere.castShadow = true;


  group3.add(sphere);

  let theta = 0;
  let theta2 = 0;
  let theta3 = 0;
  let hatena = 10 * Math.random();


  tick();

  // 毎フレーム時に実行されるループイベントです

  function tick() {
    hatena += 0.00005;
    theta += 0.003 * Math.sin(Math.PI * hatena / 2);
    theta2 += 0.004 * Math.cos(Math.PI * hatena / 7);
    theta3 += 0.005 * Math.cos(Math.PI * hatena / 3);
    group1.rotation.y = theta;
    group2.rotation.y = theta2;
    group3.rotation.y = theta3;

    group2.position.x = -6 * Math.cos(theta);
    group2.position.z = 6 * Math.sin(theta);
    group3.position.x = -6 * Math.cos(theta) - 4 * Math.cos(theta2);
    group3.position.z = 6 * Math.sin(theta) + 4 * Math.sin(theta2);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
}