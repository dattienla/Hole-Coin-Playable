var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointSpring' )
  var i465 = data
  i464.spring = i465[0]
  i464.damper = i465[1]
  i464.targetPosition = i465[2]
  return i464
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.JointMotor' )
  var i467 = data
  i466.m_TargetVelocity = i467[0]
  i466.m_Force = i467[1]
  i466.m_FreeSpin = i467[2]
  return i466
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.JointLimits' )
  var i469 = data
  i468.m_Min = i469[0]
  i468.m_Max = i469[1]
  i468.m_Bounciness = i469[2]
  i468.m_BounceMinVelocity = i469[3]
  i468.m_ContactDistance = i469[4]
  i468.minBounce = i469[5]
  i468.maxBounce = i469[6]
  return i468
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointDrive' )
  var i471 = data
  i470.m_PositionSpring = i471[0]
  i470.m_PositionDamper = i471[1]
  i470.m_MaximumForce = i471[2]
  i470.m_UseAcceleration = i471[3]
  return i470
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i473 = data
  i472.m_Spring = i473[0]
  i472.m_Damper = i473[1]
  return i472
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i475 = data
  i474.m_Limit = i475[0]
  i474.m_Bounciness = i475[1]
  i474.m_ContactDistance = i475[2]
  return i474
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i477 = data
  i476.m_ExtremumSlip = i477[0]
  i476.m_ExtremumValue = i477[1]
  i476.m_AsymptoteSlip = i477[2]
  i476.m_AsymptoteValue = i477[3]
  i476.m_Stiffness = i477[4]
  return i476
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i479 = data
  i478.m_LowerAngle = i479[0]
  i478.m_UpperAngle = i479[1]
  return i478
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i481 = data
  i480.m_MotorSpeed = i481[0]
  i480.m_MaximumMotorTorque = i481[1]
  return i480
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i483 = data
  i482.m_DampingRatio = i483[0]
  i482.m_Frequency = i483[1]
  i482.m_Angle = i483[2]
  return i482
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i485 = data
  i484.m_LowerTranslation = i485[0]
  i484.m_UpperTranslation = i485[1]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i486 = root || new pc.UnityMaterial()
  var i487 = data
  i486.name = i487[0]
  request.r(i487[1], i487[2], 0, i486, 'shader')
  i486.renderQueue = i487[3]
  i486.enableInstancing = !!i487[4]
  var i489 = i487[5]
  var i488 = []
  for(var i = 0; i < i489.length; i += 1) {
    i488.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i489[i + 0]) );
  }
  i486.floatParameters = i488
  var i491 = i487[6]
  var i490 = []
  for(var i = 0; i < i491.length; i += 1) {
    i490.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i491[i + 0]) );
  }
  i486.colorParameters = i490
  var i493 = i487[7]
  var i492 = []
  for(var i = 0; i < i493.length; i += 1) {
    i492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i493[i + 0]) );
  }
  i486.vectorParameters = i492
  var i495 = i487[8]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i495[i + 0]) );
  }
  i486.textureParameters = i494
  var i497 = i487[9]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i497[i + 0]) );
  }
  i486.materialFlags = i496
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i501 = data
  i500.name = i501[0]
  i500.value = i501[1]
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i505 = data
  i504.name = i505[0]
  i504.value = new pc.Color(i505[1], i505[2], i505[3], i505[4])
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i509 = data
  i508.name = i509[0]
  i508.value = new pc.Vec4( i509[1], i509[2], i509[3], i509[4] )
  return i508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i513 = data
  i512.name = i513[0]
  request.r(i513[1], i513[2], 0, i512, 'value')
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i517 = data
  i516.name = i517[0]
  i516.enabled = !!i517[1]
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i519 = data
  i518.position = new pc.Vec3( i519[0], i519[1], i519[2] )
  i518.scale = new pc.Vec3( i519[3], i519[4], i519[5] )
  i518.rotation = new pc.Quat(i519[6], i519[7], i519[8], i519[9])
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i521 = data
  request.r(i521[0], i521[1], 0, i520, 'clip')
  request.r(i521[2], i521[3], 0, i520, 'outputAudioMixerGroup')
  i520.playOnAwake = !!i521[4]
  i520.loop = !!i521[5]
  i520.time = i521[6]
  i520.volume = i521[7]
  i520.pitch = i521[8]
  i520.enabled = !!i521[9]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'animatorController')
  request.r(i523[2], i523[3], 0, i522, 'avatar')
  i522.updateMode = i523[4]
  i522.hasTransformHierarchy = !!i523[5]
  i522.applyRootMotion = !!i523[6]
  var i525 = i523[7]
  var i524 = []
  for(var i = 0; i < i525.length; i += 2) {
  request.r(i525[i + 0], i525[i + 1], 2, i524, '')
  }
  i522.humanBones = i524
  i522.enabled = !!i523[8]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'sharedMesh')
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'additionalVertexStreams')
  i530.enabled = !!i531[2]
  request.r(i531[3], i531[4], 0, i530, 'sharedMaterial')
  var i533 = i531[5]
  var i532 = []
  for(var i = 0; i < i533.length; i += 2) {
  request.r(i533[i + 0], i533[i + 1], 2, i532, '')
  }
  i530.sharedMaterials = i532
  i530.receiveShadows = !!i531[6]
  i530.shadowCastingMode = i531[7]
  i530.sortingLayerID = i531[8]
  i530.sortingOrder = i531[9]
  i530.lightmapIndex = i531[10]
  i530.lightmapSceneIndex = i531[11]
  i530.lightmapScaleOffset = new pc.Vec4( i531[12], i531[13], i531[14], i531[15] )
  i530.lightProbeUsage = i531[16]
  i530.reflectionProbeUsage = i531[17]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i537 = data
  i536.name = i537[0]
  i536.tagId = i537[1]
  i536.enabled = !!i537[2]
  i536.isStatic = !!i537[3]
  i536.layer = i537[4]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i539 = data
  i538.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i539[0], i538.main)
  i538.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i539[1], i538.colorBySpeed)
  i538.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i539[2], i538.colorOverLifetime)
  i538.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i539[3], i538.emission)
  i538.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i539[4], i538.rotationBySpeed)
  i538.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i539[5], i538.rotationOverLifetime)
  i538.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i539[6], i538.shape)
  i538.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i539[7], i538.sizeBySpeed)
  i538.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i539[8], i538.sizeOverLifetime)
  i538.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i539[9], i538.textureSheetAnimation)
  i538.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i539[10], i538.velocityOverLifetime)
  i538.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i539[11], i538.noise)
  i538.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i539[12], i538.inheritVelocity)
  i538.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i539[13], i538.forceOverLifetime)
  i538.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i539[14], i538.limitVelocityOverLifetime)
  i538.useAutoRandomSeed = !!i539[15]
  i538.randomSeed = i539[16]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i540 = root || new pc.ParticleSystemMain()
  var i541 = data
  i540.duration = i541[0]
  i540.loop = !!i541[1]
  i540.prewarm = !!i541[2]
  i540.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[3], i540.startDelay)
  i540.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[4], i540.startLifetime)
  i540.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[5], i540.startSpeed)
  i540.startSize3D = !!i541[6]
  i540.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[7], i540.startSizeX)
  i540.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[8], i540.startSizeY)
  i540.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[9], i540.startSizeZ)
  i540.startRotation3D = !!i541[10]
  i540.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[11], i540.startRotationX)
  i540.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[12], i540.startRotationY)
  i540.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[13], i540.startRotationZ)
  i540.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i541[14], i540.startColor)
  i540.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i541[15], i540.gravityModifier)
  i540.simulationSpace = i541[16]
  request.r(i541[17], i541[18], 0, i540, 'customSimulationSpace')
  i540.simulationSpeed = i541[19]
  i540.useUnscaledTime = !!i541[20]
  i540.scalingMode = i541[21]
  i540.playOnAwake = !!i541[22]
  i540.maxParticles = i541[23]
  i540.emitterVelocityMode = i541[24]
  i540.stopAction = i541[25]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i542 = root || new pc.MinMaxCurve()
  var i543 = data
  i542.mode = i543[0]
  i542.curveMin = new pc.AnimationCurve( { keys_flow: i543[1] } )
  i542.curveMax = new pc.AnimationCurve( { keys_flow: i543[2] } )
  i542.curveMultiplier = i543[3]
  i542.constantMin = i543[4]
  i542.constantMax = i543[5]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i544 = root || new pc.MinMaxGradient()
  var i545 = data
  i544.mode = i545[0]
  i544.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[1], i544.gradientMin)
  i544.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i545[2], i544.gradientMax)
  i544.colorMin = new pc.Color(i545[3], i545[4], i545[5], i545[6])
  i544.colorMax = new pc.Color(i545[7], i545[8], i545[9], i545[10])
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i547 = data
  i546.mode = i547[0]
  var i549 = i547[1]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i549[i + 0]) );
  }
  i546.colorKeys = i548
  var i551 = i547[2]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i551[i + 0]) );
  }
  i546.alphaKeys = i550
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i552 = root || new pc.ParticleSystemColorBySpeed()
  var i553 = data
  i552.enabled = !!i553[0]
  i552.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i553[1], i552.color)
  i552.range = new pc.Vec2( i553[2], i553[3] )
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i557 = data
  i556.color = new pc.Color(i557[0], i557[1], i557[2], i557[3])
  i556.time = i557[4]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i561 = data
  i560.alpha = i561[0]
  i560.time = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i562 = root || new pc.ParticleSystemColorOverLifetime()
  var i563 = data
  i562.enabled = !!i563[0]
  i562.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i563[1], i562.color)
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i564 = root || new pc.ParticleSystemEmitter()
  var i565 = data
  i564.enabled = !!i565[0]
  i564.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[1], i564.rateOverTime)
  i564.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i565[2], i564.rateOverDistance)
  var i567 = i565[3]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i567[i + 0]) );
  }
  i564.bursts = i566
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i570 = root || new pc.ParticleSystemBurst()
  var i571 = data
  i570.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i571[0], i570.count)
  i570.cycleCount = i571[1]
  i570.minCount = i571[2]
  i570.maxCount = i571[3]
  i570.repeatInterval = i571[4]
  i570.time = i571[5]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i572 = root || new pc.ParticleSystemRotationBySpeed()
  var i573 = data
  i572.enabled = !!i573[0]
  i572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[1], i572.x)
  i572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[2], i572.y)
  i572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i573[3], i572.z)
  i572.separateAxes = !!i573[4]
  i572.range = new pc.Vec2( i573[5], i573[6] )
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i574 = root || new pc.ParticleSystemRotationOverLifetime()
  var i575 = data
  i574.enabled = !!i575[0]
  i574.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[1], i574.x)
  i574.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[2], i574.y)
  i574.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i575[3], i574.z)
  i574.separateAxes = !!i575[4]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i576 = root || new pc.ParticleSystemShape()
  var i577 = data
  i576.enabled = !!i577[0]
  i576.shapeType = i577[1]
  i576.randomDirectionAmount = i577[2]
  i576.sphericalDirectionAmount = i577[3]
  i576.randomPositionAmount = i577[4]
  i576.alignToDirection = !!i577[5]
  i576.radius = i577[6]
  i576.radiusMode = i577[7]
  i576.radiusSpread = i577[8]
  i576.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[9], i576.radiusSpeed)
  i576.radiusThickness = i577[10]
  i576.angle = i577[11]
  i576.length = i577[12]
  i576.boxThickness = new pc.Vec3( i577[13], i577[14], i577[15] )
  i576.meshShapeType = i577[16]
  request.r(i577[17], i577[18], 0, i576, 'mesh')
  request.r(i577[19], i577[20], 0, i576, 'meshRenderer')
  request.r(i577[21], i577[22], 0, i576, 'skinnedMeshRenderer')
  i576.useMeshMaterialIndex = !!i577[23]
  i576.meshMaterialIndex = i577[24]
  i576.useMeshColors = !!i577[25]
  i576.normalOffset = i577[26]
  i576.arc = i577[27]
  i576.arcMode = i577[28]
  i576.arcSpread = i577[29]
  i576.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i577[30], i576.arcSpeed)
  i576.donutRadius = i577[31]
  i576.position = new pc.Vec3( i577[32], i577[33], i577[34] )
  i576.rotation = new pc.Vec3( i577[35], i577[36], i577[37] )
  i576.scale = new pc.Vec3( i577[38], i577[39], i577[40] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i578 = root || new pc.ParticleSystemSizeBySpeed()
  var i579 = data
  i578.enabled = !!i579[0]
  i578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[1], i578.x)
  i578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[2], i578.y)
  i578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i579[3], i578.z)
  i578.separateAxes = !!i579[4]
  i578.range = new pc.Vec2( i579[5], i579[6] )
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i580 = root || new pc.ParticleSystemSizeOverLifetime()
  var i581 = data
  i580.enabled = !!i581[0]
  i580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[1], i580.x)
  i580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[2], i580.y)
  i580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i581[3], i580.z)
  i580.separateAxes = !!i581[4]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i583 = data
  i582.enabled = !!i583[0]
  i582.mode = i583[1]
  i582.animation = i583[2]
  i582.numTilesX = i583[3]
  i582.numTilesY = i583[4]
  i582.useRandomRow = !!i583[5]
  i582.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[6], i582.frameOverTime)
  i582.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[7], i582.startFrame)
  i582.cycleCount = i583[8]
  i582.rowIndex = i583[9]
  i582.flipU = i583[10]
  i582.flipV = i583[11]
  i582.spriteCount = i583[12]
  var i585 = i583[13]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sprites = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i588 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i589 = data
  i588.enabled = !!i589[0]
  i588.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[1], i588.x)
  i588.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[2], i588.y)
  i588.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[3], i588.z)
  i588.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[4], i588.radial)
  i588.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[5], i588.speedModifier)
  i588.space = i589[6]
  i588.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[7], i588.orbitalX)
  i588.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[8], i588.orbitalY)
  i588.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[9], i588.orbitalZ)
  i588.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[10], i588.orbitalOffsetX)
  i588.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[11], i588.orbitalOffsetY)
  i588.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i589[12], i588.orbitalOffsetZ)
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemNoise()
  var i591 = data
  i590.enabled = !!i591[0]
  i590.separateAxes = !!i591[1]
  i590.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[2], i590.strengthX)
  i590.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.strengthY)
  i590.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.strengthZ)
  i590.frequency = i591[5]
  i590.damping = !!i591[6]
  i590.octaveCount = i591[7]
  i590.octaveMultiplier = i591[8]
  i590.octaveScale = i591[9]
  i590.quality = i591[10]
  i590.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.scrollSpeed)
  i590.scrollSpeedMultiplier = i591[12]
  i590.remapEnabled = !!i591[13]
  i590.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[14], i590.remapX)
  i590.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[15], i590.remapY)
  i590.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[16], i590.remapZ)
  i590.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[17], i590.positionAmount)
  i590.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[18], i590.rotationAmount)
  i590.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[19], i590.sizeAmount)
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i592 = root || new pc.ParticleSystemInheritVelocity()
  var i593 = data
  i592.enabled = !!i593[0]
  i592.mode = i593[1]
  i592.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i593[2], i592.curve)
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemForceOverLifetime()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[1], i594.x)
  i594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[2], i594.y)
  i594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i595[3], i594.z)
  i594.space = i595[4]
  i594.randomized = !!i595[5]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i597 = data
  i596.enabled = !!i597[0]
  i596.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[1], i596.limit)
  i596.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[2], i596.limitX)
  i596.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.limitY)
  i596.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[4], i596.limitZ)
  i596.dampen = i597[5]
  i596.separateAxes = !!i597[6]
  i596.space = i597[7]
  i596.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[8], i596.drag)
  i596.multiplyDragByParticleSize = !!i597[9]
  i596.multiplyDragByParticleVelocity = !!i597[10]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i599 = data
  i598.enabled = !!i599[0]
  request.r(i599[1], i599[2], 0, i598, 'sharedMaterial')
  var i601 = i599[3]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.sharedMaterials = i600
  i598.receiveShadows = !!i599[4]
  i598.shadowCastingMode = i599[5]
  i598.sortingLayerID = i599[6]
  i598.sortingOrder = i599[7]
  i598.lightmapIndex = i599[8]
  i598.lightmapSceneIndex = i599[9]
  i598.lightmapScaleOffset = new pc.Vec4( i599[10], i599[11], i599[12], i599[13] )
  i598.lightProbeUsage = i599[14]
  i598.reflectionProbeUsage = i599[15]
  request.r(i599[16], i599[17], 0, i598, 'mesh')
  i598.meshCount = i599[18]
  i598.activeVertexStreamsCount = i599[19]
  i598.alignment = i599[20]
  i598.renderMode = i599[21]
  i598.sortMode = i599[22]
  i598.lengthScale = i599[23]
  i598.velocityScale = i599[24]
  i598.cameraVelocityScale = i599[25]
  i598.normalDirection = i599[26]
  i598.sortingFudge = i599[27]
  i598.minParticleSize = i599[28]
  i598.maxParticleSize = i599[29]
  i598.pivot = new pc.Vec3( i599[30], i599[31], i599[32] )
  request.r(i599[33], i599[34], 0, i598, 'trailMaterial')
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i603 = data
  i602.name = i603[0]
  i602.halfPrecision = !!i603[1]
  i602.useUInt32IndexFormat = !!i603[2]
  i602.vertexCount = i603[3]
  i602.aabb = i603[4]
  var i605 = i603[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( !!i605[i + 0] );
  }
  i602.streams = i604
  i602.vertices = i603[6]
  var i607 = i603[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i607[i + 0]) );
  }
  i602.subMeshes = i606
  var i609 = i603[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 16) {
    i608.push( new pc.Mat4().setData(i609[i + 0], i609[i + 1], i609[i + 2], i609[i + 3],  i609[i + 4], i609[i + 5], i609[i + 6], i609[i + 7],  i609[i + 8], i609[i + 9], i609[i + 10], i609[i + 11],  i609[i + 12], i609[i + 13], i609[i + 14], i609[i + 15]) );
  }
  i602.bindposes = i608
  var i611 = i603[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i611[i + 0]) );
  }
  i602.blendShapes = i610
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i617 = data
  i616.triangles = i617[0]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i623 = data
  i622.name = i623[0]
  var i625 = i623[1]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i625[i + 0]) );
  }
  i622.frames = i624
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i627 = data
  i626.name = i627[0]
  i626.width = i627[1]
  i626.height = i627[2]
  i626.mipmapCount = i627[3]
  i626.anisoLevel = i627[4]
  i626.filterMode = i627[5]
  i626.hdr = !!i627[6]
  i626.format = i627[7]
  i626.wrapMode = i627[8]
  i626.alphaIsTransparency = !!i627[9]
  i626.alphaSource = i627[10]
  i626.graphicsFormat = i627[11]
  i626.sRGBTexture = !!i627[12]
  i626.desiredColorSpace = i627[13]
  i626.wrapU = i627[14]
  i626.wrapV = i627[15]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i631 = data
  i630.weight = i631[0]
  i630.vertices = i631[1]
  i630.normals = i631[2]
  i630.tangents = i631[3]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i633 = data
  i632.name = i633[0]
  i632.atlasId = i633[1]
  i632.mipmapCount = i633[2]
  i632.hdr = !!i633[3]
  i632.size = i633[4]
  i632.anisoLevel = i633[5]
  i632.filterMode = i633[6]
  var i635 = i633[7]
  var i634 = []
  for(var i = 0; i < i635.length; i += 4) {
    i634.push( UnityEngine.Rect.MinMaxRect(i635[i + 0], i635[i + 1], i635[i + 2], i635[i + 3]) );
  }
  i632.rects = i634
  i632.wrapU = i633[8]
  i632.wrapV = i633[9]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i639 = data
  i638.name = i639[0]
  i638.index = i639[1]
  i638.startup = !!i639[2]
  return i638
}

