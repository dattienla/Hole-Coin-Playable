var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1488 = root || request.c( 'UnityEngine.JointSpring' )
  var i1489 = data
  i1488.spring = i1489[0]
  i1488.damper = i1489[1]
  i1488.targetPosition = i1489[2]
  return i1488
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1490 = root || request.c( 'UnityEngine.JointMotor' )
  var i1491 = data
  i1490.m_TargetVelocity = i1491[0]
  i1490.m_Force = i1491[1]
  i1490.m_FreeSpin = i1491[2]
  return i1490
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1492 = root || request.c( 'UnityEngine.JointLimits' )
  var i1493 = data
  i1492.m_Min = i1493[0]
  i1492.m_Max = i1493[1]
  i1492.m_Bounciness = i1493[2]
  i1492.m_BounceMinVelocity = i1493[3]
  i1492.m_ContactDistance = i1493[4]
  i1492.minBounce = i1493[5]
  i1492.maxBounce = i1493[6]
  return i1492
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1494 = root || request.c( 'UnityEngine.JointDrive' )
  var i1495 = data
  i1494.m_PositionSpring = i1495[0]
  i1494.m_PositionDamper = i1495[1]
  i1494.m_MaximumForce = i1495[2]
  i1494.m_UseAcceleration = i1495[3]
  return i1494
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1496 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1497 = data
  i1496.m_Spring = i1497[0]
  i1496.m_Damper = i1497[1]
  return i1496
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1498 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1499 = data
  i1498.m_Limit = i1499[0]
  i1498.m_Bounciness = i1499[1]
  i1498.m_ContactDistance = i1499[2]
  return i1498
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1501 = data
  i1500.m_ExtremumSlip = i1501[0]
  i1500.m_ExtremumValue = i1501[1]
  i1500.m_AsymptoteSlip = i1501[2]
  i1500.m_AsymptoteValue = i1501[3]
  i1500.m_Stiffness = i1501[4]
  return i1500
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1503 = data
  i1502.m_LowerAngle = i1503[0]
  i1502.m_UpperAngle = i1503[1]
  return i1502
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1505 = data
  i1504.m_MotorSpeed = i1505[0]
  i1504.m_MaximumMotorTorque = i1505[1]
  return i1504
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1507 = data
  i1506.m_DampingRatio = i1507[0]
  i1506.m_Frequency = i1507[1]
  i1506.m_Angle = i1507[2]
  return i1506
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1509 = data
  i1508.m_LowerTranslation = i1509[0]
  i1508.m_UpperTranslation = i1509[1]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1510 = root || new pc.UnityMaterial()
  var i1511 = data
  i1510.name = i1511[0]
  request.r(i1511[1], i1511[2], 0, i1510, 'shader')
  i1510.renderQueue = i1511[3]
  i1510.enableInstancing = !!i1511[4]
  var i1513 = i1511[5]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1513[i + 0]) );
  }
  i1510.floatParameters = i1512
  var i1515 = i1511[6]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1515[i + 0]) );
  }
  i1510.colorParameters = i1514
  var i1517 = i1511[7]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1517[i + 0]) );
  }
  i1510.vectorParameters = i1516
  var i1519 = i1511[8]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1519[i + 0]) );
  }
  i1510.textureParameters = i1518
  var i1521 = i1511[9]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1521[i + 0]) );
  }
  i1510.materialFlags = i1520
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.value = i1525[1]
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1529 = data
  i1528.name = i1529[0]
  i1528.value = new pc.Color(i1529[1], i1529[2], i1529[3], i1529[4])
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1533 = data
  i1532.name = i1533[0]
  i1532.value = new pc.Vec4( i1533[1], i1533[2], i1533[3], i1533[4] )
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1537 = data
  i1536.name = i1537[0]
  request.r(i1537[1], i1537[2], 0, i1536, 'value')
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1541 = data
  i1540.name = i1541[0]
  i1540.enabled = !!i1541[1]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1543 = data
  i1542.name = i1543[0]
  i1542.halfPrecision = !!i1543[1]
  i1542.useUInt32IndexFormat = !!i1543[2]
  i1542.vertexCount = i1543[3]
  i1542.aabb = i1543[4]
  var i1545 = i1543[5]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( !!i1545[i + 0] );
  }
  i1542.streams = i1544
  i1542.vertices = i1543[6]
  var i1547 = i1543[7]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1547[i + 0]) );
  }
  i1542.subMeshes = i1546
  var i1549 = i1543[8]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 16) {
    i1548.push( new pc.Mat4().setData(i1549[i + 0], i1549[i + 1], i1549[i + 2], i1549[i + 3],  i1549[i + 4], i1549[i + 5], i1549[i + 6], i1549[i + 7],  i1549[i + 8], i1549[i + 9], i1549[i + 10], i1549[i + 11],  i1549[i + 12], i1549[i + 13], i1549[i + 14], i1549[i + 15]) );
  }
  i1542.bindposes = i1548
  var i1551 = i1543[9]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1551[i + 0]) );
  }
  i1542.blendShapes = i1550
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1557 = data
  i1556.triangles = i1557[0]
  return i1556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1563 = data
  i1562.name = i1563[0]
  var i1565 = i1563[1]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1565[i + 0]) );
  }
  i1562.frames = i1564
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.width = i1567[1]
  i1566.height = i1567[2]
  i1566.mipmapCount = i1567[3]
  i1566.anisoLevel = i1567[4]
  i1566.filterMode = i1567[5]
  i1566.hdr = !!i1567[6]
  i1566.format = i1567[7]
  i1566.wrapMode = i1567[8]
  i1566.alphaIsTransparency = !!i1567[9]
  i1566.alphaSource = i1567[10]
  i1566.graphicsFormat = i1567[11]
  i1566.sRGBTexture = !!i1567[12]
  i1566.desiredColorSpace = i1567[13]
  i1566.wrapU = i1567[14]
  i1566.wrapV = i1567[15]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1571 = data
  i1570.weight = i1571[0]
  i1570.vertices = i1571[1]
  i1570.normals = i1571[2]
  i1570.tangents = i1571[3]
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1573 = data
  i1572.position = new pc.Vec3( i1573[0], i1573[1], i1573[2] )
  i1572.scale = new pc.Vec3( i1573[3], i1573[4], i1573[5] )
  i1572.rotation = new pc.Quat(i1573[6], i1573[7], i1573[8], i1573[9])
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1575 = data
  request.r(i1575[0], i1575[1], 0, i1574, 'clip')
  request.r(i1575[2], i1575[3], 0, i1574, 'outputAudioMixerGroup')
  i1574.playOnAwake = !!i1575[4]
  i1574.loop = !!i1575[5]
  i1574.time = i1575[6]
  i1574.volume = i1575[7]
  i1574.pitch = i1575[8]
  i1574.enabled = !!i1575[9]
  return i1574
}

