var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointSpring' )
  var i497 = data
  i496.spring = i497[0]
  i496.damper = i497[1]
  i496.targetPosition = i497[2]
  return i496
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointMotor' )
  var i499 = data
  i498.m_TargetVelocity = i499[0]
  i498.m_Force = i499[1]
  i498.m_FreeSpin = i499[2]
  return i498
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointLimits' )
  var i501 = data
  i500.m_Min = i501[0]
  i500.m_Max = i501[1]
  i500.m_Bounciness = i501[2]
  i500.m_BounceMinVelocity = i501[3]
  i500.m_ContactDistance = i501[4]
  i500.minBounce = i501[5]
  i500.maxBounce = i501[6]
  return i500
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointDrive' )
  var i503 = data
  i502.m_PositionSpring = i503[0]
  i502.m_PositionDamper = i503[1]
  i502.m_MaximumForce = i503[2]
  i502.m_UseAcceleration = i503[3]
  return i502
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i505 = data
  i504.m_Spring = i505[0]
  i504.m_Damper = i505[1]
  return i504
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i507 = data
  i506.m_Limit = i507[0]
  i506.m_Bounciness = i507[1]
  i506.m_ContactDistance = i507[2]
  return i506
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i509 = data
  i508.m_ExtremumSlip = i509[0]
  i508.m_ExtremumValue = i509[1]
  i508.m_AsymptoteSlip = i509[2]
  i508.m_AsymptoteValue = i509[3]
  i508.m_Stiffness = i509[4]
  return i508
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i511 = data
  i510.m_LowerAngle = i511[0]
  i510.m_UpperAngle = i511[1]
  return i510
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i513 = data
  i512.m_MotorSpeed = i513[0]
  i512.m_MaximumMotorTorque = i513[1]
  return i512
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i515 = data
  i514.m_DampingRatio = i515[0]
  i514.m_Frequency = i515[1]
  i514.m_Angle = i515[2]
  return i514
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i517 = data
  i516.m_LowerTranslation = i517[0]
  i516.m_UpperTranslation = i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i518 = root || new pc.UnityMaterial()
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'shader')
  i518.renderQueue = i519[3]
  i518.enableInstancing = !!i519[4]
  var i521 = i519[5]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i521[i + 0]) );
  }
  i518.floatParameters = i520
  var i523 = i519[6]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i523[i + 0]) );
  }
  i518.colorParameters = i522
  var i525 = i519[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i525[i + 0]) );
  }
  i518.vectorParameters = i524
  var i527 = i519[8]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i527[i + 0]) );
  }
  i518.textureParameters = i526
  var i529 = i519[9]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i529[i + 0]) );
  }
  i518.materialFlags = i528
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i533 = data
  i532.name = i533[0]
  i532.value = i533[1]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i537 = data
  i536.name = i537[0]
  i536.value = new pc.Color(i537[1], i537[2], i537[3], i537[4])
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i541 = data
  i540.name = i541[0]
  i540.value = new pc.Vec4( i541[1], i541[2], i541[3], i541[4] )
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i545 = data
  i544.name = i545[0]
  request.r(i545[1], i545[2], 0, i544, 'value')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i549 = data
  i548.name = i549[0]
  i548.enabled = !!i549[1]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i551 = data
  i550.name = i551[0]
  i550.halfPrecision = !!i551[1]
  i550.useUInt32IndexFormat = !!i551[2]
  i550.vertexCount = i551[3]
  i550.aabb = i551[4]
  var i553 = i551[5]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( !!i553[i + 0] );
  }
  i550.streams = i552
  i550.vertices = i551[6]
  var i555 = i551[7]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i555[i + 0]) );
  }
  i550.subMeshes = i554
  var i557 = i551[8]
  var i556 = []
  for(var i = 0; i < i557.length; i += 16) {
    i556.push( new pc.Mat4().setData(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3],  i557[i + 4], i557[i + 5], i557[i + 6], i557[i + 7],  i557[i + 8], i557[i + 9], i557[i + 10], i557[i + 11],  i557[i + 12], i557[i + 13], i557[i + 14], i557[i + 15]) );
  }
  i550.bindposes = i556
  var i559 = i551[9]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i559[i + 0]) );
  }
  i550.blendShapes = i558
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i565 = data
  i564.triangles = i565[0]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i571 = data
  i570.name = i571[0]
  var i573 = i571[1]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i573[i + 0]) );
  }
  i570.frames = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i575 = data
  i574.name = i575[0]
  i574.width = i575[1]
  i574.height = i575[2]
  i574.mipmapCount = i575[3]
  i574.anisoLevel = i575[4]
  i574.filterMode = i575[5]
  i574.hdr = !!i575[6]
  i574.format = i575[7]
  i574.wrapMode = i575[8]
  i574.alphaIsTransparency = !!i575[9]
  i574.alphaSource = i575[10]
  i574.graphicsFormat = i575[11]
  i574.sRGBTexture = !!i575[12]
  i574.desiredColorSpace = i575[13]
  i574.wrapU = i575[14]
  i574.wrapV = i575[15]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i579 = data
  i578.weight = i579[0]
  i578.vertices = i579[1]
  i578.normals = i579[2]
  i578.tangents = i579[3]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i581 = data
  i580.position = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.scale = new pc.Vec3( i581[3], i581[4], i581[5] )
  i580.rotation = new pc.Quat(i581[6], i581[7], i581[8], i581[9])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'clip')
  request.r(i583[2], i583[3], 0, i582, 'outputAudioMixerGroup')
  i582.playOnAwake = !!i583[4]
  i582.loop = !!i583[5]
  i582.time = i583[6]
  i582.volume = i583[7]
  i582.pitch = i583[8]
  i582.enabled = !!i583[9]
  return i582
}