Deserializers["Grid"] = function (request, data, root) {
  var i640 = root || request.c( 'Grid' )
  var i641 = data
  var i643 = i641[0]
  var i642 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 1, i642, '')
  }
  i640.rows = i642
  return i640
}

Deserializers["Row"] = function (request, data, root) {
  var i646 = root || request.c( 'Row' )
  var i647 = data
  var i649 = i647[0]
  var i648 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 1, i648, '')
  }
  i646.tiles = i648
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i653 = data
  i652.center = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.size = new pc.Vec3( i653[3], i653[4], i653[5] )
  i652.enabled = !!i653[6]
  i652.isTrigger = !!i653[7]
  request.r(i653[8], i653[9], 0, i652, 'material')
  return i652
}

Deserializers["Tile"] = function (request, data, root) {
  var i654 = root || request.c( 'Tile' )
  var i655 = data
  i654.gridPosition = new pc.Vec2( i655[0], i655[1] )
  i654.isEmptyAfterCoinMove = !!i655[2]
  request.r(i655[3], i655[4], 0, i654, 'childCoin')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i657 = data
  i656.pivot = new pc.Vec2( i657[0], i657[1] )
  i656.anchorMin = new pc.Vec2( i657[2], i657[3] )
  i656.anchorMax = new pc.Vec2( i657[4], i657[5] )
  i656.sizeDelta = new pc.Vec2( i657[6], i657[7] )
  i656.anchoredPosition3D = new pc.Vec3( i657[8], i657[9], i657[10] )
  i656.rotation = new pc.Quat(i657[11], i657[12], i657[13], i657[14])
  i656.scale = new pc.Vec3( i657[15], i657[16], i657[17] )
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i659 = data
  i658.enabled = !!i659[0]
  i658.planeDistance = i659[1]
  i658.referencePixelsPerUnit = i659[2]
  i658.isFallbackOverlay = !!i659[3]
  i658.renderMode = i659[4]
  i658.renderOrder = i659[5]
  i658.sortingLayerName = i659[6]
  i658.sortingOrder = i659[7]
  i658.scaleFactor = i659[8]
  request.r(i659[9], i659[10], 0, i658, 'worldCamera')
  i658.overrideSorting = !!i659[11]
  i658.pixelPerfect = !!i659[12]
  i658.targetDisplay = i659[13]
  i658.overridePixelPerfect = !!i659[14]
  return i658
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i661 = data
  i660.m_UiScaleMode = i661[0]
  i660.m_ReferencePixelsPerUnit = i661[1]
  i660.m_ScaleFactor = i661[2]
  i660.m_ReferenceResolution = new pc.Vec2( i661[3], i661[4] )
  i660.m_ScreenMatchMode = i661[5]
  i660.m_MatchWidthOrHeight = i661[6]
  i660.m_PhysicalUnit = i661[7]
  i660.m_FallbackScreenDPI = i661[8]
  i660.m_DefaultSpriteDPI = i661[9]
  i660.m_DynamicPixelsPerUnit = i661[10]
  i660.m_PresetInfoIsWorld = !!i661[11]
  return i660
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i663 = data
  i662.m_IgnoreReversedGraphics = !!i663[0]
  i662.m_BlockingObjects = i663[1]
  i662.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i663[2] )
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i665 = data
  i664.cullTransparentMesh = !!i665[0]
  return i664
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.UI.Image' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'm_Sprite')
  i666.m_Type = i667[2]
  i666.m_PreserveAspect = !!i667[3]
  i666.m_FillCenter = !!i667[4]
  i666.m_FillMethod = i667[5]
  i666.m_FillAmount = i667[6]
  i666.m_FillClockwise = !!i667[7]
  i666.m_FillOrigin = i667[8]
  i666.m_UseSpriteMesh = !!i667[9]
  i666.m_PixelsPerUnitMultiplier = i667[10]
  request.r(i667[11], i667[12], 0, i666, 'm_Material')
  i666.m_Maskable = !!i667[13]
  i666.m_Color = new pc.Color(i667[14], i667[15], i667[16], i667[17])
  i666.m_RaycastTarget = !!i667[18]
  i666.m_RaycastPadding = new pc.Vec4( i667[19], i667[20], i667[21], i667[22] )
  return i666
}