Deserializers["Coin"] = function (request, data, root) {
  var i1576 = root || request.c( 'Coin' )
  var i1577 = data
  i1576.colorType = i1577[0]
  request.r(i1577[1], i1577[2], 0, i1576, 'meshRenderer')
  request.r(i1577[3], i1577[4], 0, i1576, 'animator')
  request.r(i1577[5], i1577[6], 0, i1576, 'smokeParticle')
  request.r(i1577[7], i1577[8], 0, i1576, 'audioSource')
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1579 = data
  request.r(i1579[0], i1579[1], 0, i1578, 'animatorController')
  request.r(i1579[2], i1579[3], 0, i1578, 'avatar')
  i1578.updateMode = i1579[4]
  i1578.hasTransformHierarchy = !!i1579[5]
  i1578.applyRootMotion = !!i1579[6]
  var i1581 = i1579[7]
  var i1580 = []
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 2, i1580, '')
  }
  i1578.humanBones = i1580
  i1578.enabled = !!i1579[8]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'sharedMesh')
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'additionalVertexStreams')
  i1586.enabled = !!i1587[2]
  request.r(i1587[3], i1587[4], 0, i1586, 'sharedMaterial')
  var i1589 = i1587[5]
  var i1588 = []
  for(var i = 0; i < i1589.length; i += 2) {
  request.r(i1589[i + 0], i1589[i + 1], 2, i1588, '')
  }
  i1586.sharedMaterials = i1588
  i1586.receiveShadows = !!i1587[6]
  i1586.shadowCastingMode = i1587[7]
  i1586.sortingLayerID = i1587[8]
  i1586.sortingOrder = i1587[9]
  i1586.lightmapIndex = i1587[10]
  i1586.lightmapSceneIndex = i1587[11]
  i1586.lightmapScaleOffset = new pc.Vec4( i1587[12], i1587[13], i1587[14], i1587[15] )
  i1586.lightProbeUsage = i1587[16]
  i1586.reflectionProbeUsage = i1587[17]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.tagId = i1593[1]
  i1592.enabled = !!i1593[2]
  i1592.isStatic = !!i1593[3]
  i1592.layer = i1593[4]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1595 = data
  i1594.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1595[0], i1594.main)
  i1594.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1595[1], i1594.colorBySpeed)
  i1594.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1595[2], i1594.colorOverLifetime)
  i1594.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1595[3], i1594.emission)
  i1594.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1595[4], i1594.rotationBySpeed)
  i1594.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1595[5], i1594.rotationOverLifetime)
  i1594.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1595[6], i1594.shape)
  i1594.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1595[7], i1594.sizeBySpeed)
  i1594.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1595[8], i1594.sizeOverLifetime)
  i1594.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1595[9], i1594.textureSheetAnimation)
  i1594.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1595[10], i1594.velocityOverLifetime)
  i1594.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1595[11], i1594.noise)
  i1594.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1595[12], i1594.inheritVelocity)
  i1594.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1595[13], i1594.forceOverLifetime)
  i1594.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1595[14], i1594.limitVelocityOverLifetime)
  i1594.useAutoRandomSeed = !!i1595[15]
  i1594.randomSeed = i1595[16]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1596 = root || new pc.ParticleSystemMain()
  var i1597 = data
  i1596.duration = i1597[0]
  i1596.loop = !!i1597[1]
  i1596.prewarm = !!i1597[2]
  i1596.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[3], i1596.startDelay)
  i1596.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[4], i1596.startLifetime)
  i1596.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[5], i1596.startSpeed)
  i1596.startSize3D = !!i1597[6]
  i1596.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[7], i1596.startSizeX)
  i1596.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[8], i1596.startSizeY)
  i1596.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[9], i1596.startSizeZ)
  i1596.startRotation3D = !!i1597[10]
  i1596.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[11], i1596.startRotationX)
  i1596.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[12], i1596.startRotationY)
  i1596.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[13], i1596.startRotationZ)
  i1596.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1597[14], i1596.startColor)
  i1596.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[15], i1596.gravityModifier)
  i1596.simulationSpace = i1597[16]
  request.r(i1597[17], i1597[18], 0, i1596, 'customSimulationSpace')
  i1596.simulationSpeed = i1597[19]
  i1596.useUnscaledTime = !!i1597[20]
  i1596.scalingMode = i1597[21]
  i1596.playOnAwake = !!i1597[22]
  i1596.maxParticles = i1597[23]
  i1596.emitterVelocityMode = i1597[24]
  i1596.stopAction = i1597[25]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1598 = root || new pc.MinMaxCurve()
  var i1599 = data
  i1598.mode = i1599[0]
  i1598.curveMin = new pc.AnimationCurve( { keys_flow: i1599[1] } )
  i1598.curveMax = new pc.AnimationCurve( { keys_flow: i1599[2] } )
  i1598.curveMultiplier = i1599[3]
  i1598.constantMin = i1599[4]
  i1598.constantMax = i1599[5]
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1600 = root || new pc.MinMaxGradient()
  var i1601 = data
  i1600.mode = i1601[0]
  i1600.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1601[1], i1600.gradientMin)
  i1600.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1601[2], i1600.gradientMax)
  i1600.colorMin = new pc.Color(i1601[3], i1601[4], i1601[5], i1601[6])
  i1600.colorMax = new pc.Color(i1601[7], i1601[8], i1601[9], i1601[10])
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1603 = data
  i1602.mode = i1603[0]
  var i1605 = i1603[1]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1605[i + 0]) );
  }
  i1602.colorKeys = i1604
  var i1607 = i1603[2]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1607[i + 0]) );
  }
  i1602.alphaKeys = i1606
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1608 = root || new pc.ParticleSystemColorBySpeed()
  var i1609 = data
  i1608.enabled = !!i1609[0]
  i1608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1609[1], i1608.color)
  i1608.range = new pc.Vec2( i1609[2], i1609[3] )
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1613 = data
  i1612.color = new pc.Color(i1613[0], i1613[1], i1613[2], i1613[3])
  i1612.time = i1613[4]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1617 = data
  i1616.alpha = i1617[0]
  i1616.time = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1618 = root || new pc.ParticleSystemColorOverLifetime()
  var i1619 = data
  i1618.enabled = !!i1619[0]
  i1618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1619[1], i1618.color)
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1620 = root || new pc.ParticleSystemEmitter()
  var i1621 = data
  i1620.enabled = !!i1621[0]
  i1620.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[1], i1620.rateOverTime)
  i1620.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1621[2], i1620.rateOverDistance)
  var i1623 = i1621[3]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1623[i + 0]) );
  }
  i1620.bursts = i1622
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1626 = root || new pc.ParticleSystemBurst()
  var i1627 = data
  i1626.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1627[0], i1626.count)
  i1626.cycleCount = i1627[1]
  i1626.minCount = i1627[2]
  i1626.maxCount = i1627[3]
  i1626.repeatInterval = i1627[4]
  i1626.time = i1627[5]
  return i1626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1628 = root || new pc.ParticleSystemRotationBySpeed()
  var i1629 = data
  i1628.enabled = !!i1629[0]
  i1628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[1], i1628.x)
  i1628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[2], i1628.y)
  i1628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1629[3], i1628.z)
  i1628.separateAxes = !!i1629[4]
  i1628.range = new pc.Vec2( i1629[5], i1629[6] )
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1630 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1631 = data
  i1630.enabled = !!i1631[0]
  i1630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[1], i1630.x)
  i1630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[2], i1630.y)
  i1630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1631[3], i1630.z)
  i1630.separateAxes = !!i1631[4]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1632 = root || new pc.ParticleSystemShape()
  var i1633 = data
  i1632.enabled = !!i1633[0]
  i1632.shapeType = i1633[1]
  i1632.randomDirectionAmount = i1633[2]
  i1632.sphericalDirectionAmount = i1633[3]
  i1632.randomPositionAmount = i1633[4]
  i1632.alignToDirection = !!i1633[5]
  i1632.radius = i1633[6]
  i1632.radiusMode = i1633[7]
  i1632.radiusSpread = i1633[8]
  i1632.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[9], i1632.radiusSpeed)
  i1632.radiusThickness = i1633[10]
  i1632.angle = i1633[11]
  i1632.length = i1633[12]
  i1632.boxThickness = new pc.Vec3( i1633[13], i1633[14], i1633[15] )
  i1632.meshShapeType = i1633[16]
  request.r(i1633[17], i1633[18], 0, i1632, 'mesh')
  request.r(i1633[19], i1633[20], 0, i1632, 'meshRenderer')
  request.r(i1633[21], i1633[22], 0, i1632, 'skinnedMeshRenderer')
  i1632.useMeshMaterialIndex = !!i1633[23]
  i1632.meshMaterialIndex = i1633[24]
  i1632.useMeshColors = !!i1633[25]
  i1632.normalOffset = i1633[26]
  i1632.arc = i1633[27]
  i1632.arcMode = i1633[28]
  i1632.arcSpread = i1633[29]
  i1632.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1633[30], i1632.arcSpeed)
  i1632.donutRadius = i1633[31]
  i1632.position = new pc.Vec3( i1633[32], i1633[33], i1633[34] )
  i1632.rotation = new pc.Vec3( i1633[35], i1633[36], i1633[37] )
  i1632.scale = new pc.Vec3( i1633[38], i1633[39], i1633[40] )
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1634 = root || new pc.ParticleSystemSizeBySpeed()
  var i1635 = data
  i1634.enabled = !!i1635[0]
  i1634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[1], i1634.x)
  i1634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[2], i1634.y)
  i1634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1635[3], i1634.z)
  i1634.separateAxes = !!i1635[4]
  i1634.range = new pc.Vec2( i1635[5], i1635[6] )
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1636 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1637 = data
  i1636.enabled = !!i1637[0]
  i1636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[1], i1636.x)
  i1636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[2], i1636.y)
  i1636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1637[3], i1636.z)
  i1636.separateAxes = !!i1637[4]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1638 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1639 = data
  i1638.enabled = !!i1639[0]
  i1638.mode = i1639[1]
  i1638.animation = i1639[2]
  i1638.numTilesX = i1639[3]
  i1638.numTilesY = i1639[4]
  i1638.useRandomRow = !!i1639[5]
  i1638.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[6], i1638.frameOverTime)
  i1638.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1639[7], i1638.startFrame)
  i1638.cycleCount = i1639[8]
  i1638.rowIndex = i1639[9]
  i1638.flipU = i1639[10]
  i1638.flipV = i1639[11]
  i1638.spriteCount = i1639[12]
  var i1641 = i1639[13]
  var i1640 = []
  for(var i = 0; i < i1641.length; i += 2) {
  request.r(i1641[i + 0], i1641[i + 1], 2, i1640, '')
  }
  i1638.sprites = i1640
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1645 = data
  i1644.enabled = !!i1645[0]
  i1644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[1], i1644.x)
  i1644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[2], i1644.y)
  i1644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[3], i1644.z)
  i1644.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[4], i1644.radial)
  i1644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[5], i1644.speedModifier)
  i1644.space = i1645[6]
  i1644.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[7], i1644.orbitalX)
  i1644.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[8], i1644.orbitalY)
  i1644.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[9], i1644.orbitalZ)
  i1644.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[10], i1644.orbitalOffsetX)
  i1644.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[11], i1644.orbitalOffsetY)
  i1644.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1645[12], i1644.orbitalOffsetZ)
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1646 = root || new pc.ParticleSystemNoise()
  var i1647 = data
  i1646.enabled = !!i1647[0]
  i1646.separateAxes = !!i1647[1]
  i1646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[2], i1646.strengthX)
  i1646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[3], i1646.strengthY)
  i1646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[4], i1646.strengthZ)
  i1646.frequency = i1647[5]
  i1646.damping = !!i1647[6]
  i1646.octaveCount = i1647[7]
  i1646.octaveMultiplier = i1647[8]
  i1646.octaveScale = i1647[9]
  i1646.quality = i1647[10]
  i1646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[11], i1646.scrollSpeed)
  i1646.scrollSpeedMultiplier = i1647[12]
  i1646.remapEnabled = !!i1647[13]
  i1646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[14], i1646.remapX)
  i1646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[15], i1646.remapY)
  i1646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[16], i1646.remapZ)
  i1646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[17], i1646.positionAmount)
  i1646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[18], i1646.rotationAmount)
  i1646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1647[19], i1646.sizeAmount)
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1648 = root || new pc.ParticleSystemInheritVelocity()
  var i1649 = data
  i1648.enabled = !!i1649[0]
  i1648.mode = i1649[1]
  i1648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1649[2], i1648.curve)
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1650 = root || new pc.ParticleSystemForceOverLifetime()
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[1], i1650.x)
  i1650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[2], i1650.y)
  i1650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1651[3], i1650.z)
  i1650.space = i1651[4]
  i1650.randomized = !!i1651[5]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1653 = data
  i1652.enabled = !!i1653[0]
  i1652.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[1], i1652.limit)
  i1652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[2], i1652.limitX)
  i1652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[3], i1652.limitY)
  i1652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[4], i1652.limitZ)
  i1652.dampen = i1653[5]
  i1652.separateAxes = !!i1653[6]
  i1652.space = i1653[7]
  i1652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1653[8], i1652.drag)
  i1652.multiplyDragByParticleSize = !!i1653[9]
  i1652.multiplyDragByParticleVelocity = !!i1653[10]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1655 = data
  i1654.enabled = !!i1655[0]
  request.r(i1655[1], i1655[2], 0, i1654, 'sharedMaterial')
  var i1657 = i1655[3]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.sharedMaterials = i1656
  i1654.receiveShadows = !!i1655[4]
  i1654.shadowCastingMode = i1655[5]
  i1654.sortingLayerID = i1655[6]
  i1654.sortingOrder = i1655[7]
  i1654.lightmapIndex = i1655[8]
  i1654.lightmapSceneIndex = i1655[9]
  i1654.lightmapScaleOffset = new pc.Vec4( i1655[10], i1655[11], i1655[12], i1655[13] )
  i1654.lightProbeUsage = i1655[14]
  i1654.reflectionProbeUsage = i1655[15]
  request.r(i1655[16], i1655[17], 0, i1654, 'mesh')
  i1654.meshCount = i1655[18]
  i1654.activeVertexStreamsCount = i1655[19]
  i1654.alignment = i1655[20]
  i1654.renderMode = i1655[21]
  i1654.sortMode = i1655[22]
  i1654.lengthScale = i1655[23]
  i1654.velocityScale = i1655[24]
  i1654.cameraVelocityScale = i1655[25]
  i1654.normalDirection = i1655[26]
  i1654.sortingFudge = i1655[27]
  i1654.minParticleSize = i1655[28]
  i1654.maxParticleSize = i1655[29]
  i1654.pivot = new pc.Vec3( i1655[30], i1655[31], i1655[32] )
  request.r(i1655[33], i1655[34], 0, i1654, 'trailMaterial')
  return i1654
}