Deserializers["Coin"] = function (request, data, root) {
  var i584 = root || request.c( 'Coin' )
  var i585 = data
  i584.colorType = i585[0]
  request.r(i585[1], i585[2], 0, i584, 'meshRenderer')
  request.r(i585[3], i585[4], 0, i584, 'animator')
  request.r(i585[5], i585[6], 0, i584, 'smokeParticle')
  request.r(i585[7], i585[8], 0, i584, 'audioSource')
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'animatorController')
  request.r(i587[2], i587[3], 0, i586, 'avatar')
  i586.updateMode = i587[4]
  i586.hasTransformHierarchy = !!i587[5]
  i586.applyRootMotion = !!i587[6]
  var i589 = i587[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.humanBones = i588
  i586.enabled = !!i587[8]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'sharedMesh')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'additionalVertexStreams')
  i594.enabled = !!i595[2]
  request.r(i595[3], i595[4], 0, i594, 'sharedMaterial')
  var i597 = i595[5]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.sharedMaterials = i596
  i594.receiveShadows = !!i595[6]
  i594.shadowCastingMode = i595[7]
  i594.sortingLayerID = i595[8]
  i594.sortingOrder = i595[9]
  i594.lightmapIndex = i595[10]
  i594.lightmapSceneIndex = i595[11]
  i594.lightmapScaleOffset = new pc.Vec4( i595[12], i595[13], i595[14], i595[15] )
  i594.lightProbeUsage = i595[16]
  i594.reflectionProbeUsage = i595[17]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i601 = data
  i600.name = i601[0]
  i600.tagId = i601[1]
  i600.enabled = !!i601[2]
  i600.isStatic = !!i601[3]
  i600.layer = i601[4]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i603 = data
  i602.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i603[0], i602.main)
  i602.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i603[1], i602.colorBySpeed)
  i602.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i603[2], i602.colorOverLifetime)
  i602.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i603[3], i602.emission)
  i602.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i603[4], i602.rotationBySpeed)
  i602.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i603[5], i602.rotationOverLifetime)
  i602.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i603[6], i602.shape)
  i602.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i603[7], i602.sizeBySpeed)
  i602.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i603[8], i602.sizeOverLifetime)
  i602.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i603[9], i602.textureSheetAnimation)
  i602.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i603[10], i602.velocityOverLifetime)
  i602.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i603[11], i602.noise)
  i602.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i603[12], i602.inheritVelocity)
  i602.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i603[13], i602.forceOverLifetime)
  i602.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i603[14], i602.limitVelocityOverLifetime)
  i602.useAutoRandomSeed = !!i603[15]
  i602.randomSeed = i603[16]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemMain()
  var i605 = data
  i604.duration = i605[0]
  i604.loop = !!i605[1]
  i604.prewarm = !!i605[2]
  i604.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[3], i604.startDelay)
  i604.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[4], i604.startLifetime)
  i604.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[5], i604.startSpeed)
  i604.startSize3D = !!i605[6]
  i604.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[7], i604.startSizeX)
  i604.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[8], i604.startSizeY)
  i604.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[9], i604.startSizeZ)
  i604.startRotation3D = !!i605[10]
  i604.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[11], i604.startRotationX)
  i604.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[12], i604.startRotationY)
  i604.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[13], i604.startRotationZ)
  i604.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i605[14], i604.startColor)
  i604.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i605[15], i604.gravityModifier)
  i604.simulationSpace = i605[16]
  request.r(i605[17], i605[18], 0, i604, 'customSimulationSpace')
  i604.simulationSpeed = i605[19]
  i604.useUnscaledTime = !!i605[20]
  i604.scalingMode = i605[21]
  i604.playOnAwake = !!i605[22]
  i604.maxParticles = i605[23]
  i604.emitterVelocityMode = i605[24]
  i604.stopAction = i605[25]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i606 = root || new pc.MinMaxCurve()
  var i607 = data
  i606.mode = i607[0]
  i606.curveMin = new pc.AnimationCurve( { keys_flow: i607[1] } )
  i606.curveMax = new pc.AnimationCurve( { keys_flow: i607[2] } )
  i606.curveMultiplier = i607[3]
  i606.constantMin = i607[4]
  i606.constantMax = i607[5]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i608 = root || new pc.MinMaxGradient()
  var i609 = data
  i608.mode = i609[0]
  i608.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i609[1], i608.gradientMin)
  i608.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i609[2], i608.gradientMax)
  i608.colorMin = new pc.Color(i609[3], i609[4], i609[5], i609[6])
  i608.colorMax = new pc.Color(i609[7], i609[8], i609[9], i609[10])
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i611 = data
  i610.mode = i611[0]
  var i613 = i611[1]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i613[i + 0]) );
  }
  i610.colorKeys = i612
  var i615 = i611[2]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i615[i + 0]) );
  }
  i610.alphaKeys = i614
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemColorBySpeed()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i617[1], i616.color)
  i616.range = new pc.Vec2( i617[2], i617[3] )
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i621 = data
  i620.color = new pc.Color(i621[0], i621[1], i621[2], i621[3])
  i620.time = i621[4]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i625 = data
  i624.alpha = i625[0]
  i624.time = i625[1]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemColorOverLifetime()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i627[1], i626.color)
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemEmitter()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.rateOverTime)
  i628.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.rateOverDistance)
  var i631 = i629[3]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i631[i + 0]) );
  }
  i628.bursts = i630
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemBurst()
  var i635 = data
  i634.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[0], i634.count)
  i634.cycleCount = i635[1]
  i634.minCount = i635[2]
  i634.maxCount = i635[3]
  i634.repeatInterval = i635[4]
  i634.time = i635[5]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemRotationBySpeed()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.separateAxes = !!i637[4]
  i636.range = new pc.Vec2( i637[5], i637[6] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemRotationOverLifetime()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.separateAxes = !!i639[4]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemShape()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.shapeType = i641[1]
  i640.randomDirectionAmount = i641[2]
  i640.sphericalDirectionAmount = i641[3]
  i640.randomPositionAmount = i641[4]
  i640.alignToDirection = !!i641[5]
  i640.radius = i641[6]
  i640.radiusMode = i641[7]
  i640.radiusSpread = i641[8]
  i640.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[9], i640.radiusSpeed)
  i640.radiusThickness = i641[10]
  i640.angle = i641[11]
  i640.length = i641[12]
  i640.boxThickness = new pc.Vec3( i641[13], i641[14], i641[15] )
  i640.meshShapeType = i641[16]
  request.r(i641[17], i641[18], 0, i640, 'mesh')
  request.r(i641[19], i641[20], 0, i640, 'meshRenderer')
  request.r(i641[21], i641[22], 0, i640, 'skinnedMeshRenderer')
  i640.useMeshMaterialIndex = !!i641[23]
  i640.meshMaterialIndex = i641[24]
  i640.useMeshColors = !!i641[25]
  i640.normalOffset = i641[26]
  i640.arc = i641[27]
  i640.arcMode = i641[28]
  i640.arcSpread = i641[29]
  i640.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[30], i640.arcSpeed)
  i640.donutRadius = i641[31]
  i640.position = new pc.Vec3( i641[32], i641[33], i641[34] )
  i640.rotation = new pc.Vec3( i641[35], i641[36], i641[37] )
  i640.scale = new pc.Vec3( i641[38], i641[39], i641[40] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemSizeBySpeed()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[1], i642.x)
  i642.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.y)
  i642.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[3], i642.z)
  i642.separateAxes = !!i643[4]
  i642.range = new pc.Vec2( i643[5], i643[6] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemSizeOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.separateAxes = !!i645[4]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.mode = i647[1]
  i646.animation = i647[2]
  i646.numTilesX = i647[3]
  i646.numTilesY = i647[4]
  i646.useRandomRow = !!i647[5]
  i646.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[6], i646.frameOverTime)
  i646.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[7], i646.startFrame)
  i646.cycleCount = i647[8]
  i646.rowIndex = i647[9]
  i646.flipU = i647[10]
  i646.flipV = i647[11]
  i646.spriteCount = i647[12]
  var i649 = i647[13]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i646.sprites = i648
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.x)
  i652.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.y)
  i652.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.z)
  i652.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[4], i652.radial)
  i652.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[5], i652.speedModifier)
  i652.space = i653[6]
  i652.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[7], i652.orbitalX)
  i652.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[8], i652.orbitalY)
  i652.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[9], i652.orbitalZ)
  i652.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[10], i652.orbitalOffsetX)
  i652.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[11], i652.orbitalOffsetY)
  i652.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[12], i652.orbitalOffsetZ)
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemNoise()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.separateAxes = !!i655[1]
  i654.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.strengthX)
  i654.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.strengthY)
  i654.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[4], i654.strengthZ)
  i654.frequency = i655[5]
  i654.damping = !!i655[6]
  i654.octaveCount = i655[7]
  i654.octaveMultiplier = i655[8]
  i654.octaveScale = i655[9]
  i654.quality = i655[10]
  i654.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[11], i654.scrollSpeed)
  i654.scrollSpeedMultiplier = i655[12]
  i654.remapEnabled = !!i655[13]
  i654.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[14], i654.remapX)
  i654.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[15], i654.remapY)
  i654.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[16], i654.remapZ)
  i654.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[17], i654.positionAmount)
  i654.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[18], i654.rotationAmount)
  i654.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[19], i654.sizeAmount)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemInheritVelocity()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.mode = i657[1]
  i656.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.curve)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemForceOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[1], i658.x)
  i658.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.y)
  i658.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.z)
  i658.space = i659[4]
  i658.randomized = !!i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.limit)
  i660.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.limitX)
  i660.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.limitY)
  i660.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[4], i660.limitZ)
  i660.dampen = i661[5]
  i660.separateAxes = !!i661[6]
  i660.space = i661[7]
  i660.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[8], i660.drag)
  i660.multiplyDragByParticleSize = !!i661[9]
  i660.multiplyDragByParticleVelocity = !!i661[10]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i663 = data
  i662.enabled = !!i663[0]
  request.r(i663[1], i663[2], 0, i662, 'sharedMaterial')
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 2) {
  request.r(i665[i + 0], i665[i + 1], 2, i664, '')
  }
  i662.sharedMaterials = i664
  i662.receiveShadows = !!i663[4]
  i662.shadowCastingMode = i663[5]
  i662.sortingLayerID = i663[6]
  i662.sortingOrder = i663[7]
  i662.lightmapIndex = i663[8]
  i662.lightmapSceneIndex = i663[9]
  i662.lightmapScaleOffset = new pc.Vec4( i663[10], i663[11], i663[12], i663[13] )
  i662.lightProbeUsage = i663[14]
  i662.reflectionProbeUsage = i663[15]
  request.r(i663[16], i663[17], 0, i662, 'mesh')
  i662.meshCount = i663[18]
  i662.activeVertexStreamsCount = i663[19]
  i662.alignment = i663[20]
  i662.renderMode = i663[21]
  i662.sortMode = i663[22]
  i662.lengthScale = i663[23]
  i662.velocityScale = i663[24]
  i662.cameraVelocityScale = i663[25]
  i662.normalDirection = i663[26]
  i662.sortingFudge = i663[27]
  i662.minParticleSize = i663[28]
  i662.maxParticleSize = i663[29]
  i662.pivot = new pc.Vec3( i663[30], i663[31], i663[32] )
  request.r(i663[33], i663[34], 0, i662, 'trailMaterial')
  return i662
}

