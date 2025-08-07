var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  i464.m_UseAcceleration = i465[3]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i480 = root || new pc.UnityMaterial()
  var i481 = data
  i480.name = i481[0]
  request.r(i481[1], i481[2], 0, i480, 'shader')
  i480.renderQueue = i481[3]
  i480.enableInstancing = !!i481[4]
  var i483 = i481[5]
  var i482 = []
  for(var i = 0; i < i483.length; i += 1) {
    i482.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i483[i + 0]) );
  }
  i480.floatParameters = i482
  var i485 = i481[6]
  var i484 = []
  for(var i = 0; i < i485.length; i += 1) {
    i484.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i485[i + 0]) );
  }
  i480.colorParameters = i484
  var i487 = i481[7]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i487[i + 0]) );
  }
  i480.vectorParameters = i486
  var i489 = i481[8]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i489[i + 0]) );
  }
  i480.textureParameters = i488
  var i491 = i481[9]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i491[i + 0]) );
  }
  i480.materialFlags = i490
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i495 = data
  i494.name = i495[0]
  i494.value = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i499 = data
  i498.name = i499[0]
  i498.value = new pc.Color(i499[1], i499[2], i499[3], i499[4])
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i503 = data
  i502.name = i503[0]
  i502.value = new pc.Vec4( i503[1], i503[2], i503[3], i503[4] )
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'value')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i511 = data
  i510.name = i511[0]
  i510.enabled = !!i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i513 = data
  i512.name = i513[0]
  i512.halfPrecision = !!i513[1]
  i512.useUInt32IndexFormat = !!i513[2]
  i512.vertexCount = i513[3]
  i512.aabb = i513[4]
  var i515 = i513[5]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( !!i515[i + 0] );
  }
  i512.streams = i514
  i512.vertices = i513[6]
  var i517 = i513[7]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i517[i + 0]) );
  }
  i512.subMeshes = i516
  var i519 = i513[8]
  var i518 = []
  for(var i = 0; i < i519.length; i += 16) {
    i518.push( new pc.Mat4().setData(i519[i + 0], i519[i + 1], i519[i + 2], i519[i + 3],  i519[i + 4], i519[i + 5], i519[i + 6], i519[i + 7],  i519[i + 8], i519[i + 9], i519[i + 10], i519[i + 11],  i519[i + 12], i519[i + 13], i519[i + 14], i519[i + 15]) );
  }
  i512.bindposes = i518
  var i521 = i513[9]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i521[i + 0]) );
  }
  i512.blendShapes = i520
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i527 = data
  i526.triangles = i527[0]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i533 = data
  i532.name = i533[0]
  var i535 = i533[1]
  var i534 = []
  for(var i = 0; i < i535.length; i += 1) {
    i534.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i535[i + 0]) );
  }
  i532.frames = i534
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i537 = data
  i536.name = i537[0]
  i536.width = i537[1]
  i536.height = i537[2]
  i536.mipmapCount = i537[3]
  i536.anisoLevel = i537[4]
  i536.filterMode = i537[5]
  i536.hdr = !!i537[6]
  i536.format = i537[7]
  i536.wrapMode = i537[8]
  i536.alphaIsTransparency = !!i537[9]
  i536.alphaSource = i537[10]
  i536.graphicsFormat = i537[11]
  i536.sRGBTexture = !!i537[12]
  i536.desiredColorSpace = i537[13]
  i536.wrapU = i537[14]
  i536.wrapV = i537[15]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i541 = data
  i540.weight = i541[0]
  i540.vertices = i541[1]
  i540.normals = i541[2]
  i540.tangents = i541[3]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i543 = data
  i542.name = i543[0]
  i542.atlasId = i543[1]
  i542.mipmapCount = i543[2]
  i542.hdr = !!i543[3]
  i542.size = i543[4]
  i542.anisoLevel = i543[5]
  i542.filterMode = i543[6]
  var i545 = i543[7]
  var i544 = []
  for(var i = 0; i < i545.length; i += 4) {
    i544.push( UnityEngine.Rect.MinMaxRect(i545[i + 0], i545[i + 1], i545[i + 2], i545[i + 3]) );
  }
  i542.rects = i544
  i542.wrapU = i543[8]
  i542.wrapV = i543[9]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i549 = data
  i548.name = i549[0]
  i548.index = i549[1]
  i548.startup = !!i549[2]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i551 = data
  i550.position = new pc.Vec3( i551[0], i551[1], i551[2] )
  i550.scale = new pc.Vec3( i551[3], i551[4], i551[5] )
  i550.rotation = new pc.Quat(i551[6], i551[7], i551[8], i551[9])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i553 = data
  i552.name = i553[0]
  i552.tagId = i553[1]
  i552.enabled = !!i553[2]
  i552.isStatic = !!i553[3]
  i552.layer = i553[4]
  return i552
}

Deserializers["Grid"] = function (request, data, root) {
  var i554 = root || request.c( 'Grid' )
  var i555 = data
  var i557 = i555[0]
  var i556 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 1, i556, '')
  }
  i554.rows = i556
  return i554
}