Deserializers["TimeToDeactivate"] = function (request, data, root) {
  var i1658 = root || request.c( 'TimeToDeactivate' )
  var i1659 = data
  i1658.lifeTime = i1659[0]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1661 = data
  i1660.name = i1661[0]
  i1660.atlasId = i1661[1]
  i1660.mipmapCount = i1661[2]
  i1660.hdr = !!i1661[3]
  i1660.size = i1661[4]
  i1660.anisoLevel = i1661[5]
  i1660.filterMode = i1661[6]
  var i1663 = i1661[7]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 4) {
    i1662.push( UnityEngine.Rect.MinMaxRect(i1663[i + 0], i1663[i + 1], i1663[i + 2], i1663[i + 3]) );
  }
  i1660.rects = i1662
  i1660.wrapU = i1661[8]
  i1660.wrapV = i1661[9]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1667 = data
  i1666.name = i1667[0]
  i1666.index = i1667[1]
  i1666.startup = !!i1667[2]
  return i1666
}

Deserializers["Grid"] = function (request, data, root) {
  var i1668 = root || request.c( 'Grid' )
  var i1669 = data
  var i1671 = i1669[0]
  var i1670 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i1671.length; i += 2) {
  request.r(i1671[i + 0], i1671[i + 1], 1, i1670, '')
  }
  i1668.rows = i1670
  return i1668
}