Deserializers["TimeToDeactivate"] = function (request, data, root) {
  var i666 = root || request.c( 'TimeToDeactivate' )
  var i667 = data
  i666.lifeTime = i667[0]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i669 = data
  i668.name = i669[0]
  i668.atlasId = i669[1]
  i668.mipmapCount = i669[2]
  i668.hdr = !!i669[3]
  i668.size = i669[4]
  i668.anisoLevel = i669[5]
  i668.filterMode = i669[6]
  var i671 = i669[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 4) {
    i670.push( UnityEngine.Rect.MinMaxRect(i671[i + 0], i671[i + 1], i671[i + 2], i671[i + 3]) );
  }
  i668.rects = i670
  i668.wrapU = i669[8]
  i668.wrapV = i669[9]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i675 = data
  i674.name = i675[0]
  i674.index = i675[1]
  i674.startup = !!i675[2]
  return i674
}

Deserializers["Grid"] = function (request, data, root) {
  var i676 = root || request.c( 'Grid' )
  var i677 = data
  var i679 = i677[0]
  var i678 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 1, i678, '')
  }
  i676.rows = i678
  return i676
}

Deserializers["Row"] = function (request, data, root) {
  var i682 = root || request.c( 'Row' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 1, i684, '')
  }
  i682.tiles = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i689 = data
  i688.center = new pc.Vec3( i689[0], i689[1], i689[2] )
  i688.size = new pc.Vec3( i689[3], i689[4], i689[5] )
  i688.enabled = !!i689[6]
  i688.isTrigger = !!i689[7]
  request.r(i689[8], i689[9], 0, i688, 'material')
  return i688
}