Deserializers["Hole"] = function (request, data, root) {
  var i668 = root || request.c( 'Hole' )
  var i669 = data
  i668.colorType = new pc.Color(i669[0], i669[1], i669[2], i669[3])
  var i671 = i669[4]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i671.length; i += 2) {
  request.r(i671[i + 0], i671[i + 1], 1, i670, '')
  }
  i668.targetTiles = i670
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i673 = data
  i672.enabled = !!i673[0]
  request.r(i673[1], i673[2], 0, i672, 'sharedMaterial')
  var i675 = i673[3]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.sharedMaterials = i674
  i672.receiveShadows = !!i673[4]
  i672.shadowCastingMode = i673[5]
  i672.sortingLayerID = i673[6]
  i672.sortingOrder = i673[7]
  i672.lightmapIndex = i673[8]
  i672.lightmapSceneIndex = i673[9]
  i672.lightmapScaleOffset = new pc.Vec4( i673[10], i673[11], i673[12], i673[13] )
  i672.lightProbeUsage = i673[14]
  i672.reflectionProbeUsage = i673[15]
  request.r(i673[16], i673[17], 0, i672, 'sharedMesh')
  var i677 = i673[18]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i672.bones = i676
  i672.updateWhenOffscreen = !!i673[19]
  i672.localBounds = i673[20]
  request.r(i673[21], i673[22], 0, i672, 'rootBone')
  var i679 = i673[23]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i679[i + 0]) );
  }
  i672.blendShapesWeights = i678
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i683 = data
  i682.weight = i683[0]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i685 = data
  i684.enabled = !!i685[0]
  i684.aspect = i685[1]
  i684.orthographic = !!i685[2]
  i684.orthographicSize = i685[3]
  i684.backgroundColor = new pc.Color(i685[4], i685[5], i685[6], i685[7])
  i684.nearClipPlane = i685[8]
  i684.farClipPlane = i685[9]
  i684.fieldOfView = i685[10]
  i684.depth = i685[11]
  i684.clearFlags = i685[12]
  i684.cullingMask = i685[13]
  i684.rect = i685[14]
  request.r(i685[15], i685[16], 0, i684, 'targetTexture')
  i684.usePhysicalProperties = !!i685[17]
  i684.focalLength = i685[18]
  i684.sensorSize = new pc.Vec2( i685[19], i685[20] )
  i684.lensShift = new pc.Vec2( i685[21], i685[22] )
  i684.gateFit = i685[23]
  i684.commandBufferCount = i685[24]
  i684.cameraType = i685[25]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i687 = data
  i686.enabled = !!i687[0]
  i686.type = i687[1]
  i686.color = new pc.Color(i687[2], i687[3], i687[4], i687[5])
  i686.cullingMask = i687[6]
  i686.intensity = i687[7]
  i686.range = i687[8]
  i686.spotAngle = i687[9]
  i686.shadows = i687[10]
  i686.shadowNormalBias = i687[11]
  i686.shadowBias = i687[12]
  i686.shadowStrength = i687[13]
  i686.shadowResolution = i687[14]
  i686.lightmapBakeType = i687[15]
  i686.renderMode = i687[16]
  request.r(i687[17], i687[18], 0, i686, 'cookie')
  i686.cookieSize = i687[19]
  return i686
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i688 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'm_FirstSelected')
  i688.m_sendNavigationEvents = !!i689[2]
  i688.m_DragThreshold = i689[3]
  return i688
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i691 = data
  i690.m_HorizontalAxis = i691[0]
  i690.m_VerticalAxis = i691[1]
  i690.m_SubmitButton = i691[2]
  i690.m_CancelButton = i691[3]
  i690.m_InputActionsPerSecond = i691[4]
  i690.m_RepeatDelay = i691[5]
  i690.m_ForceModuleActive = !!i691[6]
  i690.m_SendPointerHoverToParent = !!i691[7]
  return i690
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i692 = root || request.c( 'GamePlay' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'startTile')
  request.r(i693[2], i693[3], 0, i692, 'targetTile')
  return i692
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i694 = root || request.c( 'TilePathfinder' )
  var i695 = data
  return i694
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i696 = root || request.c( 'CoinManager' )
  var i697 = data
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i699 = data
  i698.ambientIntensity = i699[0]
  i698.reflectionIntensity = i699[1]
  i698.ambientMode = i699[2]
  i698.ambientLight = new pc.Color(i699[3], i699[4], i699[5], i699[6])
  i698.ambientSkyColor = new pc.Color(i699[7], i699[8], i699[9], i699[10])
  i698.ambientGroundColor = new pc.Color(i699[11], i699[12], i699[13], i699[14])
  i698.ambientEquatorColor = new pc.Color(i699[15], i699[16], i699[17], i699[18])
  i698.fogColor = new pc.Color(i699[19], i699[20], i699[21], i699[22])
  i698.fogEndDistance = i699[23]
  i698.fogStartDistance = i699[24]
  i698.fogDensity = i699[25]
  i698.fog = !!i699[26]
  request.r(i699[27], i699[28], 0, i698, 'skybox')
  i698.fogMode = i699[29]
  var i701 = i699[30]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i701[i + 0]) );
  }
  i698.lightmaps = i700
  i698.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i699[31], i698.lightProbes)
  i698.lightmapsMode = i699[32]
  i698.mixedBakeMode = i699[33]
  i698.environmentLightingMode = i699[34]
  i698.ambientProbe = new pc.SphericalHarmonicsL2(i699[35])
  i698.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i699[36])
  i698.useReferenceAmbientProbe = !!i699[37]
  request.r(i699[38], i699[39], 0, i698, 'customReflection')
  request.r(i699[40], i699[41], 0, i698, 'defaultReflection')
  i698.defaultReflectionMode = i699[42]
  i698.defaultReflectionResolution = i699[43]
  i698.sunLightObjectId = i699[44]
  i698.pixelLightCount = i699[45]
  i698.defaultReflectionHDR = !!i699[46]
  i698.hasLightDataAsset = !!i699[47]
  i698.hasManualGenerate = !!i699[48]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'lightmapColor')
  request.r(i705[2], i705[3], 0, i704, 'lightmapDirection')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i706 = root || new UnityEngine.LightProbes()
  var i707 = data
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i717.length; i += 1) {
    i716.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i717[i + 0]));
  }
  i714.ShaderCompilationErrors = i716
  i714.name = i715[1]
  i714.guid = i715[2]
  var i719 = i715[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i714.shaderDefinedKeywords = i718
  var i721 = i715[4]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i721[i + 0]) );
  }
  i714.passes = i720
  var i723 = i715[5]
  var i722 = []
  for(var i = 0; i < i723.length; i += 1) {
    i722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i723[i + 0]) );
  }
  i714.usePasses = i722
  var i725 = i715[6]
  var i724 = []
  for(var i = 0; i < i725.length; i += 1) {
    i724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i725[i + 0]) );
  }
  i714.defaultParameterValues = i724
  request.r(i715[7], i715[8], 0, i714, 'unityFallbackShader')
  i714.readDepth = !!i715[9]
  i714.isCreatedByShaderGraph = !!i715[10]
  i714.compiled = !!i715[11]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i729 = data
  i728.shaderName = i729[0]
  i728.errorMessage = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i734 = root || new pc.UnityShaderPass()
  var i735 = data
  i734.id = i735[0]
  i734.subShaderIndex = i735[1]
  i734.name = i735[2]
  i734.passType = i735[3]
  i734.grabPassTextureName = i735[4]
  i734.usePass = !!i735[5]
  i734.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[6], i734.zTest)
  i734.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[7], i734.zWrite)
  i734.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[8], i734.culling)
  i734.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[9], i734.blending)
  i734.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i735[10], i734.alphaBlending)
  i734.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[11], i734.colorWriteMask)
  i734.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[12], i734.offsetUnits)
  i734.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[13], i734.offsetFactor)
  i734.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[14], i734.stencilRef)
  i734.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[15], i734.stencilReadMask)
  i734.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i735[16], i734.stencilWriteMask)
  i734.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[17], i734.stencilOp)
  i734.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[18], i734.stencilOpFront)
  i734.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i735[19], i734.stencilOpBack)
  var i737 = i735[20]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i737[i + 0]) );
  }
  i734.tags = i736
  var i739 = i735[21]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.passDefinedKeywords = i738
  var i741 = i735[22]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i741[i + 0]) );
  }
  i734.passDefinedKeywordGroups = i740
  var i743 = i735[23]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i743[i + 0]) );
  }
  i734.variants = i742
  var i745 = i735[24]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i745[i + 0]) );
  }
  i734.excludedVariants = i744
  i734.hasDepthReader = !!i735[25]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i747 = data
  i746.val = i747[0]
  i746.name = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i749 = data
  i748.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[0], i748.src)
  i748.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[1], i748.dst)
  i748.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i749[2], i748.op)
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i751 = data
  i750.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[0], i750.pass)
  i750.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[1], i750.fail)
  i750.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[2], i750.zFail)
  i750.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i751[3], i750.comp)
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i755 = data
  i754.name = i755[0]
  i754.value = i755[1]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( i761[i + 0] );
  }
  i758.keywords = i760
  i758.hasDiscard = !!i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i765 = data
  i764.passId = i765[0]
  i764.subShaderIndex = i765[1]
  var i767 = i765[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( i767[i + 0] );
  }
  i764.keywords = i766
  i764.vertexProgram = i765[3]
  i764.fragmentProgram = i765[4]
  i764.exportedForWebGl2 = !!i765[5]
  i764.readDepth = !!i765[6]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'shader')
  i770.pass = i771[2]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i775 = data
  i774.name = i775[0]
  i774.type = i775[1]
  i774.value = new pc.Vec4( i775[2], i775[3], i775[4], i775[5] )
  i774.textureValue = i775[6]
  i774.shaderPropertyFlag = i775[7]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i777 = data
  i776.name = i777[0]
  request.r(i777[1], i777[2], 0, i776, 'texture')
  i776.aabb = i777[3]
  i776.vertices = i777[4]
  i776.triangles = i777[5]
  i776.textureRect = UnityEngine.Rect.MinMaxRect(i777[6], i777[7], i777[8], i777[9])
  i776.packedRect = UnityEngine.Rect.MinMaxRect(i777[10], i777[11], i777[12], i777[13])
  i776.border = new pc.Vec4( i777[14], i777[15], i777[16], i777[17] )
  i776.transparency = i777[18]
  i776.bounds = i777[19]
  i776.pixelsPerUnit = i777[20]
  i776.textureWidth = i777[21]
  i776.textureHeight = i777[22]
  i776.nativeSize = new pc.Vec2( i777[23], i777[24] )
  i776.pivot = new pc.Vec2( i777[25], i777[26] )
  i776.textureRectOffset = new pc.Vec2( i777[27], i777[28] )
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i779 = data
  i778.name = i779[0]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i781 = data
  i780.name = i781[0]
  i780.wrapMode = i781[1]
  i780.isLooping = !!i781[2]
  i780.length = i781[3]
  var i783 = i781[4]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i783[i + 0]) );
  }
  i780.curves = i782
  var i785 = i781[5]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i785[i + 0]) );
  }
  i780.events = i784
  i780.halfPrecision = !!i781[6]
  i780._frameRate = i781[7]
  i780.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i781[8], i780.localBounds)
  i780.hasMuscleCurves = !!i781[9]
  var i787 = i781[10]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( i787[i + 0] );
  }
  i780.clipMuscleConstant = i786
  i780.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i781[11], i780.clipBindingConstant)
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i791 = data
  i790.path = i791[0]
  i790.hash = i791[1]
  i790.componentType = i791[2]
  i790.property = i791[3]
  i790.keys = i791[4]
  var i793 = i791[5]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i793[i + 0]) );
  }
  i790.objectReferenceKeys = i792
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i797 = data
  i796.time = i797[0]
  request.r(i797[1], i797[2], 0, i796, 'value')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i801 = data
  i800.functionName = i801[0]
  i800.floatParameter = i801[1]
  i800.intParameter = i801[2]
  i800.stringParameter = i801[3]
  request.r(i801[4], i801[5], 0, i800, 'objectReferenceParameter')
  i800.time = i801[6]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i803 = data
  i802.center = new pc.Vec3( i803[0], i803[1], i803[2] )
  i802.extends = new pc.Vec3( i803[3], i803[4], i803[5] )
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i807 = data
  var i809 = i807[0]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( i809[i + 0] );
  }
  i806.genericBindings = i808
  var i811 = i807[1]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( i811[i + 0] );
  }
  i806.pptrCurveMapping = i810
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i813 = data
  i812.name = i813[0]
  var i815 = i813[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i815[i + 0]) );
  }
  i812.layers = i814
  var i817 = i813[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i817[i + 0]) );
  }
  i812.parameters = i816
  i812.animationClips = i813[3]
  i812.avatarUnsupported = i813[4]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i821 = data
  i820.name = i821[0]
  i820.defaultWeight = i821[1]
  i820.blendingMode = i821[2]
  i820.avatarMask = i821[3]
  i820.syncedLayerIndex = i821[4]
  i820.syncedLayerAffectsTiming = !!i821[5]
  i820.syncedLayers = i821[6]
  i820.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i821[7], i820.stateMachine)
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i823 = data
  i822.id = i823[0]
  i822.name = i823[1]
  i822.path = i823[2]
  var i825 = i823[3]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i825[i + 0]) );
  }
  i822.states = i824
  var i827 = i823[4]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i827[i + 0]) );
  }
  i822.machines = i826
  var i829 = i823[5]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i829[i + 0]) );
  }
  i822.entryStateTransitions = i828
  var i831 = i823[6]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i831[i + 0]) );
  }
  i822.exitStateTransitions = i830
  var i833 = i823[7]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i833[i + 0]) );
  }
  i822.anyStateTransitions = i832
  i822.defaultStateId = i823[8]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i837 = data
  i836.id = i837[0]
  i836.name = i837[1]
  i836.cycleOffset = i837[2]
  i836.cycleOffsetParameter = i837[3]
  i836.cycleOffsetParameterActive = !!i837[4]
  i836.mirror = !!i837[5]
  i836.mirrorParameter = i837[6]
  i836.mirrorParameterActive = !!i837[7]
  i836.motionId = i837[8]
  i836.nameHash = i837[9]
  i836.fullPathHash = i837[10]
  i836.speed = i837[11]
  i836.speedParameter = i837[12]
  i836.speedParameterActive = !!i837[13]
  i836.tag = i837[14]
  i836.tagHash = i837[15]
  i836.writeDefaultValues = !!i837[16]
  var i839 = i837[17]
  var i838 = []
  for(var i = 0; i < i839.length; i += 2) {
  request.r(i839[i + 0], i839[i + 1], 2, i838, '')
  }
  i836.behaviours = i838
  var i841 = i837[18]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i841[i + 0]) );
  }
  i836.transitions = i840
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i847 = data
  i846.fullPath = i847[0]
  i846.canTransitionToSelf = !!i847[1]
  i846.duration = i847[2]
  i846.exitTime = i847[3]
  i846.hasExitTime = !!i847[4]
  i846.hasFixedDuration = !!i847[5]
  i846.interruptionSource = i847[6]
  i846.offset = i847[7]
  i846.orderedInterruption = !!i847[8]
  i846.destinationStateId = i847[9]
  i846.isExit = !!i847[10]
  i846.mute = !!i847[11]
  i846.solo = !!i847[12]
  var i849 = i847[13]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i849[i + 0]) );
  }
  i846.conditions = i848
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i853 = data
  i852.mode = i853[0]
  i852.parameter = i853[1]
  i852.threshold = i853[2]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i859 = data
  i858.destinationStateId = i859[0]
  i858.isExit = !!i859[1]
  i858.mute = !!i859[2]
  i858.solo = !!i859[3]
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i861[i + 0]) );
  }
  i858.conditions = i860
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i865 = data
  i864.defaultBool = !!i865[0]
  i864.defaultFloat = i865[1]
  i864.defaultInt = i865[2]
  i864.name = i865[3]
  i864.nameHash = i865[4]
  i864.type = i865[5]
  return i864
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i866 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i867 = data
  i866.useSafeMode = !!i867[0]
  i866.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i867[1], i866.safeModeOptions)
  i866.timeScale = i867[2]
  i866.unscaledTimeScale = i867[3]
  i866.useSmoothDeltaTime = !!i867[4]
  i866.maxSmoothUnscaledTime = i867[5]
  i866.rewindCallbackMode = i867[6]
  i866.showUnityEditorReport = !!i867[7]
  i866.logBehaviour = i867[8]
  i866.drawGizmos = !!i867[9]
  i866.defaultRecyclable = !!i867[10]
  i866.defaultAutoPlay = i867[11]
  i866.defaultUpdateType = i867[12]
  i866.defaultTimeScaleIndependent = !!i867[13]
  i866.defaultEaseType = i867[14]
  i866.defaultEaseOvershootOrAmplitude = i867[15]
  i866.defaultEasePeriod = i867[16]
  i866.defaultAutoKill = !!i867[17]
  i866.defaultLoopType = i867[18]
  i866.debugMode = !!i867[19]
  i866.debugStoreTargetId = !!i867[20]
  i866.showPreviewPanel = !!i867[21]
  i866.storeSettingsLocation = i867[22]
  i866.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i867[23], i866.modules)
  i866.createASMDEF = !!i867[24]
  i866.showPlayingTweens = !!i867[25]
  i866.showPausedTweens = !!i867[26]
  return i866
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i868 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i869 = data
  i868.logBehaviour = i869[0]
  i868.nestedTweenFailureBehaviour = i869[1]
  return i868
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i870 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i871 = data
  i870.showPanel = !!i871[0]
  i870.audioEnabled = !!i871[1]
  i870.physicsEnabled = !!i871[2]
  i870.physics2DEnabled = !!i871[3]
  i870.spriteEnabled = !!i871[4]
  i870.uiEnabled = !!i871[5]
  i870.textMeshProEnabled = !!i871[6]
  i870.tk2DEnabled = !!i871[7]
  i870.deAudioEnabled = !!i871[8]
  i870.deUnityExtendedEnabled = !!i871[9]
  i870.epoOutlineEnabled = !!i871[10]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i875[i + 0]) );
  }
  i872.files = i874
  i872.componentToPrefabIds = i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i879 = data
  i878.path = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'unityObject')
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i881 = data
  var i883 = i881[0]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i883[i + 0]) );
  }
  i880.scriptsExecutionOrder = i882
  var i885 = i881[1]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i885[i + 0]) );
  }
  i880.sortingLayers = i884
  var i887 = i881[2]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i887[i + 0]) );
  }
  i880.cullingLayers = i886
  i880.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i881[3], i880.timeSettings)
  i880.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i881[4], i880.physicsSettings)
  i880.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i881[5], i880.physics2DSettings)
  i880.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i881[6], i880.qualitySettings)
  i880.enableRealtimeShadows = !!i881[7]
  i880.enableAutoInstancing = !!i881[8]
  i880.enableDynamicBatching = !!i881[9]
  i880.lightmapEncodingQuality = i881[10]
  i880.desiredColorSpace = i881[11]
  var i889 = i881[12]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i880.allTags = i888
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i893 = data
  i892.name = i893[0]
  i892.value = i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i897 = data
  i896.id = i897[0]
  i896.name = i897[1]
  i896.value = i897[2]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i901 = data
  i900.id = i901[0]
  i900.name = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i903 = data
  i902.fixedDeltaTime = i903[0]
  i902.maximumDeltaTime = i903[1]
  i902.timeScale = i903[2]
  i902.maximumParticleTimestep = i903[3]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i905 = data
  i904.gravity = new pc.Vec3( i905[0], i905[1], i905[2] )
  i904.defaultSolverIterations = i905[3]
  i904.bounceThreshold = i905[4]
  i904.autoSyncTransforms = !!i905[5]
  i904.autoSimulation = !!i905[6]
  var i907 = i905[7]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i907[i + 0]) );
  }
  i904.collisionMatrix = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i911 = data
  i910.enabled = !!i911[0]
  i910.layerId = i911[1]
  i910.otherLayerId = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'material')
  i912.gravity = new pc.Vec2( i913[2], i913[3] )
  i912.positionIterations = i913[4]
  i912.velocityIterations = i913[5]
  i912.velocityThreshold = i913[6]
  i912.maxLinearCorrection = i913[7]
  i912.maxAngularCorrection = i913[8]
  i912.maxTranslationSpeed = i913[9]
  i912.maxRotationSpeed = i913[10]
  i912.baumgarteScale = i913[11]
  i912.baumgarteTOIScale = i913[12]
  i912.timeToSleep = i913[13]
  i912.linearSleepTolerance = i913[14]
  i912.angularSleepTolerance = i913[15]
  i912.defaultContactOffset = i913[16]
  i912.autoSimulation = !!i913[17]
  i912.queriesHitTriggers = !!i913[18]
  i912.queriesStartInColliders = !!i913[19]
  i912.callbacksOnDisable = !!i913[20]
  i912.reuseCollisionCallbacks = !!i913[21]
  i912.autoSyncTransforms = !!i913[22]
  var i915 = i913[23]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i915[i + 0]) );
  }
  i912.collisionMatrix = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i919 = data
  i918.enabled = !!i919[0]
  i918.layerId = i919[1]
  i918.otherLayerId = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i923[i + 0]) );
  }
  i920.qualityLevels = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.names = i924
  i920.shadows = i921[2]
  i920.anisotropicFiltering = i921[3]
  i920.antiAliasing = i921[4]
  i920.lodBias = i921[5]
  i920.shadowCascades = i921[6]
  i920.shadowDistance = i921[7]
  i920.shadowmaskMode = i921[8]
  i920.shadowProjection = i921[9]
  i920.shadowResolution = i921[10]
  i920.softParticles = !!i921[11]
  i920.softVegetation = !!i921[12]
  i920.activeColorSpace = i921[13]
  i920.desiredColorSpace = i921[14]
  i920.masterTextureLimit = i921[15]
  i920.maxQueuedFrames = i921[16]
  i920.particleRaycastBudget = i921[17]
  i920.pixelLightCount = i921[18]
  i920.realtimeReflectionProbes = !!i921[19]
  i920.shadowCascade2Split = i921[20]
  i920.shadowCascade4Split = new pc.Vec3( i921[21], i921[22], i921[23] )
  i920.streamingMipmapsActive = !!i921[24]
  i920.vSyncCount = i921[25]
  i920.asyncUploadBufferSize = i921[26]
  i920.asyncUploadTimeSlice = i921[27]
  i920.billboardsFaceCameraPosition = !!i921[28]
  i920.shadowNearPlaneOffset = i921[29]
  i920.streamingMipmapsMemoryBudget = i921[30]
  i920.maximumLODLevel = i921[31]
  i920.streamingMipmapsAddAllCameras = !!i921[32]
  i920.streamingMipmapsMaxLevelReduction = i921[33]
  i920.streamingMipmapsRenderersPerFrame = i921[34]
  i920.resolutionScalingFixedDPIFactor = i921[35]
  i920.streamingMipmapsMaxFileIORequests = i921[36]
  i920.currentQualityLevel = i921[37]
  return i920
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"38":[39],"40":[39],"41":[39],"42":[39],"43":[39],"44":[39],"45":[28],"46":[20],"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[48],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[56],"64":[56],"65":[56],"66":[56],"67":[56],"68":[56],"69":[20],"70":[8],"71":[72],"73":[72],"19":[18],"74":[18],"75":[20],"76":[20],"77":[30],"78":[79],"80":[18],"81":[18],"23":[19],"25":[24,18],"82":[18],"22":[19],"83":[18],"84":[18],"85":[18],"86":[18],"87":[18],"88":[18],"89":[18],"90":[18],"91":[18],"92":[24,18],"93":[18],"94":[18],"95":[18],"96":[18],"97":[24,18],"98":[18],"99":[31],"100":[31],"32":[31],"101":[31],"102":[20],"103":[20],"104":[79],"105":[20],"106":[79],"107":[81,18],"108":[81,18],"109":[81,18],"110":[81,18],"111":[81,18],"112":[81,18],"113":[81,18],"114":[81,18],"115":[81,18],"116":[81,18],"117":[81,18]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","Grid","Row","Tile","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","TilePathfinder","CoinManager","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/11/2025 07:00:15";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "hole-coin";

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

Deserializers.buildID = "38826ebd-e4a0-4e25-b3d6-61cd6f068087";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