Deserializers["Row"] = function (request, data, root) {
  var i1674 = root || request.c( 'Row' )
  var i1675 = data
  var i1677 = i1675[0]
  var i1676 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 1, i1676, '')
  }
  i1674.tiles = i1676
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1681 = data
  i1680.center = new pc.Vec3( i1681[0], i1681[1], i1681[2] )
  i1680.size = new pc.Vec3( i1681[3], i1681[4], i1681[5] )
  i1680.enabled = !!i1681[6]
  i1680.isTrigger = !!i1681[7]
  request.r(i1681[8], i1681[9], 0, i1680, 'material')
  return i1680
}

Deserializers["Tile"] = function (request, data, root) {
  var i1682 = root || request.c( 'Tile' )
  var i1683 = data
  i1682.gridPosition = new pc.Vec2( i1683[0], i1683[1] )
  i1682.isEmptyAfterCoinMove = !!i1683[2]
  request.r(i1683[3], i1683[4], 0, i1682, 'childCoin')
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1685 = data
  i1684.pivot = new pc.Vec2( i1685[0], i1685[1] )
  i1684.anchorMin = new pc.Vec2( i1685[2], i1685[3] )
  i1684.anchorMax = new pc.Vec2( i1685[4], i1685[5] )
  i1684.sizeDelta = new pc.Vec2( i1685[6], i1685[7] )
  i1684.anchoredPosition3D = new pc.Vec3( i1685[8], i1685[9], i1685[10] )
  i1684.rotation = new pc.Quat(i1685[11], i1685[12], i1685[13], i1685[14])
  i1684.scale = new pc.Vec3( i1685[15], i1685[16], i1685[17] )
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1687 = data
  i1686.enabled = !!i1687[0]
  i1686.planeDistance = i1687[1]
  i1686.referencePixelsPerUnit = i1687[2]
  i1686.isFallbackOverlay = !!i1687[3]
  i1686.renderMode = i1687[4]
  i1686.renderOrder = i1687[5]
  i1686.sortingLayerName = i1687[6]
  i1686.sortingOrder = i1687[7]
  i1686.scaleFactor = i1687[8]
  request.r(i1687[9], i1687[10], 0, i1686, 'worldCamera')
  i1686.overrideSorting = !!i1687[11]
  i1686.pixelPerfect = !!i1687[12]
  i1686.targetDisplay = i1687[13]
  i1686.overridePixelPerfect = !!i1687[14]
  return i1686
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1689 = data
  i1688.m_UiScaleMode = i1689[0]
  i1688.m_ReferencePixelsPerUnit = i1689[1]
  i1688.m_ScaleFactor = i1689[2]
  i1688.m_ReferenceResolution = new pc.Vec2( i1689[3], i1689[4] )
  i1688.m_ScreenMatchMode = i1689[5]
  i1688.m_MatchWidthOrHeight = i1689[6]
  i1688.m_PhysicalUnit = i1689[7]
  i1688.m_FallbackScreenDPI = i1689[8]
  i1688.m_DefaultSpriteDPI = i1689[9]
  i1688.m_DynamicPixelsPerUnit = i1689[10]
  i1688.m_PresetInfoIsWorld = !!i1689[11]
  return i1688
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1691 = data
  i1690.m_IgnoreReversedGraphics = !!i1691[0]
  i1690.m_BlockingObjects = i1691[1]
  i1690.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1691[2] )
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1693 = data
  i1692.cullTransparentMesh = !!i1693[0]
  return i1692
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.UI.Image' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'm_Sprite')
  i1694.m_Type = i1695[2]
  i1694.m_PreserveAspect = !!i1695[3]
  i1694.m_FillCenter = !!i1695[4]
  i1694.m_FillMethod = i1695[5]
  i1694.m_FillAmount = i1695[6]
  i1694.m_FillClockwise = !!i1695[7]
  i1694.m_FillOrigin = i1695[8]
  i1694.m_UseSpriteMesh = !!i1695[9]
  i1694.m_PixelsPerUnitMultiplier = i1695[10]
  request.r(i1695[11], i1695[12], 0, i1694, 'm_Material')
  i1694.m_Maskable = !!i1695[13]
  i1694.m_Color = new pc.Color(i1695[14], i1695[15], i1695[16], i1695[17])
  i1694.m_RaycastTarget = !!i1695[18]
  i1694.m_RaycastPadding = new pc.Vec4( i1695[19], i1695[20], i1695[21], i1695[22] )
  return i1694
}