Deserializers["Tile"] = function (request, data, root) {
  var i690 = root || request.c( 'Tile' )
  var i691 = data
  i690.gridPosition = new pc.Vec2( i691[0], i691[1] )
  i690.isEmptyAfterCoinMove = !!i691[2]
  request.r(i691[3], i691[4], 0, i690, 'childCoin')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i693 = data
  i692.pivot = new pc.Vec2( i693[0], i693[1] )
  i692.anchorMin = new pc.Vec2( i693[2], i693[3] )
  i692.anchorMax = new pc.Vec2( i693[4], i693[5] )
  i692.sizeDelta = new pc.Vec2( i693[6], i693[7] )
  i692.anchoredPosition3D = new pc.Vec3( i693[8], i693[9], i693[10] )
  i692.rotation = new pc.Quat(i693[11], i693[12], i693[13], i693[14])
  i692.scale = new pc.Vec3( i693[15], i693[16], i693[17] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i695 = data
  i694.enabled = !!i695[0]
  i694.planeDistance = i695[1]
  i694.referencePixelsPerUnit = i695[2]
  i694.isFallbackOverlay = !!i695[3]
  i694.renderMode = i695[4]
  i694.renderOrder = i695[5]
  i694.sortingLayerName = i695[6]
  i694.sortingOrder = i695[7]
  i694.scaleFactor = i695[8]
  request.r(i695[9], i695[10], 0, i694, 'worldCamera')
  i694.overrideSorting = !!i695[11]
  i694.pixelPerfect = !!i695[12]
  i694.targetDisplay = i695[13]
  i694.overridePixelPerfect = !!i695[14]
  return i694
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i697 = data
  i696.m_UiScaleMode = i697[0]
  i696.m_ReferencePixelsPerUnit = i697[1]
  i696.m_ScaleFactor = i697[2]
  i696.m_ReferenceResolution = new pc.Vec2( i697[3], i697[4] )
  i696.m_ScreenMatchMode = i697[5]
  i696.m_MatchWidthOrHeight = i697[6]
  i696.m_PhysicalUnit = i697[7]
  i696.m_FallbackScreenDPI = i697[8]
  i696.m_DefaultSpriteDPI = i697[9]
  i696.m_DynamicPixelsPerUnit = i697[10]
  i696.m_PresetInfoIsWorld = !!i697[11]
  return i696
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i699 = data
  i698.m_IgnoreReversedGraphics = !!i699[0]
  i698.m_BlockingObjects = i699[1]
  i698.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i699[2] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i701 = data
  i700.cullTransparentMesh = !!i701[0]
  return i700
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.UI.Image' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'm_Sprite')
  i702.m_Type = i703[2]
  i702.m_PreserveAspect = !!i703[3]
  i702.m_FillCenter = !!i703[4]
  i702.m_FillMethod = i703[5]
  i702.m_FillAmount = i703[6]
  i702.m_FillClockwise = !!i703[7]
  i702.m_FillOrigin = i703[8]
  i702.m_UseSpriteMesh = !!i703[9]
  i702.m_PixelsPerUnitMultiplier = i703[10]
  request.r(i703[11], i703[12], 0, i702, 'm_Material')
  i702.m_Maskable = !!i703[13]
  i702.m_Color = new pc.Color(i703[14], i703[15], i703[16], i703[17])
  i702.m_RaycastTarget = !!i703[18]
  i702.m_RaycastPadding = new pc.Vec4( i703[19], i703[20], i703[21], i703[22] )
  return i702
}

Deserializers["Hole"] = function (request, data, root) {
  var i704 = root || request.c( 'Hole' )
  var i705 = data
  i704.colorType = i705[0]
  request.r(i705[1], i705[2], 0, i704, 'pointToDropCoin')
  i704.canClick = !!i705[3]
  request.r(i705[4], i705[5], 0, i704, 'skinnedMeshRenderer')
  var i707 = i705[6]
  var i706 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 1, i706, '')
  }
  i704.tilesInHole = i706
  var i709 = i705[7]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i704.targetTiles = i708
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i711 = data
  i710.enabled = !!i711[0]
  request.r(i711[1], i711[2], 0, i710, 'sharedMaterial')
  var i713 = i711[3]
  var i712 = []
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 2, i712, '')
  }
  i710.sharedMaterials = i712
  i710.receiveShadows = !!i711[4]
  i710.shadowCastingMode = i711[5]
  i710.sortingLayerID = i711[6]
  i710.sortingOrder = i711[7]
  i710.lightmapIndex = i711[8]
  i710.lightmapSceneIndex = i711[9]
  i710.lightmapScaleOffset = new pc.Vec4( i711[10], i711[11], i711[12], i711[13] )
  i710.lightProbeUsage = i711[14]
  i710.reflectionProbeUsage = i711[15]
  request.r(i711[16], i711[17], 0, i710, 'sharedMesh')
  var i715 = i711[18]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i710.bones = i714
  i710.updateWhenOffscreen = !!i711[19]
  i710.localBounds = i711[20]
  request.r(i711[21], i711[22], 0, i710, 'rootBone')
  var i717 = i711[23]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i717[i + 0]) );
  }
  i710.blendShapesWeights = i716
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i721 = data
  i720.weight = i721[0]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i723 = data
  i722.enabled = !!i723[0]
  i722.aspect = i723[1]
  i722.orthographic = !!i723[2]
  i722.orthographicSize = i723[3]
  i722.backgroundColor = new pc.Color(i723[4], i723[5], i723[6], i723[7])
  i722.nearClipPlane = i723[8]
  i722.farClipPlane = i723[9]
  i722.fieldOfView = i723[10]
  i722.depth = i723[11]
  i722.clearFlags = i723[12]
  i722.cullingMask = i723[13]
  i722.rect = i723[14]
  request.r(i723[15], i723[16], 0, i722, 'targetTexture')
  i722.usePhysicalProperties = !!i723[17]
  i722.focalLength = i723[18]
  i722.sensorSize = new pc.Vec2( i723[19], i723[20] )
  i722.lensShift = new pc.Vec2( i723[21], i723[22] )
  i722.gateFit = i723[23]
  i722.commandBufferCount = i723[24]
  i722.cameraType = i723[25]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.type = i725[1]
  i724.color = new pc.Color(i725[2], i725[3], i725[4], i725[5])
  i724.cullingMask = i725[6]
  i724.intensity = i725[7]
  i724.range = i725[8]
  i724.spotAngle = i725[9]
  i724.shadows = i725[10]
  i724.shadowNormalBias = i725[11]
  i724.shadowBias = i725[12]
  i724.shadowStrength = i725[13]
  i724.shadowResolution = i725[14]
  i724.lightmapBakeType = i725[15]
  i724.renderMode = i725[16]
  request.r(i725[17], i725[18], 0, i724, 'cookie')
  i724.cookieSize = i725[19]
  return i724
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_FirstSelected')
  i726.m_sendNavigationEvents = !!i727[2]
  i726.m_DragThreshold = i727[3]
  return i726
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i729 = data
  i728.m_HorizontalAxis = i729[0]
  i728.m_VerticalAxis = i729[1]
  i728.m_SubmitButton = i729[2]
  i728.m_CancelButton = i729[3]
  i728.m_InputActionsPerSecond = i729[4]
  i728.m_RepeatDelay = i729[5]
  i728.m_ForceModuleActive = !!i729[6]
  i728.m_SendPointerHoverToParent = !!i729[7]
  return i728
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i730 = root || request.c( 'GamePlay' )
  var i731 = data
  var i733 = i731[0]
  var i732 = new (System.Collections.Generic.List$1(Bridge.ns('Hole')))
  for(var i = 0; i < i733.length; i += 2) {
  request.r(i733[i + 0], i733[i + 1], 1, i732, '')
  }
  i730.holes = i732
  var i735 = i731[1]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 1, i734, '')
  }
  i730.pigs = i734
  return i730
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i740 = root || request.c( 'TilePathfinder' )
  var i741 = data
  return i740
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i742 = root || request.c( 'CoinManager' )
  var i743 = data
  return i742
}