Deserializers["Row"] = function (request, data, root) {
  var i560 = root || request.c( 'Row' )
  var i561 = data
  var i563 = i561[0]
  var i562 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i563.length; i += 2) {
  request.r(i563[i + 0], i563[i + 1], 1, i562, '')
  }
  i560.tiles = i562
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'sharedMesh')
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'additionalVertexStreams')
  i568.enabled = !!i569[2]
  request.r(i569[3], i569[4], 0, i568, 'sharedMaterial')
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 2) {
  request.r(i571[i + 0], i571[i + 1], 2, i570, '')
  }
  i568.sharedMaterials = i570
  i568.receiveShadows = !!i569[6]
  i568.shadowCastingMode = i569[7]
  i568.sortingLayerID = i569[8]
  i568.sortingOrder = i569[9]
  i568.lightmapIndex = i569[10]
  i568.lightmapSceneIndex = i569[11]
  i568.lightmapScaleOffset = new pc.Vec4( i569[12], i569[13], i569[14], i569[15] )
  i568.lightProbeUsage = i569[16]
  i568.reflectionProbeUsage = i569[17]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i575 = data
  i574.center = new pc.Vec3( i575[0], i575[1], i575[2] )
  i574.size = new pc.Vec3( i575[3], i575[4], i575[5] )
  i574.enabled = !!i575[6]
  i574.isTrigger = !!i575[7]
  request.r(i575[8], i575[9], 0, i574, 'material')
  return i574
}