Deserializers["Hole"] = function (request, data, root) {
  var i1696 = root || request.c( 'Hole' )
  var i1697 = data
  i1696.colorType = i1697[0]
  request.r(i1697[1], i1697[2], 0, i1696, 'pointToDropCoin')
  i1696.canClick = !!i1697[3]
  request.r(i1697[4], i1697[5], 0, i1696, 'skinnedMeshRenderer')
  var i1699 = i1697[6]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1699.length; i += 2) {
  request.r(i1699[i + 0], i1699[i + 1], 1, i1698, '')
  }
  i1696.tilesInHole = i1698
  var i1701 = i1697[7]
  var i1700 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i1701.length; i += 2) {
  request.r(i1701[i + 0], i1701[i + 1], 1, i1700, '')
  }
  i1696.targetTiles = i1700
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1703 = data
  i1702.enabled = !!i1703[0]
  request.r(i1703[1], i1703[2], 0, i1702, 'sharedMaterial')
  var i1705 = i1703[3]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 2) {
  request.r(i1705[i + 0], i1705[i + 1], 2, i1704, '')
  }
  i1702.sharedMaterials = i1704
  i1702.receiveShadows = !!i1703[4]
  i1702.shadowCastingMode = i1703[5]
  i1702.sortingLayerID = i1703[6]
  i1702.sortingOrder = i1703[7]
  i1702.lightmapIndex = i1703[8]
  i1702.lightmapSceneIndex = i1703[9]
  i1702.lightmapScaleOffset = new pc.Vec4( i1703[10], i1703[11], i1703[12], i1703[13] )
  i1702.lightProbeUsage = i1703[14]
  i1702.reflectionProbeUsage = i1703[15]
  request.r(i1703[16], i1703[17], 0, i1702, 'sharedMesh')
  var i1707 = i1703[18]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 2, i1706, '')
  }
  i1702.bones = i1706
  i1702.updateWhenOffscreen = !!i1703[19]
  i1702.localBounds = i1703[20]
  request.r(i1703[21], i1703[22], 0, i1702, 'rootBone')
  var i1709 = i1703[23]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1709[i + 0]) );
  }
  i1702.blendShapesWeights = i1708
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1713 = data
  i1712.weight = i1713[0]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.aspect = i1715[1]
  i1714.orthographic = !!i1715[2]
  i1714.orthographicSize = i1715[3]
  i1714.backgroundColor = new pc.Color(i1715[4], i1715[5], i1715[6], i1715[7])
  i1714.nearClipPlane = i1715[8]
  i1714.farClipPlane = i1715[9]
  i1714.fieldOfView = i1715[10]
  i1714.depth = i1715[11]
  i1714.clearFlags = i1715[12]
  i1714.cullingMask = i1715[13]
  i1714.rect = i1715[14]
  request.r(i1715[15], i1715[16], 0, i1714, 'targetTexture')
  i1714.usePhysicalProperties = !!i1715[17]
  i1714.focalLength = i1715[18]
  i1714.sensorSize = new pc.Vec2( i1715[19], i1715[20] )
  i1714.lensShift = new pc.Vec2( i1715[21], i1715[22] )
  i1714.gateFit = i1715[23]
  i1714.commandBufferCount = i1715[24]
  i1714.cameraType = i1715[25]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.type = i1717[1]
  i1716.color = new pc.Color(i1717[2], i1717[3], i1717[4], i1717[5])
  i1716.cullingMask = i1717[6]
  i1716.intensity = i1717[7]
  i1716.range = i1717[8]
  i1716.spotAngle = i1717[9]
  i1716.shadows = i1717[10]
  i1716.shadowNormalBias = i1717[11]
  i1716.shadowBias = i1717[12]
  i1716.shadowStrength = i1717[13]
  i1716.shadowResolution = i1717[14]
  i1716.lightmapBakeType = i1717[15]
  i1716.renderMode = i1717[16]
  request.r(i1717[17], i1717[18], 0, i1716, 'cookie')
  i1716.cookieSize = i1717[19]
  return i1716
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1719 = data
  request.r(i1719[0], i1719[1], 0, i1718, 'm_FirstSelected')
  i1718.m_sendNavigationEvents = !!i1719[2]
  i1718.m_DragThreshold = i1719[3]
  return i1718
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1721 = data
  i1720.m_HorizontalAxis = i1721[0]
  i1720.m_VerticalAxis = i1721[1]
  i1720.m_SubmitButton = i1721[2]
  i1720.m_CancelButton = i1721[3]
  i1720.m_InputActionsPerSecond = i1721[4]
  i1720.m_RepeatDelay = i1721[5]
  i1720.m_ForceModuleActive = !!i1721[6]
  i1720.m_SendPointerHoverToParent = !!i1721[7]
  return i1720
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i1722 = root || request.c( 'GamePlay' )
  var i1723 = data
  var i1725 = i1723[0]
  var i1724 = new (System.Collections.Generic.List$1(Bridge.ns('Hole')))
  for(var i = 0; i < i1725.length; i += 2) {
  request.r(i1725[i + 0], i1725[i + 1], 1, i1724, '')
  }
  i1722.holes = i1724
  var i1727 = i1723[1]
  var i1726 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 1, i1726, '')
  }
  i1722.pigs = i1726
  return i1722
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i1732 = root || request.c( 'TilePathfinder' )
  var i1733 = data
  return i1732
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i1734 = root || request.c( 'CoinManager' )
  var i1735 = data
  return i1734
}

Deserializers["Design"] = function (request, data, root) {
  var i1736 = root || request.c( 'Design' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'coinPrefab')
  request.r(i1737[2], i1737[3], 0, i1736, 'materialsSo')
  return i1736
}

Deserializers["Pig"] = function (request, data, root) {
  var i1738 = root || request.c( 'Pig' )
  var i1739 = data
  i1738.colorType = i1739[0]
  i1738.maxCoinCount = i1739[1]
  request.r(i1739[2], i1739[3], 0, i1738, 'positionToDropCoin')
  request.r(i1739[4], i1739[5], 0, i1738, 'endPoint')
  i1738.isDropping = !!i1739[6]
  request.r(i1739[7], i1739[8], 0, i1738, 'coinBag')
  request.r(i1739[9], i1739[10], 0, i1738, 'materialsSo')
  request.r(i1739[11], i1739[12], 0, i1738, 'coinPrefab')
  request.r(i1739[13], i1739[14], 0, i1738, 'confettiPrefab')
  i1738.coinColor = i1739[15]
  request.r(i1739[16], i1739[17], 0, i1738, 'skinnedMeshRenderer')
  request.r(i1739[18], i1739[19], 0, i1738, 'dropParticle')
  return i1738
}

Deserializers["BounceAnimation"] = function (request, data, root) {
  var i1740 = root || request.c( 'BounceAnimation' )
  var i1741 = data
  i1740.bounceDuration = i1741[0]
  i1740.bounceDelay = i1741[1]
  i1740.bounceScale = new pc.Vec3( i1741[2], i1741[3], i1741[4] )
  i1740.playOnStart = !!i1741[5]
  i1740.isLooping = !!i1741[6]
  i1740.easeType = i1741[7]
  return i1740
}

Deserializers["CoinBag"] = function (request, data, root) {
  var i1742 = root || request.c( 'CoinBag' )
  var i1743 = data
  request.r(i1743[0], i1743[1], 0, i1742, 'skinnedMeshRenderer')
  request.r(i1743[2], i1743[3], 0, i1742, 'spawnPoint')
  return i1742
}