Deserializers["Design"] = function (request, data, root) {
  var i744 = root || request.c( 'Design' )
  var i745 = data
  request.r(i745[0], i745[1], 0, i744, 'coinPrefab')
  request.r(i745[2], i745[3], 0, i744, 'materialsSo')
  return i744
}

Deserializers["Pig"] = function (request, data, root) {
  var i746 = root || request.c( 'Pig' )
  var i747 = data
  i746.colorType = i747[0]
  i746.maxCoinCount = i747[1]
  request.r(i747[2], i747[3], 0, i746, 'positionToDropCoin')
  request.r(i747[4], i747[5], 0, i746, 'endPoint')
  i746.isDropping = !!i747[6]
  request.r(i747[7], i747[8], 0, i746, 'coinBag')
  request.r(i747[9], i747[10], 0, i746, 'materialsSo')
  request.r(i747[11], i747[12], 0, i746, 'coinPrefab')
  request.r(i747[13], i747[14], 0, i746, 'confettiPrefab')
  i746.coinColor = i747[15]
  request.r(i747[16], i747[17], 0, i746, 'skinnedMeshRenderer')
  request.r(i747[18], i747[19], 0, i746, 'dropParticle')
  return i746
}

Deserializers["BounceAnimation"] = function (request, data, root) {
  var i748 = root || request.c( 'BounceAnimation' )
  var i749 = data
  i748.bounceDuration = i749[0]
  i748.bounceDelay = i749[1]
  i748.bounceScale = new pc.Vec3( i749[2], i749[3], i749[4] )
  i748.playOnStart = !!i749[5]
  i748.isLooping = !!i749[6]
  i748.easeType = i749[7]
  return i748
}

Deserializers["CoinBag"] = function (request, data, root) {
  var i750 = root || request.c( 'CoinBag' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'skinnedMeshRenderer')
  request.r(i751[2], i751[3], 0, i750, 'spawnPoint')
  return i750
}