Deserializers["Tile"] = function (request, data, root) {
  var i576 = root || request.c( 'Tile' )
  var i577 = data
  i576.gridPosition = new pc.Vec2( i577[0], i577[1] )
  i576.isEmptyAfterCoinMove = !!i577[2]
  request.r(i577[3], i577[4], 0, i576, 'childCoin')
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i579 = data
  request.r(i579[0], i579[1], 0, i578, 'clip')
  request.r(i579[2], i579[3], 0, i578, 'outputAudioMixerGroup')
  i578.playOnAwake = !!i579[4]
  i578.loop = !!i579[5]
  i578.time = i579[6]
  i578.volume = i579[7]
  i578.pitch = i579[8]
  i578.enabled = !!i579[9]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i581 = data
  request.r(i581[0], i581[1], 0, i580, 'animatorController')
  request.r(i581[2], i581[3], 0, i580, 'avatar')
  i580.updateMode = i581[4]
  i580.hasTransformHierarchy = !!i581[5]
  i580.applyRootMotion = !!i581[6]
  var i583 = i581[7]
  var i582 = []
  for(var i = 0; i < i583.length; i += 2) {
  request.r(i583[i + 0], i583[i + 1], 2, i582, '')
  }
  i580.humanBones = i582
  i580.enabled = !!i581[8]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i587 = data
  i586.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i587[0], i586.main)
  i586.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i587[1], i586.colorBySpeed)
  i586.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i587[2], i586.colorOverLifetime)
  i586.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i587[3], i586.emission)
  i586.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i587[4], i586.rotationBySpeed)
  i586.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i587[5], i586.rotationOverLifetime)
  i586.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i587[6], i586.shape)
  i586.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i587[7], i586.sizeBySpeed)
  i586.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i587[8], i586.sizeOverLifetime)
  i586.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i587[9], i586.textureSheetAnimation)
  i586.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i587[10], i586.velocityOverLifetime)
  i586.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i587[11], i586.noise)
  i586.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i587[12], i586.inheritVelocity)
  i586.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i587[13], i586.forceOverLifetime)
  i586.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i587[14], i586.limitVelocityOverLifetime)
  i586.useAutoRandomSeed = !!i587[15]
  i586.randomSeed = i587[16]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemMain()
  var i589 = data
  i588.duration = i589[0]
  i588.loop = !!i589[1]
  i588.prewarm = !!i589[2]
  i588.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.startDelay)
  i588.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.startLifetime)
  i588.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[5], i588.startSpeed)
  i588.startSize3D = !!i589[6]
  i588.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[7], i588.startSizeX)
  i588.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[8], i588.startSizeY)
  i588.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.startSizeZ)
  i588.startRotation3D = !!i589[10]
  i588.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[11], i588.startRotationX)
  i588.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[12], i588.startRotationY)
  i588.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[13], i588.startRotationZ)
  i588.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i589[14], i588.startColor)
  i588.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[15], i588.gravityModifier)
  i588.simulationSpace = i589[16]
  request.r(i589[17], i589[18], 0, i588, 'customSimulationSpace')
  i588.simulationSpeed = i589[19]
  i588.useUnscaledTime = !!i589[20]
  i588.scalingMode = i589[21]
  i588.playOnAwake = !!i589[22]
  i588.maxParticles = i589[23]
  i588.emitterVelocityMode = i589[24]
  i588.stopAction = i589[25]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i590 = root || new pc.MinMaxCurve()
  var i591 = data
  i590.mode = i591[0]
  i590.curveMin = new pc.AnimationCurve( { keys_flow: i591[1] } )
  i590.curveMax = new pc.AnimationCurve( { keys_flow: i591[2] } )
  i590.curveMultiplier = i591[3]
  i590.constantMin = i591[4]
  i590.constantMax = i591[5]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i592 = root || new pc.MinMaxGradient()
  var i593 = data
  i592.mode = i593[0]
  i592.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i593[1], i592.gradientMin)
  i592.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i593[2], i592.gradientMax)
  i592.colorMin = new pc.Color(i593[3], i593[4], i593[5], i593[6])
  i592.colorMax = new pc.Color(i593[7], i593[8], i593[9], i593[10])
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i595 = data
  i594.mode = i595[0]
  var i597 = i595[1]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i597[i + 0]) );
  }
  i594.colorKeys = i596
  var i599 = i595[2]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i599[i + 0]) );
  }
  i594.alphaKeys = i598
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i600 = root || new pc.ParticleSystemColorBySpeed()
  var i601 = data
  i600.enabled = !!i601[0]
  i600.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i601[1], i600.color)
  i600.range = new pc.Vec2( i601[2], i601[3] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i605 = data
  i604.color = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  i604.time = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i609 = data
  i608.alpha = i609[0]
  i608.time = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemColorOverLifetime()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i611[1], i610.color)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemEmitter()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[1], i612.rateOverTime)
  i612.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[2], i612.rateOverDistance)
  var i615 = i613[3]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i615[i + 0]) );
  }
  i612.bursts = i614
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemBurst()
  var i619 = data
  i618.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[0], i618.count)
  i618.cycleCount = i619[1]
  i618.minCount = i619[2]
  i618.maxCount = i619[3]
  i618.repeatInterval = i619[4]
  i618.time = i619[5]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemRotationBySpeed()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.x)
  i620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.y)
  i620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[3], i620.z)
  i620.separateAxes = !!i621[4]
  i620.range = new pc.Vec2( i621[5], i621[6] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemRotationOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.separateAxes = !!i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemShape()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.shapeType = i625[1]
  i624.randomDirectionAmount = i625[2]
  i624.sphericalDirectionAmount = i625[3]
  i624.randomPositionAmount = i625[4]
  i624.alignToDirection = !!i625[5]
  i624.radius = i625[6]
  i624.radiusMode = i625[7]
  i624.radiusSpread = i625[8]
  i624.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[9], i624.radiusSpeed)
  i624.radiusThickness = i625[10]
  i624.angle = i625[11]
  i624.length = i625[12]
  i624.boxThickness = new pc.Vec3( i625[13], i625[14], i625[15] )
  i624.meshShapeType = i625[16]
  request.r(i625[17], i625[18], 0, i624, 'mesh')
  request.r(i625[19], i625[20], 0, i624, 'meshRenderer')
  request.r(i625[21], i625[22], 0, i624, 'skinnedMeshRenderer')
  i624.useMeshMaterialIndex = !!i625[23]
  i624.meshMaterialIndex = i625[24]
  i624.useMeshColors = !!i625[25]
  i624.normalOffset = i625[26]
  i624.arc = i625[27]
  i624.arcMode = i625[28]
  i624.arcSpread = i625[29]
  i624.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[30], i624.arcSpeed)
  i624.donutRadius = i625[31]
  i624.position = new pc.Vec3( i625[32], i625[33], i625[34] )
  i624.rotation = new pc.Vec3( i625[35], i625[36], i625[37] )
  i624.scale = new pc.Vec3( i625[38], i625[39], i625[40] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemSizeBySpeed()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[1], i626.x)
  i626.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[2], i626.y)
  i626.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[3], i626.z)
  i626.separateAxes = !!i627[4]
  i626.range = new pc.Vec2( i627[5], i627[6] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemSizeOverLifetime()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.mode = i631[1]
  i630.animation = i631[2]
  i630.numTilesX = i631[3]
  i630.numTilesY = i631[4]
  i630.useRandomRow = !!i631[5]
  i630.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[6], i630.frameOverTime)
  i630.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[7], i630.startFrame)
  i630.cycleCount = i631[8]
  i630.rowIndex = i631[9]
  i630.flipU = i631[10]
  i630.flipV = i631[11]
  i630.spriteCount = i631[12]
  var i633 = i631[13]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sprites = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.radial)
  i636.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.speedModifier)
  i636.space = i637[6]
  i636.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.orbitalX)
  i636.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.orbitalY)
  i636.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.orbitalZ)
  i636.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[10], i636.orbitalOffsetX)
  i636.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.orbitalOffsetY)
  i636.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.orbitalOffsetZ)
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemNoise()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.separateAxes = !!i639[1]
  i638.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.strengthX)
  i638.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.strengthY)
  i638.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.strengthZ)
  i638.frequency = i639[5]
  i638.damping = !!i639[6]
  i638.octaveCount = i639[7]
  i638.octaveMultiplier = i639[8]
  i638.octaveScale = i639[9]
  i638.quality = i639[10]
  i638.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.scrollSpeed)
  i638.scrollSpeedMultiplier = i639[12]
  i638.remapEnabled = !!i639[13]
  i638.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[14], i638.remapX)
  i638.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[15], i638.remapY)
  i638.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[16], i638.remapZ)
  i638.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[17], i638.positionAmount)
  i638.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[18], i638.rotationAmount)
  i638.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[19], i638.sizeAmount)
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemInheritVelocity()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.mode = i641[1]
  i640.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.curve)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemForceOverLifetime()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.space = i643[4]
  i642.randomized = !!i643[5]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.limit)
  i644.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.limitX)
  i644.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.limitY)
  i644.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[4], i644.limitZ)
  i644.dampen = i645[5]
  i644.separateAxes = !!i645[6]
  i644.space = i645[7]
  i644.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[8], i644.drag)
  i644.multiplyDragByParticleSize = !!i645[9]
  i644.multiplyDragByParticleVelocity = !!i645[10]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i647 = data
  i646.enabled = !!i647[0]
  request.r(i647[1], i647[2], 0, i646, 'sharedMaterial')
  var i649 = i647[3]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.sharedMaterials = i648
  i646.receiveShadows = !!i647[4]
  i646.shadowCastingMode = i647[5]
  i646.sortingLayerID = i647[6]
  i646.sortingOrder = i647[7]
  i646.lightmapIndex = i647[8]
  i646.lightmapSceneIndex = i647[9]
  i646.lightmapScaleOffset = new pc.Vec4( i647[10], i647[11], i647[12], i647[13] )
  i646.lightProbeUsage = i647[14]
  i646.reflectionProbeUsage = i647[15]
  request.r(i647[16], i647[17], 0, i646, 'mesh')
  i646.meshCount = i647[18]
  i646.activeVertexStreamsCount = i647[19]
  i646.alignment = i647[20]
  i646.renderMode = i647[21]
  i646.sortMode = i647[22]
  i646.lengthScale = i647[23]
  i646.velocityScale = i647[24]
  i646.cameraVelocityScale = i647[25]
  i646.normalDirection = i647[26]
  i646.sortingFudge = i647[27]
  i646.minParticleSize = i647[28]
  i646.maxParticleSize = i647[29]
  i646.pivot = new pc.Vec3( i647[30], i647[31], i647[32] )
  request.r(i647[33], i647[34], 0, i646, 'trailMaterial')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i651 = data
  i650.pivot = new pc.Vec2( i651[0], i651[1] )
  i650.anchorMin = new pc.Vec2( i651[2], i651[3] )
  i650.anchorMax = new pc.Vec2( i651[4], i651[5] )
  i650.sizeDelta = new pc.Vec2( i651[6], i651[7] )
  i650.anchoredPosition3D = new pc.Vec3( i651[8], i651[9], i651[10] )
  i650.rotation = new pc.Quat(i651[11], i651[12], i651[13], i651[14])
  i650.scale = new pc.Vec3( i651[15], i651[16], i651[17] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.planeDistance = i653[1]
  i652.referencePixelsPerUnit = i653[2]
  i652.isFallbackOverlay = !!i653[3]
  i652.renderMode = i653[4]
  i652.renderOrder = i653[5]
  i652.sortingLayerName = i653[6]
  i652.sortingOrder = i653[7]
  i652.scaleFactor = i653[8]
  request.r(i653[9], i653[10], 0, i652, 'worldCamera')
  i652.overrideSorting = !!i653[11]
  i652.pixelPerfect = !!i653[12]
  i652.targetDisplay = i653[13]
  i652.overridePixelPerfect = !!i653[14]
  return i652
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i655 = data
  i654.m_UiScaleMode = i655[0]
  i654.m_ReferencePixelsPerUnit = i655[1]
  i654.m_ScaleFactor = i655[2]
  i654.m_ReferenceResolution = new pc.Vec2( i655[3], i655[4] )
  i654.m_ScreenMatchMode = i655[5]
  i654.m_MatchWidthOrHeight = i655[6]
  i654.m_PhysicalUnit = i655[7]
  i654.m_FallbackScreenDPI = i655[8]
  i654.m_DefaultSpriteDPI = i655[9]
  i654.m_DynamicPixelsPerUnit = i655[10]
  i654.m_PresetInfoIsWorld = !!i655[11]
  return i654
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i657 = data
  i656.m_IgnoreReversedGraphics = !!i657[0]
  i656.m_BlockingObjects = i657[1]
  i656.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i657[2] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i659 = data
  i658.cullTransparentMesh = !!i659[0]
  return i658
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.Image' )
  var i661 = data
  request.r(i661[0], i661[1], 0, i660, 'm_Sprite')
  i660.m_Type = i661[2]
  i660.m_PreserveAspect = !!i661[3]
  i660.m_FillCenter = !!i661[4]
  i660.m_FillMethod = i661[5]
  i660.m_FillAmount = i661[6]
  i660.m_FillClockwise = !!i661[7]
  i660.m_FillOrigin = i661[8]
  i660.m_UseSpriteMesh = !!i661[9]
  i660.m_PixelsPerUnitMultiplier = i661[10]
  request.r(i661[11], i661[12], 0, i660, 'm_Material')
  i660.m_Maskable = !!i661[13]
  i660.m_Color = new pc.Color(i661[14], i661[15], i661[16], i661[17])
  i660.m_RaycastTarget = !!i661[18]
  i660.m_RaycastPadding = new pc.Vec4( i661[19], i661[20], i661[21], i661[22] )
  return i660
}