Deserializers["TimeScaleDebugger"] = function (request, data, root) {
  var i1744 = root || request.c( 'TimeScaleDebugger' )
  var i1745 = data
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1747 = data
  i1746.ambientIntensity = i1747[0]
  i1746.reflectionIntensity = i1747[1]
  i1746.ambientMode = i1747[2]
  i1746.ambientLight = new pc.Color(i1747[3], i1747[4], i1747[5], i1747[6])
  i1746.ambientSkyColor = new pc.Color(i1747[7], i1747[8], i1747[9], i1747[10])
  i1746.ambientGroundColor = new pc.Color(i1747[11], i1747[12], i1747[13], i1747[14])
  i1746.ambientEquatorColor = new pc.Color(i1747[15], i1747[16], i1747[17], i1747[18])
  i1746.fogColor = new pc.Color(i1747[19], i1747[20], i1747[21], i1747[22])
  i1746.fogEndDistance = i1747[23]
  i1746.fogStartDistance = i1747[24]
  i1746.fogDensity = i1747[25]
  i1746.fog = !!i1747[26]
  request.r(i1747[27], i1747[28], 0, i1746, 'skybox')
  i1746.fogMode = i1747[29]
  var i1749 = i1747[30]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1749[i + 0]) );
  }
  i1746.lightmaps = i1748
  i1746.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1747[31], i1746.lightProbes)
  i1746.lightmapsMode = i1747[32]
  i1746.mixedBakeMode = i1747[33]
  i1746.environmentLightingMode = i1747[34]
  i1746.ambientProbe = new pc.SphericalHarmonicsL2(i1747[35])
  i1746.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1747[36])
  i1746.useReferenceAmbientProbe = !!i1747[37]
  request.r(i1747[38], i1747[39], 0, i1746, 'customReflection')
  request.r(i1747[40], i1747[41], 0, i1746, 'defaultReflection')
  i1746.defaultReflectionMode = i1747[42]
  i1746.defaultReflectionResolution = i1747[43]
  i1746.sunLightObjectId = i1747[44]
  i1746.pixelLightCount = i1747[45]
  i1746.defaultReflectionHDR = !!i1747[46]
  i1746.hasLightDataAsset = !!i1747[47]
  i1746.hasManualGenerate = !!i1747[48]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'lightmapColor')
  request.r(i1753[2], i1753[3], 0, i1752, 'lightmapDirection')
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1754 = root || new UnityEngine.LightProbes()
  var i1755 = data
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1763 = data
  var i1765 = i1763[0]
  var i1764 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1765[i + 0]));
  }
  i1762.ShaderCompilationErrors = i1764
  i1762.name = i1763[1]
  i1762.guid = i1763[2]
  var i1767 = i1763[3]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( i1767[i + 0] );
  }
  i1762.shaderDefinedKeywords = i1766
  var i1769 = i1763[4]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1769[i + 0]) );
  }
  i1762.passes = i1768
  var i1771 = i1763[5]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1771[i + 0]) );
  }
  i1762.usePasses = i1770
  var i1773 = i1763[6]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1773[i + 0]) );
  }
  i1762.defaultParameterValues = i1772
  request.r(i1763[7], i1763[8], 0, i1762, 'unityFallbackShader')
  i1762.readDepth = !!i1763[9]
  i1762.isCreatedByShaderGraph = !!i1763[10]
  i1762.compiled = !!i1763[11]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1777 = data
  i1776.shaderName = i1777[0]
  i1776.errorMessage = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1782 = root || new pc.UnityShaderPass()
  var i1783 = data
  i1782.id = i1783[0]
  i1782.subShaderIndex = i1783[1]
  i1782.name = i1783[2]
  i1782.passType = i1783[3]
  i1782.grabPassTextureName = i1783[4]
  i1782.usePass = !!i1783[5]
  i1782.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[6], i1782.zTest)
  i1782.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[7], i1782.zWrite)
  i1782.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[8], i1782.culling)
  i1782.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[9], i1782.blending)
  i1782.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1783[10], i1782.alphaBlending)
  i1782.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[11], i1782.colorWriteMask)
  i1782.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[12], i1782.offsetUnits)
  i1782.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[13], i1782.offsetFactor)
  i1782.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[14], i1782.stencilRef)
  i1782.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[15], i1782.stencilReadMask)
  i1782.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1783[16], i1782.stencilWriteMask)
  i1782.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[17], i1782.stencilOp)
  i1782.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[18], i1782.stencilOpFront)
  i1782.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1783[19], i1782.stencilOpBack)
  var i1785 = i1783[20]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1785[i + 0]) );
  }
  i1782.tags = i1784
  var i1787 = i1783[21]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1782.passDefinedKeywords = i1786
  var i1789 = i1783[22]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1789[i + 0]) );
  }
  i1782.passDefinedKeywordGroups = i1788
  var i1791 = i1783[23]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1791[i + 0]) );
  }
  i1782.variants = i1790
  var i1793 = i1783[24]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1793[i + 0]) );
  }
  i1782.excludedVariants = i1792
  i1782.hasDepthReader = !!i1783[25]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1795 = data
  i1794.val = i1795[0]
  i1794.name = i1795[1]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1797 = data
  i1796.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[0], i1796.src)
  i1796.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[1], i1796.dst)
  i1796.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1797[2], i1796.op)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1799 = data
  i1798.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[0], i1798.pass)
  i1798.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[1], i1798.fail)
  i1798.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[2], i1798.zFail)
  i1798.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1799[3], i1798.comp)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1803 = data
  i1802.name = i1803[0]
  i1802.value = i1803[1]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1807 = data
  var i1809 = i1807[0]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( i1809[i + 0] );
  }
  i1806.keywords = i1808
  i1806.hasDiscard = !!i1807[1]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1813 = data
  i1812.passId = i1813[0]
  i1812.subShaderIndex = i1813[1]
  var i1815 = i1813[2]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( i1815[i + 0] );
  }
  i1812.keywords = i1814
  i1812.vertexProgram = i1813[3]
  i1812.fragmentProgram = i1813[4]
  i1812.exportedForWebGl2 = !!i1813[5]
  i1812.readDepth = !!i1813[6]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'shader')
  i1818.pass = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.type = i1823[1]
  i1822.value = new pc.Vec4( i1823[2], i1823[3], i1823[4], i1823[5] )
  i1822.textureValue = i1823[6]
  i1822.shaderPropertyFlag = i1823[7]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1825 = data
  i1824.name = i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'texture')
  i1824.aabb = i1825[3]
  i1824.vertices = i1825[4]
  i1824.triangles = i1825[5]
  i1824.textureRect = UnityEngine.Rect.MinMaxRect(i1825[6], i1825[7], i1825[8], i1825[9])
  i1824.packedRect = UnityEngine.Rect.MinMaxRect(i1825[10], i1825[11], i1825[12], i1825[13])
  i1824.border = new pc.Vec4( i1825[14], i1825[15], i1825[16], i1825[17] )
  i1824.transparency = i1825[18]
  i1824.bounds = i1825[19]
  i1824.pixelsPerUnit = i1825[20]
  i1824.textureWidth = i1825[21]
  i1824.textureHeight = i1825[22]
  i1824.nativeSize = new pc.Vec2( i1825[23], i1825[24] )
  i1824.pivot = new pc.Vec2( i1825[25], i1825[26] )
  i1824.textureRectOffset = new pc.Vec2( i1825[27], i1825[28] )
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1827 = data
  i1826.name = i1827[0]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1829 = data
  i1828.name = i1829[0]
  i1828.wrapMode = i1829[1]
  i1828.isLooping = !!i1829[2]
  i1828.length = i1829[3]
  var i1831 = i1829[4]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1831[i + 0]) );
  }
  i1828.curves = i1830
  var i1833 = i1829[5]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1833[i + 0]) );
  }
  i1828.events = i1832
  i1828.halfPrecision = !!i1829[6]
  i1828._frameRate = i1829[7]
  i1828.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1829[8], i1828.localBounds)
  i1828.hasMuscleCurves = !!i1829[9]
  var i1835 = i1829[10]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1828.clipMuscleConstant = i1834
  i1828.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1829[11], i1828.clipBindingConstant)
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1839 = data
  i1838.path = i1839[0]
  i1838.hash = i1839[1]
  i1838.componentType = i1839[2]
  i1838.property = i1839[3]
  i1838.keys = i1839[4]
  var i1841 = i1839[5]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1841[i + 0]) );
  }
  i1838.objectReferenceKeys = i1840
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1845 = data
  i1844.time = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'value')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1849 = data
  i1848.functionName = i1849[0]
  i1848.floatParameter = i1849[1]
  i1848.intParameter = i1849[2]
  i1848.stringParameter = i1849[3]
  request.r(i1849[4], i1849[5], 0, i1848, 'objectReferenceParameter')
  i1848.time = i1849[6]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1851 = data
  i1850.center = new pc.Vec3( i1851[0], i1851[1], i1851[2] )
  i1850.extends = new pc.Vec3( i1851[3], i1851[4], i1851[5] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1855 = data
  var i1857 = i1855[0]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( i1857[i + 0] );
  }
  i1854.genericBindings = i1856
  var i1859 = i1855[1]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1854.pptrCurveMapping = i1858
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1861 = data
  i1860.name = i1861[0]
  var i1863 = i1861[1]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1863[i + 0]) );
  }
  i1860.layers = i1862
  var i1865 = i1861[2]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1865[i + 0]) );
  }
  i1860.parameters = i1864
  i1860.animationClips = i1861[3]
  i1860.avatarUnsupported = i1861[4]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1869 = data
  i1868.name = i1869[0]
  i1868.defaultWeight = i1869[1]
  i1868.blendingMode = i1869[2]
  i1868.avatarMask = i1869[3]
  i1868.syncedLayerIndex = i1869[4]
  i1868.syncedLayerAffectsTiming = !!i1869[5]
  i1868.syncedLayers = i1869[6]
  i1868.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1869[7], i1868.stateMachine)
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.name = i1871[1]
  i1870.path = i1871[2]
  var i1873 = i1871[3]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1873[i + 0]) );
  }
  i1870.states = i1872
  var i1875 = i1871[4]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1875[i + 0]) );
  }
  i1870.machines = i1874
  var i1877 = i1871[5]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1877[i + 0]) );
  }
  i1870.entryStateTransitions = i1876
  var i1879 = i1871[6]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1879[i + 0]) );
  }
  i1870.exitStateTransitions = i1878
  var i1881 = i1871[7]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1881[i + 0]) );
  }
  i1870.anyStateTransitions = i1880
  i1870.defaultStateId = i1871[8]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1885 = data
  i1884.id = i1885[0]
  i1884.name = i1885[1]
  i1884.cycleOffset = i1885[2]
  i1884.cycleOffsetParameter = i1885[3]
  i1884.cycleOffsetParameterActive = !!i1885[4]
  i1884.mirror = !!i1885[5]
  i1884.mirrorParameter = i1885[6]
  i1884.mirrorParameterActive = !!i1885[7]
  i1884.motionId = i1885[8]
  i1884.nameHash = i1885[9]
  i1884.fullPathHash = i1885[10]
  i1884.speed = i1885[11]
  i1884.speedParameter = i1885[12]
  i1884.speedParameterActive = !!i1885[13]
  i1884.tag = i1885[14]
  i1884.tagHash = i1885[15]
  i1884.writeDefaultValues = !!i1885[16]
  var i1887 = i1885[17]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 2) {
  request.r(i1887[i + 0], i1887[i + 1], 2, i1886, '')
  }
  i1884.behaviours = i1886
  var i1889 = i1885[18]
  var i1888 = []
  for(var i = 0; i < i1889.length; i += 1) {
    i1888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1889[i + 0]) );
  }
  i1884.transitions = i1888
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1895 = data
  i1894.fullPath = i1895[0]
  i1894.canTransitionToSelf = !!i1895[1]
  i1894.duration = i1895[2]
  i1894.exitTime = i1895[3]
  i1894.hasExitTime = !!i1895[4]
  i1894.hasFixedDuration = !!i1895[5]
  i1894.interruptionSource = i1895[6]
  i1894.offset = i1895[7]
  i1894.orderedInterruption = !!i1895[8]
  i1894.destinationStateId = i1895[9]
  i1894.isExit = !!i1895[10]
  i1894.mute = !!i1895[11]
  i1894.solo = !!i1895[12]
  var i1897 = i1895[13]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1897[i + 0]) );
  }
  i1894.conditions = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1901 = data
  i1900.mode = i1901[0]
  i1900.parameter = i1901[1]
  i1900.threshold = i1901[2]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1907 = data
  i1906.destinationStateId = i1907[0]
  i1906.isExit = !!i1907[1]
  i1906.mute = !!i1907[2]
  i1906.solo = !!i1907[3]
  var i1909 = i1907[4]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1909[i + 0]) );
  }
  i1906.conditions = i1908
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1913 = data
  i1912.defaultBool = !!i1913[0]
  i1912.defaultFloat = i1913[1]
  i1912.defaultInt = i1913[2]
  i1912.name = i1913[3]
  i1912.nameHash = i1913[4]
  i1912.type = i1913[5]
  return i1912
}