Deserializers["TimeScaleDebugger"] = function (request, data, root) {
  var i752 = root || request.c( 'TimeScaleDebugger' )
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i755 = data
  i754.ambientIntensity = i755[0]
  i754.reflectionIntensity = i755[1]
  i754.ambientMode = i755[2]
  i754.ambientLight = new pc.Color(i755[3], i755[4], i755[5], i755[6])
  i754.ambientSkyColor = new pc.Color(i755[7], i755[8], i755[9], i755[10])
  i754.ambientGroundColor = new pc.Color(i755[11], i755[12], i755[13], i755[14])
  i754.ambientEquatorColor = new pc.Color(i755[15], i755[16], i755[17], i755[18])
  i754.fogColor = new pc.Color(i755[19], i755[20], i755[21], i755[22])
  i754.fogEndDistance = i755[23]
  i754.fogStartDistance = i755[24]
  i754.fogDensity = i755[25]
  i754.fog = !!i755[26]
  request.r(i755[27], i755[28], 0, i754, 'skybox')
  i754.fogMode = i755[29]
  var i757 = i755[30]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i757[i + 0]) );
  }
  i754.lightmaps = i756
  i754.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i755[31], i754.lightProbes)
  i754.lightmapsMode = i755[32]
  i754.mixedBakeMode = i755[33]
  i754.environmentLightingMode = i755[34]
  i754.ambientProbe = new pc.SphericalHarmonicsL2(i755[35])
  i754.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i755[36])
  i754.useReferenceAmbientProbe = !!i755[37]
  request.r(i755[38], i755[39], 0, i754, 'customReflection')
  request.r(i755[40], i755[41], 0, i754, 'defaultReflection')
  i754.defaultReflectionMode = i755[42]
  i754.defaultReflectionResolution = i755[43]
  i754.sunLightObjectId = i755[44]
  i754.pixelLightCount = i755[45]
  i754.defaultReflectionHDR = !!i755[46]
  i754.hasLightDataAsset = !!i755[47]
  i754.hasManualGenerate = !!i755[48]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'lightmapColor')
  request.r(i761[2], i761[3], 0, i760, 'lightmapDirection')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i762 = root || new UnityEngine.LightProbes()
  var i763 = data
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i771 = data
  var i773 = i771[0]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i773.length; i += 1) {
    i772.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i773[i + 0]));
  }
  i770.ShaderCompilationErrors = i772
  i770.name = i771[1]
  i770.guid = i771[2]
  var i775 = i771[3]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( i775[i + 0] );
  }
  i770.shaderDefinedKeywords = i774
  var i777 = i771[4]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i777[i + 0]) );
  }
  i770.passes = i776
  var i779 = i771[5]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i779[i + 0]) );
  }
  i770.usePasses = i778
  var i781 = i771[6]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i781[i + 0]) );
  }
  i770.defaultParameterValues = i780
  request.r(i771[7], i771[8], 0, i770, 'unityFallbackShader')
  i770.readDepth = !!i771[9]
  i770.isCreatedByShaderGraph = !!i771[10]
  i770.compiled = !!i771[11]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i785 = data
  i784.shaderName = i785[0]
  i784.errorMessage = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i790 = root || new pc.UnityShaderPass()
  var i791 = data
  i790.id = i791[0]
  i790.subShaderIndex = i791[1]
  i790.name = i791[2]
  i790.passType = i791[3]
  i790.grabPassTextureName = i791[4]
  i790.usePass = !!i791[5]
  i790.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[6], i790.zTest)
  i790.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[7], i790.zWrite)
  i790.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[8], i790.culling)
  i790.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[9], i790.blending)
  i790.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i791[10], i790.alphaBlending)
  i790.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[11], i790.colorWriteMask)
  i790.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[12], i790.offsetUnits)
  i790.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[13], i790.offsetFactor)
  i790.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[14], i790.stencilRef)
  i790.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[15], i790.stencilReadMask)
  i790.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i791[16], i790.stencilWriteMask)
  i790.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[17], i790.stencilOp)
  i790.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[18], i790.stencilOpFront)
  i790.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i791[19], i790.stencilOpBack)
  var i793 = i791[20]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i793[i + 0]) );
  }
  i790.tags = i792
  var i795 = i791[21]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( i795[i + 0] );
  }
  i790.passDefinedKeywords = i794
  var i797 = i791[22]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i797[i + 0]) );
  }
  i790.passDefinedKeywordGroups = i796
  var i799 = i791[23]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i799[i + 0]) );
  }
  i790.variants = i798
  var i801 = i791[24]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i790.excludedVariants = i800
  i790.hasDepthReader = !!i791[25]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i803 = data
  i802.val = i803[0]
  i802.name = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i805 = data
  i804.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[0], i804.src)
  i804.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[1], i804.dst)
  i804.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i805[2], i804.op)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i807 = data
  i806.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.pass)
  i806.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.fail)
  i806.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.zFail)
  i806.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[3], i806.comp)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i811 = data
  i810.name = i811[0]
  i810.value = i811[1]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i815 = data
  var i817 = i815[0]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( i817[i + 0] );
  }
  i814.keywords = i816
  i814.hasDiscard = !!i815[1]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i821 = data
  i820.passId = i821[0]
  i820.subShaderIndex = i821[1]
  var i823 = i821[2]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( i823[i + 0] );
  }
  i820.keywords = i822
  i820.vertexProgram = i821[3]
  i820.fragmentProgram = i821[4]
  i820.exportedForWebGl2 = !!i821[5]
  i820.readDepth = !!i821[6]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'shader')
  i826.pass = i827[2]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i831 = data
  i830.name = i831[0]
  i830.type = i831[1]
  i830.value = new pc.Vec4( i831[2], i831[3], i831[4], i831[5] )
  i830.textureValue = i831[6]
  i830.shaderPropertyFlag = i831[7]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i833 = data
  i832.name = i833[0]
  request.r(i833[1], i833[2], 0, i832, 'texture')
  i832.aabb = i833[3]
  i832.vertices = i833[4]
  i832.triangles = i833[5]
  i832.textureRect = UnityEngine.Rect.MinMaxRect(i833[6], i833[7], i833[8], i833[9])
  i832.packedRect = UnityEngine.Rect.MinMaxRect(i833[10], i833[11], i833[12], i833[13])
  i832.border = new pc.Vec4( i833[14], i833[15], i833[16], i833[17] )
  i832.transparency = i833[18]
  i832.bounds = i833[19]
  i832.pixelsPerUnit = i833[20]
  i832.textureWidth = i833[21]
  i832.textureHeight = i833[22]
  i832.nativeSize = new pc.Vec2( i833[23], i833[24] )
  i832.pivot = new pc.Vec2( i833[25], i833[26] )
  i832.textureRectOffset = new pc.Vec2( i833[27], i833[28] )
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i835 = data
  i834.name = i835[0]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i837 = data
  i836.name = i837[0]
  i836.wrapMode = i837[1]
  i836.isLooping = !!i837[2]
  i836.length = i837[3]
  var i839 = i837[4]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i839[i + 0]) );
  }
  i836.curves = i838
  var i841 = i837[5]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i841[i + 0]) );
  }
  i836.events = i840
  i836.halfPrecision = !!i837[6]
  i836._frameRate = i837[7]
  i836.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i837[8], i836.localBounds)
  i836.hasMuscleCurves = !!i837[9]
  var i843 = i837[10]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( i843[i + 0] );
  }
  i836.clipMuscleConstant = i842
  i836.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i837[11], i836.clipBindingConstant)
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i847 = data
  i846.path = i847[0]
  i846.hash = i847[1]
  i846.componentType = i847[2]
  i846.property = i847[3]
  i846.keys = i847[4]
  var i849 = i847[5]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i849[i + 0]) );
  }
  i846.objectReferenceKeys = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i853 = data
  i852.time = i853[0]
  request.r(i853[1], i853[2], 0, i852, 'value')
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i857 = data
  i856.functionName = i857[0]
  i856.floatParameter = i857[1]
  i856.intParameter = i857[2]
  i856.stringParameter = i857[3]
  request.r(i857[4], i857[5], 0, i856, 'objectReferenceParameter')
  i856.time = i857[6]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i859 = data
  i858.center = new pc.Vec3( i859[0], i859[1], i859[2] )
  i858.extends = new pc.Vec3( i859[3], i859[4], i859[5] )
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i862.genericBindings = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i862.pptrCurveMapping = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i869 = data
  i868.name = i869[0]
  var i871 = i869[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i871[i + 0]) );
  }
  i868.layers = i870
  var i873 = i869[2]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i873[i + 0]) );
  }
  i868.parameters = i872
  i868.animationClips = i869[3]
  i868.avatarUnsupported = i869[4]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i877 = data
  i876.name = i877[0]
  i876.defaultWeight = i877[1]
  i876.blendingMode = i877[2]
  i876.avatarMask = i877[3]
  i876.syncedLayerIndex = i877[4]
  i876.syncedLayerAffectsTiming = !!i877[5]
  i876.syncedLayers = i877[6]
  i876.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i877[7], i876.stateMachine)
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i879 = data
  i878.id = i879[0]
  i878.name = i879[1]
  i878.path = i879[2]
  var i881 = i879[3]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i881[i + 0]) );
  }
  i878.states = i880
  var i883 = i879[4]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i883[i + 0]) );
  }
  i878.machines = i882
  var i885 = i879[5]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i885[i + 0]) );
  }
  i878.entryStateTransitions = i884
  var i887 = i879[6]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i887[i + 0]) );
  }
  i878.exitStateTransitions = i886
  var i889 = i879[7]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i889[i + 0]) );
  }
  i878.anyStateTransitions = i888
  i878.defaultStateId = i879[8]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i893 = data
  i892.id = i893[0]
  i892.name = i893[1]
  i892.cycleOffset = i893[2]
  i892.cycleOffsetParameter = i893[3]
  i892.cycleOffsetParameterActive = !!i893[4]
  i892.mirror = !!i893[5]
  i892.mirrorParameter = i893[6]
  i892.mirrorParameterActive = !!i893[7]
  i892.motionId = i893[8]
  i892.nameHash = i893[9]
  i892.fullPathHash = i893[10]
  i892.speed = i893[11]
  i892.speedParameter = i893[12]
  i892.speedParameterActive = !!i893[13]
  i892.tag = i893[14]
  i892.tagHash = i893[15]
  i892.writeDefaultValues = !!i893[16]
  var i895 = i893[17]
  var i894 = []
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 2, i894, '')
  }
  i892.behaviours = i894
  var i897 = i893[18]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i897[i + 0]) );
  }
  i892.transitions = i896
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i903 = data
  i902.fullPath = i903[0]
  i902.canTransitionToSelf = !!i903[1]
  i902.duration = i903[2]
  i902.exitTime = i903[3]
  i902.hasExitTime = !!i903[4]
  i902.hasFixedDuration = !!i903[5]
  i902.interruptionSource = i903[6]
  i902.offset = i903[7]
  i902.orderedInterruption = !!i903[8]
  i902.destinationStateId = i903[9]
  i902.isExit = !!i903[10]
  i902.mute = !!i903[11]
  i902.solo = !!i903[12]
  var i905 = i903[13]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i905[i + 0]) );
  }
  i902.conditions = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i909 = data
  i908.mode = i909[0]
  i908.parameter = i909[1]
  i908.threshold = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i915 = data
  i914.destinationStateId = i915[0]
  i914.isExit = !!i915[1]
  i914.mute = !!i915[2]
  i914.solo = !!i915[3]
  var i917 = i915[4]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i917[i + 0]) );
  }
  i914.conditions = i916
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i921 = data
  i920.defaultBool = !!i921[0]
  i920.defaultFloat = i921[1]
  i920.defaultInt = i921[2]
  i920.name = i921[3]
  i920.nameHash = i921[4]
  i920.type = i921[5]
  return i920
}