Deserializers["Hole"] = function (request, data, root) {
  var i662 = root || request.c( 'Hole' )
  var i663 = data
  var i665 = i663[0]
  var i664 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 1, i664, '')
  }
  i662.targetTile = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i667 = data
  i666.enabled = !!i667[0]
  request.r(i667[1], i667[2], 0, i666, 'sharedMaterial')
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.sharedMaterials = i668
  i666.receiveShadows = !!i667[4]
  i666.shadowCastingMode = i667[5]
  i666.sortingLayerID = i667[6]
  i666.sortingOrder = i667[7]
  i666.lightmapIndex = i667[8]
  i666.lightmapSceneIndex = i667[9]
  i666.lightmapScaleOffset = new pc.Vec4( i667[10], i667[11], i667[12], i667[13] )
  i666.lightProbeUsage = i667[14]
  i666.reflectionProbeUsage = i667[15]
  request.r(i667[16], i667[17], 0, i666, 'sharedMesh')
  var i671 = i667[18]
  var i670 = []
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 2, i670, '')
  }
  i666.bones = i670
  i666.updateWhenOffscreen = !!i667[19]
  i666.localBounds = i667[20]
  request.r(i667[21], i667[22], 0, i666, 'rootBone')
  var i673 = i667[23]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i673[i + 0]) );
  }
  i666.blendShapesWeights = i672
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i677 = data
  i676.weight = i677[0]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.aspect = i679[1]
  i678.orthographic = !!i679[2]
  i678.orthographicSize = i679[3]
  i678.backgroundColor = new pc.Color(i679[4], i679[5], i679[6], i679[7])
  i678.nearClipPlane = i679[8]
  i678.farClipPlane = i679[9]
  i678.fieldOfView = i679[10]
  i678.depth = i679[11]
  i678.clearFlags = i679[12]
  i678.cullingMask = i679[13]
  i678.rect = i679[14]
  request.r(i679[15], i679[16], 0, i678, 'targetTexture')
  i678.usePhysicalProperties = !!i679[17]
  i678.focalLength = i679[18]
  i678.sensorSize = new pc.Vec2( i679[19], i679[20] )
  i678.lensShift = new pc.Vec2( i679[21], i679[22] )
  i678.gateFit = i679[23]
  i678.commandBufferCount = i679[24]
  i678.cameraType = i679[25]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i681 = data
  i680.enabled = !!i681[0]
  i680.type = i681[1]
  i680.color = new pc.Color(i681[2], i681[3], i681[4], i681[5])
  i680.cullingMask = i681[6]
  i680.intensity = i681[7]
  i680.range = i681[8]
  i680.spotAngle = i681[9]
  i680.shadows = i681[10]
  i680.shadowNormalBias = i681[11]
  i680.shadowBias = i681[12]
  i680.shadowStrength = i681[13]
  i680.shadowResolution = i681[14]
  i680.lightmapBakeType = i681[15]
  i680.renderMode = i681[16]
  request.r(i681[17], i681[18], 0, i680, 'cookie')
  i680.cookieSize = i681[19]
  return i680
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_FirstSelected')
  i682.m_sendNavigationEvents = !!i683[2]
  i682.m_DragThreshold = i683[3]
  return i682
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i685 = data
  i684.m_HorizontalAxis = i685[0]
  i684.m_VerticalAxis = i685[1]
  i684.m_SubmitButton = i685[2]
  i684.m_CancelButton = i685[3]
  i684.m_InputActionsPerSecond = i685[4]
  i684.m_RepeatDelay = i685[5]
  i684.m_ForceModuleActive = !!i685[6]
  i684.m_SendPointerHoverToParent = !!i685[7]
  return i684
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i686 = root || request.c( 'GamePlay' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'startTile')
  request.r(i687[2], i687[3], 0, i686, 'targetTile')
  return i686
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i688 = root || request.c( 'TilePathfinder' )
  var i689 = data
  return i688
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i690 = root || request.c( 'CoinManager' )
  var i691 = data
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i693 = data
  i692.ambientIntensity = i693[0]
  i692.reflectionIntensity = i693[1]
  i692.ambientMode = i693[2]
  i692.ambientLight = new pc.Color(i693[3], i693[4], i693[5], i693[6])
  i692.ambientSkyColor = new pc.Color(i693[7], i693[8], i693[9], i693[10])
  i692.ambientGroundColor = new pc.Color(i693[11], i693[12], i693[13], i693[14])
  i692.ambientEquatorColor = new pc.Color(i693[15], i693[16], i693[17], i693[18])
  i692.fogColor = new pc.Color(i693[19], i693[20], i693[21], i693[22])
  i692.fogEndDistance = i693[23]
  i692.fogStartDistance = i693[24]
  i692.fogDensity = i693[25]
  i692.fog = !!i693[26]
  request.r(i693[27], i693[28], 0, i692, 'skybox')
  i692.fogMode = i693[29]
  var i695 = i693[30]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i695[i + 0]) );
  }
  i692.lightmaps = i694
  i692.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i693[31], i692.lightProbes)
  i692.lightmapsMode = i693[32]
  i692.mixedBakeMode = i693[33]
  i692.environmentLightingMode = i693[34]
  i692.ambientProbe = new pc.SphericalHarmonicsL2(i693[35])
  i692.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i693[36])
  i692.useReferenceAmbientProbe = !!i693[37]
  request.r(i693[38], i693[39], 0, i692, 'customReflection')
  request.r(i693[40], i693[41], 0, i692, 'defaultReflection')
  i692.defaultReflectionMode = i693[42]
  i692.defaultReflectionResolution = i693[43]
  i692.sunLightObjectId = i693[44]
  i692.pixelLightCount = i693[45]
  i692.defaultReflectionHDR = !!i693[46]
  i692.hasLightDataAsset = !!i693[47]
  i692.hasManualGenerate = !!i693[48]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'lightmapColor')
  request.r(i699[2], i699[3], 0, i698, 'lightmapDirection')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i700 = root || new UnityEngine.LightProbes()
  var i701 = data
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i709 = data
  var i711 = i709[0]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i711.length; i += 1) {
    i710.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i711[i + 0]));
  }
  i708.ShaderCompilationErrors = i710
  i708.name = i709[1]
  i708.guid = i709[2]
  var i713 = i709[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( i713[i + 0] );
  }
  i708.shaderDefinedKeywords = i712
  var i715 = i709[4]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i715[i + 0]) );
  }
  i708.passes = i714
  var i717 = i709[5]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i717[i + 0]) );
  }
  i708.usePasses = i716
  var i719 = i709[6]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i719[i + 0]) );
  }
  i708.defaultParameterValues = i718
  request.r(i709[7], i709[8], 0, i708, 'unityFallbackShader')
  i708.readDepth = !!i709[9]
  i708.isCreatedByShaderGraph = !!i709[10]
  i708.compiled = !!i709[11]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i723 = data
  i722.shaderName = i723[0]
  i722.errorMessage = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i728 = root || new pc.UnityShaderPass()
  var i729 = data
  i728.id = i729[0]
  i728.subShaderIndex = i729[1]
  i728.name = i729[2]
  i728.passType = i729[3]
  i728.grabPassTextureName = i729[4]
  i728.usePass = !!i729[5]
  i728.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[6], i728.zTest)
  i728.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[7], i728.zWrite)
  i728.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[8], i728.culling)
  i728.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i729[9], i728.blending)
  i728.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i729[10], i728.alphaBlending)
  i728.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[11], i728.colorWriteMask)
  i728.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[12], i728.offsetUnits)
  i728.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[13], i728.offsetFactor)
  i728.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[14], i728.stencilRef)
  i728.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[15], i728.stencilReadMask)
  i728.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i729[16], i728.stencilWriteMask)
  i728.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[17], i728.stencilOp)
  i728.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[18], i728.stencilOpFront)
  i728.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i729[19], i728.stencilOpBack)
  var i731 = i729[20]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i731[i + 0]) );
  }
  i728.tags = i730
  var i733 = i729[21]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( i733[i + 0] );
  }
  i728.passDefinedKeywords = i732
  var i735 = i729[22]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i735[i + 0]) );
  }
  i728.passDefinedKeywordGroups = i734
  var i737 = i729[23]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i737[i + 0]) );
  }
  i728.variants = i736
  var i739 = i729[24]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i739[i + 0]) );
  }
  i728.excludedVariants = i738
  i728.hasDepthReader = !!i729[25]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i741 = data
  i740.val = i741[0]
  i740.name = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i743 = data
  i742.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[0], i742.src)
  i742.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[1], i742.dst)
  i742.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i743[2], i742.op)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i745 = data
  i744.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[0], i744.pass)
  i744.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[1], i744.fail)
  i744.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[2], i744.zFail)
  i744.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i745[3], i744.comp)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i749 = data
  i748.name = i749[0]
  i748.value = i749[1]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i752.keywords = i754
  i752.hasDiscard = !!i753[1]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i759 = data
  i758.passId = i759[0]
  i758.subShaderIndex = i759[1]
  var i761 = i759[2]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i758.keywords = i760
  i758.vertexProgram = i759[3]
  i758.fragmentProgram = i759[4]
  i758.exportedForWebGl2 = !!i759[5]
  i758.readDepth = !!i759[6]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'shader')
  i764.pass = i765[2]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i769 = data
  i768.name = i769[0]
  i768.type = i769[1]
  i768.value = new pc.Vec4( i769[2], i769[3], i769[4], i769[5] )
  i768.textureValue = i769[6]
  i768.shaderPropertyFlag = i769[7]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i771 = data
  i770.name = i771[0]
  request.r(i771[1], i771[2], 0, i770, 'texture')
  i770.aabb = i771[3]
  i770.vertices = i771[4]
  i770.triangles = i771[5]
  i770.textureRect = UnityEngine.Rect.MinMaxRect(i771[6], i771[7], i771[8], i771[9])
  i770.packedRect = UnityEngine.Rect.MinMaxRect(i771[10], i771[11], i771[12], i771[13])
  i770.border = new pc.Vec4( i771[14], i771[15], i771[16], i771[17] )
  i770.transparency = i771[18]
  i770.bounds = i771[19]
  i770.pixelsPerUnit = i771[20]
  i770.textureWidth = i771[21]
  i770.textureHeight = i771[22]
  i770.nativeSize = new pc.Vec2( i771[23], i771[24] )
  i770.pivot = new pc.Vec2( i771[25], i771[26] )
  i770.textureRectOffset = new pc.Vec2( i771[27], i771[28] )
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i773 = data
  i772.name = i773[0]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i775 = data
  i774.name = i775[0]
  i774.wrapMode = i775[1]
  i774.isLooping = !!i775[2]
  i774.length = i775[3]
  var i777 = i775[4]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i777[i + 0]) );
  }
  i774.curves = i776
  var i779 = i775[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i779[i + 0]) );
  }
  i774.events = i778
  i774.halfPrecision = !!i775[6]
  i774._frameRate = i775[7]
  i774.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i775[8], i774.localBounds)
  i774.hasMuscleCurves = !!i775[9]
  var i781 = i775[10]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( i781[i + 0] );
  }
  i774.clipMuscleConstant = i780
  i774.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i775[11], i774.clipBindingConstant)
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i785 = data
  i784.path = i785[0]
  i784.hash = i785[1]
  i784.componentType = i785[2]
  i784.property = i785[3]
  i784.keys = i785[4]
  var i787 = i785[5]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i787[i + 0]) );
  }
  i784.objectReferenceKeys = i786
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i791 = data
  i790.time = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'value')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i795 = data
  i794.functionName = i795[0]
  i794.floatParameter = i795[1]
  i794.intParameter = i795[2]
  i794.stringParameter = i795[3]
  request.r(i795[4], i795[5], 0, i794, 'objectReferenceParameter')
  i794.time = i795[6]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i797 = data
  i796.center = new pc.Vec3( i797[0], i797[1], i797[2] )
  i796.extends = new pc.Vec3( i797[3], i797[4], i797[5] )
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i801 = data
  var i803 = i801[0]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( i803[i + 0] );
  }
  i800.genericBindings = i802
  var i805 = i801[1]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i800.pptrCurveMapping = i804
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i807 = data
  i806.name = i807[0]
  var i809 = i807[1]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i809[i + 0]) );
  }
  i806.layers = i808
  var i811 = i807[2]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i811[i + 0]) );
  }
  i806.parameters = i810
  i806.animationClips = i807[3]
  i806.avatarUnsupported = i807[4]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i815 = data
  i814.name = i815[0]
  i814.defaultWeight = i815[1]
  i814.blendingMode = i815[2]
  i814.avatarMask = i815[3]
  i814.syncedLayerIndex = i815[4]
  i814.syncedLayerAffectsTiming = !!i815[5]
  i814.syncedLayers = i815[6]
  i814.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i815[7], i814.stateMachine)
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i817 = data
  i816.id = i817[0]
  i816.name = i817[1]
  i816.path = i817[2]
  var i819 = i817[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i819[i + 0]) );
  }
  i816.states = i818
  var i821 = i817[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i821[i + 0]) );
  }
  i816.machines = i820
  var i823 = i817[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i823[i + 0]) );
  }
  i816.entryStateTransitions = i822
  var i825 = i817[6]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i825[i + 0]) );
  }
  i816.exitStateTransitions = i824
  var i827 = i817[7]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i827[i + 0]) );
  }
  i816.anyStateTransitions = i826
  i816.defaultStateId = i817[8]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i831 = data
  i830.id = i831[0]
  i830.name = i831[1]
  i830.cycleOffset = i831[2]
  i830.cycleOffsetParameter = i831[3]
  i830.cycleOffsetParameterActive = !!i831[4]
  i830.mirror = !!i831[5]
  i830.mirrorParameter = i831[6]
  i830.mirrorParameterActive = !!i831[7]
  i830.motionId = i831[8]
  i830.nameHash = i831[9]
  i830.fullPathHash = i831[10]
  i830.speed = i831[11]
  i830.speedParameter = i831[12]
  i830.speedParameterActive = !!i831[13]
  i830.tag = i831[14]
  i830.tagHash = i831[15]
  i830.writeDefaultValues = !!i831[16]
  var i833 = i831[17]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.behaviours = i832
  var i835 = i831[18]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i830.transitions = i834
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateId = i841[9]
  i840.isExit = !!i841[10]
  i840.mute = !!i841[11]
  i840.solo = !!i841[12]
  var i843 = i841[13]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i847 = data
  i846.mode = i847[0]
  i846.parameter = i847[1]
  i846.threshold = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i853 = data
  i852.destinationStateId = i853[0]
  i852.isExit = !!i853[1]
  i852.mute = !!i853[2]
  i852.solo = !!i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i855[i + 0]) );
  }
  i852.conditions = i854
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i859 = data
  i858.defaultBool = !!i859[0]
  i858.defaultFloat = i859[1]
  i858.defaultInt = i859[2]
  i858.name = i859[3]
  i858.nameHash = i859[4]
  i858.type = i859[5]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i861 = data
  var i863 = i861[0]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i863[i + 0]) );
  }
  i860.files = i862
  i860.componentToPrefabIds = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i867 = data
  i866.path = i867[0]
  request.r(i867[1], i867[2], 0, i866, 'unityObject')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i871[i + 0]) );
  }
  i868.scriptsExecutionOrder = i870
  var i873 = i869[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i873[i + 0]) );
  }
  i868.sortingLayers = i872
  var i875 = i869[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i875[i + 0]) );
  }
  i868.cullingLayers = i874
  i868.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i869[3], i868.timeSettings)
  i868.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i869[4], i868.physicsSettings)
  i868.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i869[5], i868.physics2DSettings)
  i868.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i869[6], i868.qualitySettings)
  i868.enableRealtimeShadows = !!i869[7]
  i868.enableAutoInstancing = !!i869[8]
  i868.enableDynamicBatching = !!i869[9]
  i868.lightmapEncodingQuality = i869[10]
  i868.desiredColorSpace = i869[11]
  var i877 = i869[12]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i868.allTags = i876
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i881 = data
  i880.name = i881[0]
  i880.value = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i885 = data
  i884.id = i885[0]
  i884.name = i885[1]
  i884.value = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i889 = data
  i888.id = i889[0]
  i888.name = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i891 = data
  i890.fixedDeltaTime = i891[0]
  i890.maximumDeltaTime = i891[1]
  i890.timeScale = i891[2]
  i890.maximumParticleTimestep = i891[3]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i893 = data
  i892.gravity = new pc.Vec3( i893[0], i893[1], i893[2] )
  i892.defaultSolverIterations = i893[3]
  i892.bounceThreshold = i893[4]
  i892.autoSyncTransforms = !!i893[5]
  i892.autoSimulation = !!i893[6]
  var i895 = i893[7]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i895[i + 0]) );
  }
  i892.collisionMatrix = i894
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i899 = data
  i898.enabled = !!i899[0]
  i898.layerId = i899[1]
  i898.otherLayerId = i899[2]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'material')
  i900.gravity = new pc.Vec2( i901[2], i901[3] )
  i900.positionIterations = i901[4]
  i900.velocityIterations = i901[5]
  i900.velocityThreshold = i901[6]
  i900.maxLinearCorrection = i901[7]
  i900.maxAngularCorrection = i901[8]
  i900.maxTranslationSpeed = i901[9]
  i900.maxRotationSpeed = i901[10]
  i900.baumgarteScale = i901[11]
  i900.baumgarteTOIScale = i901[12]
  i900.timeToSleep = i901[13]
  i900.linearSleepTolerance = i901[14]
  i900.angularSleepTolerance = i901[15]
  i900.defaultContactOffset = i901[16]
  i900.autoSimulation = !!i901[17]
  i900.queriesHitTriggers = !!i901[18]
  i900.queriesStartInColliders = !!i901[19]
  i900.callbacksOnDisable = !!i901[20]
  i900.reuseCollisionCallbacks = !!i901[21]
  i900.autoSyncTransforms = !!i901[22]
  var i903 = i901[23]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i903[i + 0]) );
  }
  i900.collisionMatrix = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i907 = data
  i906.enabled = !!i907[0]
  i906.layerId = i907[1]
  i906.otherLayerId = i907[2]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i909 = data
  var i911 = i909[0]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i911[i + 0]) );
  }
  i908.qualityLevels = i910
  var i913 = i909[1]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( i913[i + 0] );
  }
  i908.names = i912
  i908.shadows = i909[2]
  i908.anisotropicFiltering = i909[3]
  i908.antiAliasing = i909[4]
  i908.lodBias = i909[5]
  i908.shadowCascades = i909[6]
  i908.shadowDistance = i909[7]
  i908.shadowmaskMode = i909[8]
  i908.shadowProjection = i909[9]
  i908.shadowResolution = i909[10]
  i908.softParticles = !!i909[11]
  i908.softVegetation = !!i909[12]
  i908.activeColorSpace = i909[13]
  i908.desiredColorSpace = i909[14]
  i908.masterTextureLimit = i909[15]
  i908.maxQueuedFrames = i909[16]
  i908.particleRaycastBudget = i909[17]
  i908.pixelLightCount = i909[18]
  i908.realtimeReflectionProbes = !!i909[19]
  i908.shadowCascade2Split = i909[20]
  i908.shadowCascade4Split = new pc.Vec3( i909[21], i909[22], i909[23] )
  i908.streamingMipmapsActive = !!i909[24]
  i908.vSyncCount = i909[25]
  i908.asyncUploadBufferSize = i909[26]
  i908.asyncUploadTimeSlice = i909[27]
  i908.billboardsFaceCameraPosition = !!i909[28]
  i908.shadowNearPlaneOffset = i909[29]
  i908.streamingMipmapsMemoryBudget = i909[30]
  i908.maximumLODLevel = i909[31]
  i908.streamingMipmapsAddAllCameras = !!i909[32]
  i908.streamingMipmapsMaxLevelReduction = i909[33]
  i908.streamingMipmapsRenderersPerFrame = i909[34]
  i908.resolutionScalingFixedDPIFactor = i909[35]
  i908.streamingMipmapsMaxFileIORequests = i909[36]
  i908.currentQualityLevel = i909[37]
  return i908
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"37":[38],"39":[38],"40":[38],"41":[38],"42":[38],"43":[38],"44":[28],"45":[20],"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[47],"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[55],"62":[55],"63":[55],"64":[55],"65":[55],"66":[55],"67":[55],"68":[20],"69":[9],"70":[71],"72":[71],"19":[18],"73":[18],"74":[20],"75":[20],"76":[30],"77":[78],"79":[18],"80":[18],"23":[19],"25":[24,18],"81":[18],"22":[19],"82":[18],"83":[18],"84":[18],"85":[18],"86":[18],"87":[18],"88":[18],"89":[18],"90":[18],"91":[24,18],"92":[18],"93":[18],"94":[18],"95":[18],"96":[24,18],"97":[18],"98":[31],"99":[31],"32":[31],"100":[31],"101":[20],"102":[20],"103":[78],"104":[20],"105":[78],"106":[80,18],"107":[80,18],"108":[80,18],"109":[80,18],"110":[80,18],"111":[80,18],"112":[80,18],"113":[80,18],"114":[80,18],"115":[80,18],"116":[80,18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","Grid","Row","Tile","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","TilePathfinder","CoinManager","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/07/2025 07:55:13";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31927";

Deserializers.projectId = "8dd6c23a054ebdf4789e7fb4978079d8";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "7bd6d992-9a05-475d-9a2e-2dae349014b7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