Deserializers["MaterialsSO"] = function (request, data, root) {
  var i1914 = root || request.c( 'MaterialsSO' )
  var i1915 = data
  var i1917 = i1915[0]
  var i1916 = new (System.Collections.Generic.List$1(Bridge.ns('MainMaterials')))
  for(var i = 0; i < i1917.length; i += 1) {
    i1916.add(request.d('MainMaterials', i1917[i + 0]));
  }
  i1914.mainMaterials = i1916
  return i1914
}

Deserializers["MainMaterials"] = function (request, data, root) {
  var i1920 = root || request.c( 'MainMaterials' )
  var i1921 = data
  i1920.colorType = i1921[0]
  request.r(i1921[1], i1921[2], 0, i1920, 'material')
  request.r(i1921[3], i1921[4], 0, i1920, 'pitMaterial')
  request.r(i1921[5], i1921[6], 0, i1920, 'coinMaterial')
  request.r(i1921[7], i1921[8], 0, i1920, 'pigMaterial')
  return i1920
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1922 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1923 = data
  i1922.useSafeMode = !!i1923[0]
  i1922.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1923[1], i1922.safeModeOptions)
  i1922.timeScale = i1923[2]
  i1922.unscaledTimeScale = i1923[3]
  i1922.useSmoothDeltaTime = !!i1923[4]
  i1922.maxSmoothUnscaledTime = i1923[5]
  i1922.rewindCallbackMode = i1923[6]
  i1922.showUnityEditorReport = !!i1923[7]
  i1922.logBehaviour = i1923[8]
  i1922.drawGizmos = !!i1923[9]
  i1922.defaultRecyclable = !!i1923[10]
  i1922.defaultAutoPlay = i1923[11]
  i1922.defaultUpdateType = i1923[12]
  i1922.defaultTimeScaleIndependent = !!i1923[13]
  i1922.defaultEaseType = i1923[14]
  i1922.defaultEaseOvershootOrAmplitude = i1923[15]
  i1922.defaultEasePeriod = i1923[16]
  i1922.defaultAutoKill = !!i1923[17]
  i1922.defaultLoopType = i1923[18]
  i1922.debugMode = !!i1923[19]
  i1922.debugStoreTargetId = !!i1923[20]
  i1922.showPreviewPanel = !!i1923[21]
  i1922.storeSettingsLocation = i1923[22]
  i1922.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1923[23], i1922.modules)
  i1922.createASMDEF = !!i1923[24]
  i1922.showPlayingTweens = !!i1923[25]
  i1922.showPausedTweens = !!i1923[26]
  return i1922
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1924 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1925 = data
  i1924.logBehaviour = i1925[0]
  i1924.nestedTweenFailureBehaviour = i1925[1]
  return i1924
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1926 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1927 = data
  i1926.showPanel = !!i1927[0]
  i1926.audioEnabled = !!i1927[1]
  i1926.physicsEnabled = !!i1927[2]
  i1926.physics2DEnabled = !!i1927[3]
  i1926.spriteEnabled = !!i1927[4]
  i1926.uiEnabled = !!i1927[5]
  i1926.textMeshProEnabled = !!i1927[6]
  i1926.tk2DEnabled = !!i1927[7]
  i1926.deAudioEnabled = !!i1927[8]
  i1926.deUnityExtendedEnabled = !!i1927[9]
  i1926.epoOutlineEnabled = !!i1927[10]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1929 = data
  var i1931 = i1929[0]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1931[i + 0]) );
  }
  i1928.files = i1930
  i1928.componentToPrefabIds = i1929[1]
  return i1928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1935 = data
  i1934.path = i1935[0]
  request.r(i1935[1], i1935[2], 0, i1934, 'unityObject')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1937 = data
  var i1939 = i1937[0]
  var i1938 = []
  for(var i = 0; i < i1939.length; i += 1) {
    i1938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1939[i + 0]) );
  }
  i1936.scriptsExecutionOrder = i1938
  var i1941 = i1937[1]
  var i1940 = []
  for(var i = 0; i < i1941.length; i += 1) {
    i1940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1941[i + 0]) );
  }
  i1936.sortingLayers = i1940
  var i1943 = i1937[2]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1943[i + 0]) );
  }
  i1936.cullingLayers = i1942
  i1936.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1937[3], i1936.timeSettings)
  i1936.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1937[4], i1936.physicsSettings)
  i1936.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1937[5], i1936.physics2DSettings)
  i1936.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1937[6], i1936.qualitySettings)
  i1936.enableRealtimeShadows = !!i1937[7]
  i1936.enableAutoInstancing = !!i1937[8]
  i1936.enableDynamicBatching = !!i1937[9]
  i1936.lightmapEncodingQuality = i1937[10]
  i1936.desiredColorSpace = i1937[11]
  var i1945 = i1937[12]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( i1945[i + 0] );
  }
  i1936.allTags = i1944
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1949 = data
  i1948.name = i1949[0]
  i1948.value = i1949[1]
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1953 = data
  i1952.id = i1953[0]
  i1952.name = i1953[1]
  i1952.value = i1953[2]
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1957 = data
  i1956.id = i1957[0]
  i1956.name = i1957[1]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1959 = data
  i1958.fixedDeltaTime = i1959[0]
  i1958.maximumDeltaTime = i1959[1]
  i1958.timeScale = i1959[2]
  i1958.maximumParticleTimestep = i1959[3]
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1961 = data
  i1960.gravity = new pc.Vec3( i1961[0], i1961[1], i1961[2] )
  i1960.defaultSolverIterations = i1961[3]
  i1960.bounceThreshold = i1961[4]
  i1960.autoSyncTransforms = !!i1961[5]
  i1960.autoSimulation = !!i1961[6]
  var i1963 = i1961[7]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1963[i + 0]) );
  }
  i1960.collisionMatrix = i1962
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.layerId = i1967[1]
  i1966.otherLayerId = i1967[2]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'material')
  i1968.gravity = new pc.Vec2( i1969[2], i1969[3] )
  i1968.positionIterations = i1969[4]
  i1968.velocityIterations = i1969[5]
  i1968.velocityThreshold = i1969[6]
  i1968.maxLinearCorrection = i1969[7]
  i1968.maxAngularCorrection = i1969[8]
  i1968.maxTranslationSpeed = i1969[9]
  i1968.maxRotationSpeed = i1969[10]
  i1968.baumgarteScale = i1969[11]
  i1968.baumgarteTOIScale = i1969[12]
  i1968.timeToSleep = i1969[13]
  i1968.linearSleepTolerance = i1969[14]
  i1968.angularSleepTolerance = i1969[15]
  i1968.defaultContactOffset = i1969[16]
  i1968.autoSimulation = !!i1969[17]
  i1968.queriesHitTriggers = !!i1969[18]
  i1968.queriesStartInColliders = !!i1969[19]
  i1968.callbacksOnDisable = !!i1969[20]
  i1968.reuseCollisionCallbacks = !!i1969[21]
  i1968.autoSyncTransforms = !!i1969[22]
  var i1971 = i1969[23]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1971[i + 0]) );
  }
  i1968.collisionMatrix = i1970
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1975 = data
  i1974.enabled = !!i1975[0]
  i1974.layerId = i1975[1]
  i1974.otherLayerId = i1975[2]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1977 = data
  var i1979 = i1977[0]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1979[i + 0]) );
  }
  i1976.qualityLevels = i1978
  var i1981 = i1977[1]
  var i1980 = []
  for(var i = 0; i < i1981.length; i += 1) {
    i1980.push( i1981[i + 0] );
  }
  i1976.names = i1980
  i1976.shadows = i1977[2]
  i1976.anisotropicFiltering = i1977[3]
  i1976.antiAliasing = i1977[4]
  i1976.lodBias = i1977[5]
  i1976.shadowCascades = i1977[6]
  i1976.shadowDistance = i1977[7]
  i1976.shadowmaskMode = i1977[8]
  i1976.shadowProjection = i1977[9]
  i1976.shadowResolution = i1977[10]
  i1976.softParticles = !!i1977[11]
  i1976.softVegetation = !!i1977[12]
  i1976.activeColorSpace = i1977[13]
  i1976.desiredColorSpace = i1977[14]
  i1976.masterTextureLimit = i1977[15]
  i1976.maxQueuedFrames = i1977[16]
  i1976.particleRaycastBudget = i1977[17]
  i1976.pixelLightCount = i1977[18]
  i1976.realtimeReflectionProbes = !!i1977[19]
  i1976.shadowCascade2Split = i1977[20]
  i1976.shadowCascade4Split = new pc.Vec3( i1977[21], i1977[22], i1977[23] )
  i1976.streamingMipmapsActive = !!i1977[24]
  i1976.vSyncCount = i1977[25]
  i1976.asyncUploadBufferSize = i1977[26]
  i1976.asyncUploadTimeSlice = i1977[27]
  i1976.billboardsFaceCameraPosition = !!i1977[28]
  i1976.shadowNearPlaneOffset = i1977[29]
  i1976.streamingMipmapsMemoryBudget = i1977[30]
  i1976.maximumLODLevel = i1977[31]
  i1976.streamingMipmapsAddAllCameras = !!i1977[32]
  i1976.streamingMipmapsMaxLevelReduction = i1977[33]
  i1976.streamingMipmapsRenderersPerFrame = i1977[34]
  i1976.resolutionScalingFixedDPIFactor = i1977[35]
  i1976.streamingMipmapsMaxFileIORequests = i1977[36]
  i1976.currentQualityLevel = i1977[37]
  return i1976
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[31],"55":[24],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[24],"79":[7],"80":[81],"82":[81],"23":[22],"83":[22],"84":[24],"85":[24],"86":[33],"87":[88],"89":[22],"90":[22],"27":[23],"29":[28,22],"91":[22],"26":[23],"92":[22],"93":[22],"94":[22],"95":[22],"96":[22],"97":[22],"98":[22],"99":[22],"100":[22],"101":[28,22],"102":[22],"103":[22],"104":[22],"105":[22],"106":[28,22],"107":[22],"108":[34],"109":[34],"35":[34],"110":[34],"111":[24],"112":[24],"113":[88],"114":[24],"115":[88],"116":[90,22],"117":[90,22],"118":[90,22],"119":[90,22],"120":[90,22],"121":[90,22],"122":[90,22],"123":[90,22],"124":[90,22],"125":[90,22],"126":[90,22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","Coin","UnityEngine.MeshRenderer","UnityEngine.Animator","UnityEngine.GameObject","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","TimeToDeactivate","UnityEngine.Sprite","Grid","Row","Tile","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","Pig","TilePathfinder","CoinManager","Design","MaterialsSO","CoinBag","BounceAnimation","TimeScaleDebugger","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/11/2025 07:00:15";

Deserializers.lunaDaysRunning = "2.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "HC";

Deserializers.lunaAppID = "31927";

Deserializers.projectId = "8dd6c23a054ebdf4789e7fb4978079d8";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.render-pipelines.universal: 14.0.11\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1875";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3666";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "Kawaii Games Studio";

Deserializers.buildPlatform = "WebGL";

Deserializers.applicationIdentifier = "com.Kawaii-Games-Studio.Hole-Coin";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "c4357918-83b1-499b-a6e4-99589699867a";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