Deserializers["MaterialsSO"] = function (request, data, root) {
  var i922 = root || request.c( 'MaterialsSO' )
  var i923 = data
  var i925 = i923[0]
  var i924 = new (System.Collections.Generic.List$1(Bridge.ns('MainMaterials')))
  for(var i = 0; i < i925.length; i += 1) {
    i924.add(request.d('MainMaterials', i925[i + 0]));
  }
  i922.mainMaterials = i924
  return i922
}

Deserializers["MainMaterials"] = function (request, data, root) {
  var i928 = root || request.c( 'MainMaterials' )
  var i929 = data
  i928.colorType = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'material')
  request.r(i929[3], i929[4], 0, i928, 'pitMaterial')
  request.r(i929[5], i929[6], 0, i928, 'coinMaterial')
  request.r(i929[7], i929[8], 0, i928, 'pigMaterial')
  return i928
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i931 = data
  i930.useSafeMode = !!i931[0]
  i930.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i931[1], i930.safeModeOptions)
  i930.timeScale = i931[2]
  i930.unscaledTimeScale = i931[3]
  i930.useSmoothDeltaTime = !!i931[4]
  i930.maxSmoothUnscaledTime = i931[5]
  i930.rewindCallbackMode = i931[6]
  i930.showUnityEditorReport = !!i931[7]
  i930.logBehaviour = i931[8]
  i930.drawGizmos = !!i931[9]
  i930.defaultRecyclable = !!i931[10]
  i930.defaultAutoPlay = i931[11]
  i930.defaultUpdateType = i931[12]
  i930.defaultTimeScaleIndependent = !!i931[13]
  i930.defaultEaseType = i931[14]
  i930.defaultEaseOvershootOrAmplitude = i931[15]
  i930.defaultEasePeriod = i931[16]
  i930.defaultAutoKill = !!i931[17]
  i930.defaultLoopType = i931[18]
  i930.debugMode = !!i931[19]
  i930.debugStoreTargetId = !!i931[20]
  i930.showPreviewPanel = !!i931[21]
  i930.storeSettingsLocation = i931[22]
  i930.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i931[23], i930.modules)
  i930.createASMDEF = !!i931[24]
  i930.showPlayingTweens = !!i931[25]
  i930.showPausedTweens = !!i931[26]
  return i930
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i932 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i933 = data
  i932.logBehaviour = i933[0]
  i932.nestedTweenFailureBehaviour = i933[1]
  return i932
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i934 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i935 = data
  i934.showPanel = !!i935[0]
  i934.audioEnabled = !!i935[1]
  i934.physicsEnabled = !!i935[2]
  i934.physics2DEnabled = !!i935[3]
  i934.spriteEnabled = !!i935[4]
  i934.uiEnabled = !!i935[5]
  i934.textMeshProEnabled = !!i935[6]
  i934.tk2DEnabled = !!i935[7]
  i934.deAudioEnabled = !!i935[8]
  i934.deUnityExtendedEnabled = !!i935[9]
  i934.epoOutlineEnabled = !!i935[10]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i939[i + 0]) );
  }
  i936.files = i938
  i936.componentToPrefabIds = i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i943 = data
  i942.path = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'unityObject')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i945 = data
  var i947 = i945[0]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i947[i + 0]) );
  }
  i944.scriptsExecutionOrder = i946
  var i949 = i945[1]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i949[i + 0]) );
  }
  i944.sortingLayers = i948
  var i951 = i945[2]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i951[i + 0]) );
  }
  i944.cullingLayers = i950
  i944.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i945[3], i944.timeSettings)
  i944.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i945[4], i944.physicsSettings)
  i944.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i945[5], i944.physics2DSettings)
  i944.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i945[6], i944.qualitySettings)
  i944.enableRealtimeShadows = !!i945[7]
  i944.enableAutoInstancing = !!i945[8]
  i944.enableDynamicBatching = !!i945[9]
  i944.lightmapEncodingQuality = i945[10]
  i944.desiredColorSpace = i945[11]
  var i953 = i945[12]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i944.allTags = i952
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i957 = data
  i956.name = i957[0]
  i956.value = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i961 = data
  i960.id = i961[0]
  i960.name = i961[1]
  i960.value = i961[2]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i965 = data
  i964.id = i965[0]
  i964.name = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i967 = data
  i966.fixedDeltaTime = i967[0]
  i966.maximumDeltaTime = i967[1]
  i966.timeScale = i967[2]
  i966.maximumParticleTimestep = i967[3]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i969 = data
  i968.gravity = new pc.Vec3( i969[0], i969[1], i969[2] )
  i968.defaultSolverIterations = i969[3]
  i968.bounceThreshold = i969[4]
  i968.autoSyncTransforms = !!i969[5]
  i968.autoSimulation = !!i969[6]
  var i971 = i969[7]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i971[i + 0]) );
  }
  i968.collisionMatrix = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i975 = data
  i974.enabled = !!i975[0]
  i974.layerId = i975[1]
  i974.otherLayerId = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i977 = data
  request.r(i977[0], i977[1], 0, i976, 'material')
  i976.gravity = new pc.Vec2( i977[2], i977[3] )
  i976.positionIterations = i977[4]
  i976.velocityIterations = i977[5]
  i976.velocityThreshold = i977[6]
  i976.maxLinearCorrection = i977[7]
  i976.maxAngularCorrection = i977[8]
  i976.maxTranslationSpeed = i977[9]
  i976.maxRotationSpeed = i977[10]
  i976.baumgarteScale = i977[11]
  i976.baumgarteTOIScale = i977[12]
  i976.timeToSleep = i977[13]
  i976.linearSleepTolerance = i977[14]
  i976.angularSleepTolerance = i977[15]
  i976.defaultContactOffset = i977[16]
  i976.autoSimulation = !!i977[17]
  i976.queriesHitTriggers = !!i977[18]
  i976.queriesStartInColliders = !!i977[19]
  i976.callbacksOnDisable = !!i977[20]
  i976.reuseCollisionCallbacks = !!i977[21]
  i976.autoSyncTransforms = !!i977[22]
  var i979 = i977[23]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i979[i + 0]) );
  }
  i976.collisionMatrix = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i983 = data
  i982.enabled = !!i983[0]
  i982.layerId = i983[1]
  i982.otherLayerId = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i985 = data
  var i987 = i985[0]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[i + 0]) );
  }
  i984.qualityLevels = i986
  var i989 = i985[1]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i984.names = i988
  i984.shadows = i985[2]
  i984.anisotropicFiltering = i985[3]
  i984.antiAliasing = i985[4]
  i984.lodBias = i985[5]
  i984.shadowCascades = i985[6]
  i984.shadowDistance = i985[7]
  i984.shadowmaskMode = i985[8]
  i984.shadowProjection = i985[9]
  i984.shadowResolution = i985[10]
  i984.softParticles = !!i985[11]
  i984.softVegetation = !!i985[12]
  i984.activeColorSpace = i985[13]
  i984.desiredColorSpace = i985[14]
  i984.masterTextureLimit = i985[15]
  i984.maxQueuedFrames = i985[16]
  i984.particleRaycastBudget = i985[17]
  i984.pixelLightCount = i985[18]
  i984.realtimeReflectionProbes = !!i985[19]
  i984.shadowCascade2Split = i985[20]
  i984.shadowCascade4Split = new pc.Vec3( i985[21], i985[22], i985[23] )
  i984.streamingMipmapsActive = !!i985[24]
  i984.vSyncCount = i985[25]
  i984.asyncUploadBufferSize = i985[26]
  i984.asyncUploadTimeSlice = i985[27]
  i984.billboardsFaceCameraPosition = !!i985[28]
  i984.shadowNearPlaneOffset = i985[29]
  i984.streamingMipmapsMemoryBudget = i985[30]
  i984.maximumLODLevel = i985[31]
  i984.streamingMipmapsAddAllCameras = !!i985[32]
  i984.streamingMipmapsMaxLevelReduction = i985[33]
  i984.streamingMipmapsRenderersPerFrame = i985[34]
  i984.resolutionScalingFixedDPIFactor = i985[35]
  i984.streamingMipmapsMaxFileIORequests = i985[36]
  i984.currentQualityLevel = i985[37]
  return i984
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[31],"55":[24],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[24],"79":[7],"80":[81],"82":[81],"23":[22],"83":[22],"84":[24],"85":[24],"86":[33],"87":[88],"89":[22],"90":[22],"27":[23],"29":[28,22],"91":[22],"26":[23],"92":[22],"93":[22],"94":[22],"95":[22],"96":[22],"97":[22],"98":[22],"99":[22],"100":[22],"101":[28,22],"102":[22],"103":[22],"104":[22],"105":[22],"106":[28,22],"107":[22],"108":[34],"109":[34],"35":[34],"110":[34],"111":[24],"112":[24],"113":[88],"114":[24],"115":[88],"116":[90,22],"117":[90,22],"118":[90,22],"119":[90,22],"120":[90,22],"121":[90,22],"122":[90,22],"123":[90,22],"124":[90,22],"125":[90,22],"126":[90,22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","Coin","UnityEngine.MeshRenderer","UnityEngine.Animator","UnityEngine.GameObject","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","TimeToDeactivate","UnityEngine.Sprite","Grid","Row","Tile","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","Pig","TilePathfinder","CoinManager","Design","MaterialsSO","CoinBag","BounceAnimation","TimeScaleDebugger","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/11/2025 07:00:15";

Deserializers.lunaDaysRunning = "2.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "adasd";

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

Deserializers.buildID = "3f501475-07c2-4859-b030-bc2bd831ec28";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

