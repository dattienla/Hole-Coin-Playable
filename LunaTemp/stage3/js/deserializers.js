var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointSpring' )
  var i531 = data
  i530.spring = i531[0]
  i530.damper = i531[1]
  i530.targetPosition = i531[2]
  return i530
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointMotor' )
  var i533 = data
  i532.m_TargetVelocity = i533[0]
  i532.m_Force = i533[1]
  i532.m_FreeSpin = i533[2]
  return i532
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointLimits' )
  var i535 = data
  i534.m_Min = i535[0]
  i534.m_Max = i535[1]
  i534.m_Bounciness = i535[2]
  i534.m_BounceMinVelocity = i535[3]
  i534.m_ContactDistance = i535[4]
  i534.minBounce = i535[5]
  i534.maxBounce = i535[6]
  return i534
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointDrive' )
  var i537 = data
  i536.m_PositionSpring = i537[0]
  i536.m_PositionDamper = i537[1]
  i536.m_MaximumForce = i537[2]
  i536.m_UseAcceleration = i537[3]
  return i536
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i539 = data
  i538.m_Spring = i539[0]
  i538.m_Damper = i539[1]
  return i538
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i541 = data
  i540.m_Limit = i541[0]
  i540.m_Bounciness = i541[1]
  i540.m_ContactDistance = i541[2]
  return i540
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i543 = data
  i542.m_ExtremumSlip = i543[0]
  i542.m_ExtremumValue = i543[1]
  i542.m_AsymptoteSlip = i543[2]
  i542.m_AsymptoteValue = i543[3]
  i542.m_Stiffness = i543[4]
  return i542
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i545 = data
  i544.m_LowerAngle = i545[0]
  i544.m_UpperAngle = i545[1]
  return i544
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i547 = data
  i546.m_MotorSpeed = i547[0]
  i546.m_MaximumMotorTorque = i547[1]
  return i546
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i549 = data
  i548.m_DampingRatio = i549[0]
  i548.m_Frequency = i549[1]
  i548.m_Angle = i549[2]
  return i548
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i551 = data
  i550.m_LowerTranslation = i551[0]
  i550.m_UpperTranslation = i551[1]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i552 = root || new pc.UnityMaterial()
  var i553 = data
  i552.name = i553[0]
  request.r(i553[1], i553[2], 0, i552, 'shader')
  i552.renderQueue = i553[3]
  i552.enableInstancing = !!i553[4]
  var i555 = i553[5]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i555[i + 0]) );
  }
  i552.floatParameters = i554
  var i557 = i553[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i557[i + 0]) );
  }
  i552.colorParameters = i556
  var i559 = i553[7]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i559[i + 0]) );
  }
  i552.vectorParameters = i558
  var i561 = i553[8]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i561[i + 0]) );
  }
  i552.textureParameters = i560
  var i563 = i553[9]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i563[i + 0]) );
  }
  i552.materialFlags = i562
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i567 = data
  i566.name = i567[0]
  i566.value = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i571 = data
  i570.name = i571[0]
  i570.value = new pc.Color(i571[1], i571[2], i571[3], i571[4])
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i575 = data
  i574.name = i575[0]
  i574.value = new pc.Vec4( i575[1], i575[2], i575[3], i575[4] )
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'value')
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i583 = data
  i582.name = i583[0]
  i582.enabled = !!i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i585 = data
  i584.name = i585[0]
  i584.halfPrecision = !!i585[1]
  i584.useUInt32IndexFormat = !!i585[2]
  i584.vertexCount = i585[3]
  i584.aabb = i585[4]
  var i587 = i585[5]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( !!i587[i + 0] );
  }
  i584.streams = i586
  i584.vertices = i585[6]
  var i589 = i585[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i589[i + 0]) );
  }
  i584.subMeshes = i588
  var i591 = i585[8]
  var i590 = []
  for(var i = 0; i < i591.length; i += 16) {
    i590.push( new pc.Mat4().setData(i591[i + 0], i591[i + 1], i591[i + 2], i591[i + 3],  i591[i + 4], i591[i + 5], i591[i + 6], i591[i + 7],  i591[i + 8], i591[i + 9], i591[i + 10], i591[i + 11],  i591[i + 12], i591[i + 13], i591[i + 14], i591[i + 15]) );
  }
  i584.bindposes = i590
  var i593 = i585[9]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i593[i + 0]) );
  }
  i584.blendShapes = i592
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i599 = data
  i598.triangles = i599[0]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i605 = data
  i604.name = i605[0]
  var i607 = i605[1]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i607[i + 0]) );
  }
  i604.frames = i606
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i609 = data
  i608.name = i609[0]
  i608.width = i609[1]
  i608.height = i609[2]
  i608.mipmapCount = i609[3]
  i608.anisoLevel = i609[4]
  i608.filterMode = i609[5]
  i608.hdr = !!i609[6]
  i608.format = i609[7]
  i608.wrapMode = i609[8]
  i608.alphaIsTransparency = !!i609[9]
  i608.alphaSource = i609[10]
  i608.graphicsFormat = i609[11]
  i608.sRGBTexture = !!i609[12]
  i608.desiredColorSpace = i609[13]
  i608.wrapU = i609[14]
  i608.wrapV = i609[15]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i613 = data
  i612.weight = i613[0]
  i612.vertices = i613[1]
  i612.normals = i613[2]
  i612.tangents = i613[3]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i615 = data
  i614.position = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.scale = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.rotation = new pc.Quat(i615[6], i615[7], i615[8], i615[9])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'clip')
  request.r(i617[2], i617[3], 0, i616, 'outputAudioMixerGroup')
  i616.playOnAwake = !!i617[4]
  i616.loop = !!i617[5]
  i616.time = i617[6]
  i616.volume = i617[7]
  i616.pitch = i617[8]
  i616.enabled = !!i617[9]
  return i616
}

Deserializers["Coin"] = function (request, data, root) {
  var i618 = root || request.c( 'Coin' )
  var i619 = data
  i618.colorType = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'meshRenderer')
  request.r(i619[3], i619[4], 0, i618, 'animator')
  request.r(i619[5], i619[6], 0, i618, 'smokeParticle')
  request.r(i619[7], i619[8], 0, i618, 'audioSource')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'animatorController')
  request.r(i621[2], i621[3], 0, i620, 'avatar')
  i620.updateMode = i621[4]
  i620.hasTransformHierarchy = !!i621[5]
  i620.applyRootMotion = !!i621[6]
  var i623 = i621[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.humanBones = i622
  i620.enabled = !!i621[8]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i627 = data
  request.r(i627[0], i627[1], 0, i626, 'sharedMesh')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'additionalVertexStreams')
  i628.enabled = !!i629[2]
  request.r(i629[3], i629[4], 0, i628, 'sharedMaterial')
  var i631 = i629[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.sharedMaterials = i630
  i628.receiveShadows = !!i629[6]
  i628.shadowCastingMode = i629[7]
  i628.sortingLayerID = i629[8]
  i628.sortingOrder = i629[9]
  i628.lightmapIndex = i629[10]
  i628.lightmapSceneIndex = i629[11]
  i628.lightmapScaleOffset = new pc.Vec4( i629[12], i629[13], i629[14], i629[15] )
  i628.lightProbeUsage = i629[16]
  i628.reflectionProbeUsage = i629[17]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i635 = data
  i634.name = i635[0]
  i634.tagId = i635[1]
  i634.enabled = !!i635[2]
  i634.isStatic = !!i635[3]
  i634.layer = i635[4]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i637 = data
  i636.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i637[0], i636.main)
  i636.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i637[1], i636.colorBySpeed)
  i636.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i637[2], i636.colorOverLifetime)
  i636.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i637[3], i636.emission)
  i636.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i637[4], i636.rotationBySpeed)
  i636.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i637[5], i636.rotationOverLifetime)
  i636.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i637[6], i636.shape)
  i636.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i637[7], i636.sizeBySpeed)
  i636.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i637[8], i636.sizeOverLifetime)
  i636.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i637[9], i636.textureSheetAnimation)
  i636.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i637[10], i636.velocityOverLifetime)
  i636.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i637[11], i636.noise)
  i636.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i637[12], i636.inheritVelocity)
  i636.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i637[13], i636.forceOverLifetime)
  i636.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i637[14], i636.limitVelocityOverLifetime)
  i636.useAutoRandomSeed = !!i637[15]
  i636.randomSeed = i637[16]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemMain()
  var i639 = data
  i638.duration = i639[0]
  i638.loop = !!i639[1]
  i638.prewarm = !!i639[2]
  i638.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.startDelay)
  i638.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.startLifetime)
  i638.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[5], i638.startSpeed)
  i638.startSize3D = !!i639[6]
  i638.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.startSizeX)
  i638.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[8], i638.startSizeY)
  i638.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.startSizeZ)
  i638.startRotation3D = !!i639[10]
  i638.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.startRotationX)
  i638.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[12], i638.startRotationY)
  i638.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[13], i638.startRotationZ)
  i638.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i639[14], i638.startColor)
  i638.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[15], i638.gravityModifier)
  i638.simulationSpace = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'customSimulationSpace')
  i638.simulationSpeed = i639[19]
  i638.useUnscaledTime = !!i639[20]
  i638.scalingMode = i639[21]
  i638.playOnAwake = !!i639[22]
  i638.maxParticles = i639[23]
  i638.emitterVelocityMode = i639[24]
  i638.stopAction = i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxCurve()
  var i641 = data
  i640.mode = i641[0]
  i640.curveMin = new pc.AnimationCurve( { keys_flow: i641[1] } )
  i640.curveMax = new pc.AnimationCurve( { keys_flow: i641[2] } )
  i640.curveMultiplier = i641[3]
  i640.constantMin = i641[4]
  i640.constantMax = i641[5]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i642 = root || new pc.MinMaxGradient()
  var i643 = data
  i642.mode = i643[0]
  i642.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[1], i642.gradientMin)
  i642.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[2], i642.gradientMax)
  i642.colorMin = new pc.Color(i643[3], i643[4], i643[5], i643[6])
  i642.colorMax = new pc.Color(i643[7], i643[8], i643[9], i643[10])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i645 = data
  i644.mode = i645[0]
  var i647 = i645[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i647[i + 0]) );
  }
  i644.colorKeys = i646
  var i649 = i645[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i649[i + 0]) );
  }
  i644.alphaKeys = i648
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemColorBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[1], i650.color)
  i650.range = new pc.Vec2( i651[2], i651[3] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i655 = data
  i654.color = new pc.Color(i655[0], i655[1], i655[2], i655[3])
  i654.time = i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i659 = data
  i658.alpha = i659[0]
  i658.time = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemColorOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[1], i660.color)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemEmitter()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.rateOverTime)
  i662.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.rateOverDistance)
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i665[i + 0]) );
  }
  i662.bursts = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemBurst()
  var i669 = data
  i668.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[0], i668.count)
  i668.cycleCount = i669[1]
  i668.minCount = i669[2]
  i668.maxCount = i669[3]
  i668.repeatInterval = i669[4]
  i668.time = i669[5]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemRotationOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemShape()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.shapeType = i675[1]
  i674.randomDirectionAmount = i675[2]
  i674.sphericalDirectionAmount = i675[3]
  i674.randomPositionAmount = i675[4]
  i674.alignToDirection = !!i675[5]
  i674.radius = i675[6]
  i674.radiusMode = i675[7]
  i674.radiusSpread = i675[8]
  i674.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[9], i674.radiusSpeed)
  i674.radiusThickness = i675[10]
  i674.angle = i675[11]
  i674.length = i675[12]
  i674.boxThickness = new pc.Vec3( i675[13], i675[14], i675[15] )
  i674.meshShapeType = i675[16]
  request.r(i675[17], i675[18], 0, i674, 'mesh')
  request.r(i675[19], i675[20], 0, i674, 'meshRenderer')
  request.r(i675[21], i675[22], 0, i674, 'skinnedMeshRenderer')
  i674.useMeshMaterialIndex = !!i675[23]
  i674.meshMaterialIndex = i675[24]
  i674.useMeshColors = !!i675[25]
  i674.normalOffset = i675[26]
  i674.arc = i675[27]
  i674.arcMode = i675[28]
  i674.arcSpread = i675[29]
  i674.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[30], i674.arcSpeed)
  i674.donutRadius = i675[31]
  i674.position = new pc.Vec3( i675[32], i675[33], i675[34] )
  i674.rotation = new pc.Vec3( i675[35], i675[36], i675[37] )
  i674.scale = new pc.Vec3( i675[38], i675[39], i675[40] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeBySpeed()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  i676.range = new pc.Vec2( i677[5], i677[6] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemSizeOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.separateAxes = !!i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.mode = i681[1]
  i680.animation = i681[2]
  i680.numTilesX = i681[3]
  i680.numTilesY = i681[4]
  i680.useRandomRow = !!i681[5]
  i680.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[6], i680.frameOverTime)
  i680.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.startFrame)
  i680.cycleCount = i681[8]
  i680.rowIndex = i681[9]
  i680.flipU = i681[10]
  i680.flipV = i681[11]
  i680.spriteCount = i681[12]
  var i683 = i681[13]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sprites = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.radial)
  i686.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.speedModifier)
  i686.space = i687[6]
  i686.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.orbitalX)
  i686.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.orbitalY)
  i686.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.orbitalZ)
  i686.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[10], i686.orbitalOffsetX)
  i686.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.orbitalOffsetY)
  i686.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.orbitalOffsetZ)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemNoise()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.separateAxes = !!i689[1]
  i688.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.strengthX)
  i688.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.strengthY)
  i688.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.strengthZ)
  i688.frequency = i689[5]
  i688.damping = !!i689[6]
  i688.octaveCount = i689[7]
  i688.octaveMultiplier = i689[8]
  i688.octaveScale = i689[9]
  i688.quality = i689[10]
  i688.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[11], i688.scrollSpeed)
  i688.scrollSpeedMultiplier = i689[12]
  i688.remapEnabled = !!i689[13]
  i688.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[14], i688.remapX)
  i688.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[15], i688.remapY)
  i688.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[16], i688.remapZ)
  i688.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[17], i688.positionAmount)
  i688.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[18], i688.rotationAmount)
  i688.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[19], i688.sizeAmount)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemInheritVelocity()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.mode = i691[1]
  i690.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.curve)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemForceOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.space = i693[4]
  i692.randomized = !!i693[5]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.limit)
  i694.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.limitX)
  i694.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.limitY)
  i694.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[4], i694.limitZ)
  i694.dampen = i695[5]
  i694.separateAxes = !!i695[6]
  i694.space = i695[7]
  i694.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[8], i694.drag)
  i694.multiplyDragByParticleSize = !!i695[9]
  i694.multiplyDragByParticleVelocity = !!i695[10]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i697 = data
  i696.enabled = !!i697[0]
  request.r(i697[1], i697[2], 0, i696, 'sharedMaterial')
  var i699 = i697[3]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[4]
  i696.shadowCastingMode = i697[5]
  i696.sortingLayerID = i697[6]
  i696.sortingOrder = i697[7]
  i696.lightmapIndex = i697[8]
  i696.lightmapSceneIndex = i697[9]
  i696.lightmapScaleOffset = new pc.Vec4( i697[10], i697[11], i697[12], i697[13] )
  i696.lightProbeUsage = i697[14]
  i696.reflectionProbeUsage = i697[15]
  request.r(i697[16], i697[17], 0, i696, 'mesh')
  i696.meshCount = i697[18]
  i696.activeVertexStreamsCount = i697[19]
  i696.alignment = i697[20]
  i696.renderMode = i697[21]
  i696.sortMode = i697[22]
  i696.lengthScale = i697[23]
  i696.velocityScale = i697[24]
  i696.cameraVelocityScale = i697[25]
  i696.normalDirection = i697[26]
  i696.sortingFudge = i697[27]
  i696.minParticleSize = i697[28]
  i696.maxParticleSize = i697[29]
  i696.pivot = new pc.Vec3( i697[30], i697[31], i697[32] )
  request.r(i697[33], i697[34], 0, i696, 'trailMaterial')
  return i696
}

Deserializers["TimeToDeactivate"] = function (request, data, root) {
  var i700 = root || request.c( 'TimeToDeactivate' )
  var i701 = data
  i700.lifeTime = i701[0]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i703 = data
  i702.name = i703[0]
  i702.atlasId = i703[1]
  i702.mipmapCount = i703[2]
  i702.hdr = !!i703[3]
  i702.size = i703[4]
  i702.anisoLevel = i703[5]
  i702.filterMode = i703[6]
  var i705 = i703[7]
  var i704 = []
  for(var i = 0; i < i705.length; i += 4) {
    i704.push( UnityEngine.Rect.MinMaxRect(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3]) );
  }
  i702.rects = i704
  i702.wrapU = i703[8]
  i702.wrapV = i703[9]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i709 = data
  i708.name = i709[0]
  i708.index = i709[1]
  i708.startup = !!i709[2]
  return i708
}

Deserializers["Grid"] = function (request, data, root) {
  var i710 = root || request.c( 'Grid' )
  var i711 = data
  var i713 = i711[0]
  var i712 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i713.length; i += 2) {
  request.r(i713[i + 0], i713[i + 1], 1, i712, '')
  }
  i710.rows = i712
  return i710
}

Deserializers["Row"] = function (request, data, root) {
  var i716 = root || request.c( 'Row' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 1, i718, '')
  }
  i716.tiles = i718
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i723 = data
  i722.center = new pc.Vec3( i723[0], i723[1], i723[2] )
  i722.size = new pc.Vec3( i723[3], i723[4], i723[5] )
  i722.enabled = !!i723[6]
  i722.isTrigger = !!i723[7]
  request.r(i723[8], i723[9], 0, i722, 'material')
  return i722
}

Deserializers["Tile"] = function (request, data, root) {
  var i724 = root || request.c( 'Tile' )
  var i725 = data
  i724.gridPosition = new pc.Vec2( i725[0], i725[1] )
  i724.isEmptyAfterCoinMove = !!i725[2]
  request.r(i725[3], i725[4], 0, i724, 'childCoin')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i727 = data
  i726.pivot = new pc.Vec2( i727[0], i727[1] )
  i726.anchorMin = new pc.Vec2( i727[2], i727[3] )
  i726.anchorMax = new pc.Vec2( i727[4], i727[5] )
  i726.sizeDelta = new pc.Vec2( i727[6], i727[7] )
  i726.anchoredPosition3D = new pc.Vec3( i727[8], i727[9], i727[10] )
  i726.rotation = new pc.Quat(i727[11], i727[12], i727[13], i727[14])
  i726.scale = new pc.Vec3( i727[15], i727[16], i727[17] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i729 = data
  i728.enabled = !!i729[0]
  i728.planeDistance = i729[1]
  i728.referencePixelsPerUnit = i729[2]
  i728.isFallbackOverlay = !!i729[3]
  i728.renderMode = i729[4]
  i728.renderOrder = i729[5]
  i728.sortingLayerName = i729[6]
  i728.sortingOrder = i729[7]
  i728.scaleFactor = i729[8]
  request.r(i729[9], i729[10], 0, i728, 'worldCamera')
  i728.overrideSorting = !!i729[11]
  i728.pixelPerfect = !!i729[12]
  i728.targetDisplay = i729[13]
  i728.overridePixelPerfect = !!i729[14]
  return i728
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i730 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i731 = data
  i730.m_UiScaleMode = i731[0]
  i730.m_ReferencePixelsPerUnit = i731[1]
  i730.m_ScaleFactor = i731[2]
  i730.m_ReferenceResolution = new pc.Vec2( i731[3], i731[4] )
  i730.m_ScreenMatchMode = i731[5]
  i730.m_MatchWidthOrHeight = i731[6]
  i730.m_PhysicalUnit = i731[7]
  i730.m_FallbackScreenDPI = i731[8]
  i730.m_DefaultSpriteDPI = i731[9]
  i730.m_DynamicPixelsPerUnit = i731[10]
  i730.m_PresetInfoIsWorld = !!i731[11]
  return i730
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i732 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i733 = data
  i732.m_IgnoreReversedGraphics = !!i733[0]
  i732.m_BlockingObjects = i733[1]
  i732.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i733[2] )
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i735 = data
  i734.cullTransparentMesh = !!i735[0]
  return i734
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.Image' )
  var i737 = data
  request.r(i737[0], i737[1], 0, i736, 'm_Sprite')
  i736.m_Type = i737[2]
  i736.m_PreserveAspect = !!i737[3]
  i736.m_FillCenter = !!i737[4]
  i736.m_FillMethod = i737[5]
  i736.m_FillAmount = i737[6]
  i736.m_FillClockwise = !!i737[7]
  i736.m_FillOrigin = i737[8]
  i736.m_UseSpriteMesh = !!i737[9]
  i736.m_PixelsPerUnitMultiplier = i737[10]
  request.r(i737[11], i737[12], 0, i736, 'm_Material')
  i736.m_Maskable = !!i737[13]
  i736.m_Color = new pc.Color(i737[14], i737[15], i737[16], i737[17])
  i736.m_RaycastTarget = !!i737[18]
  i736.m_RaycastPadding = new pc.Vec4( i737[19], i737[20], i737[21], i737[22] )
  return i736
}

Deserializers["Hole"] = function (request, data, root) {
  var i738 = root || request.c( 'Hole' )
  var i739 = data
  i738.colorType = i739[0]
  request.r(i739[1], i739[2], 0, i738, 'pointToDropCoin')
  i738.canClick = !!i739[3]
  request.r(i739[4], i739[5], 0, i738, 'skinnedMeshRenderer')
  var i741 = i739[6]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i738.tilesInHole = i740
  var i743 = i739[7]
  var i742 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 1, i742, '')
  }
  i738.targetTiles = i742
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i745 = data
  i744.enabled = !!i745[0]
  request.r(i745[1], i745[2], 0, i744, 'sharedMaterial')
  var i747 = i745[3]
  var i746 = []
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 2, i746, '')
  }
  i744.sharedMaterials = i746
  i744.receiveShadows = !!i745[4]
  i744.shadowCastingMode = i745[5]
  i744.sortingLayerID = i745[6]
  i744.sortingOrder = i745[7]
  i744.lightmapIndex = i745[8]
  i744.lightmapSceneIndex = i745[9]
  i744.lightmapScaleOffset = new pc.Vec4( i745[10], i745[11], i745[12], i745[13] )
  i744.lightProbeUsage = i745[14]
  i744.reflectionProbeUsage = i745[15]
  request.r(i745[16], i745[17], 0, i744, 'sharedMesh')
  var i749 = i745[18]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i744.bones = i748
  i744.updateWhenOffscreen = !!i745[19]
  i744.localBounds = i745[20]
  request.r(i745[21], i745[22], 0, i744, 'rootBone')
  var i751 = i745[23]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i751[i + 0]) );
  }
  i744.blendShapesWeights = i750
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i755 = data
  i754.weight = i755[0]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.aspect = i757[1]
  i756.orthographic = !!i757[2]
  i756.orthographicSize = i757[3]
  i756.backgroundColor = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.nearClipPlane = i757[8]
  i756.farClipPlane = i757[9]
  i756.fieldOfView = i757[10]
  i756.depth = i757[11]
  i756.clearFlags = i757[12]
  i756.cullingMask = i757[13]
  i756.rect = i757[14]
  request.r(i757[15], i757[16], 0, i756, 'targetTexture')
  i756.usePhysicalProperties = !!i757[17]
  i756.focalLength = i757[18]
  i756.sensorSize = new pc.Vec2( i757[19], i757[20] )
  i756.lensShift = new pc.Vec2( i757[21], i757[22] )
  i756.gateFit = i757[23]
  i756.commandBufferCount = i757[24]
  i756.cameraType = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.type = i759[1]
  i758.color = new pc.Color(i759[2], i759[3], i759[4], i759[5])
  i758.cullingMask = i759[6]
  i758.intensity = i759[7]
  i758.range = i759[8]
  i758.spotAngle = i759[9]
  i758.shadows = i759[10]
  i758.shadowNormalBias = i759[11]
  i758.shadowBias = i759[12]
  i758.shadowStrength = i759[13]
  i758.shadowResolution = i759[14]
  i758.lightmapBakeType = i759[15]
  i758.renderMode = i759[16]
  request.r(i759[17], i759[18], 0, i758, 'cookie')
  i758.cookieSize = i759[19]
  return i758
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'm_FirstSelected')
  i760.m_sendNavigationEvents = !!i761[2]
  i760.m_DragThreshold = i761[3]
  return i760
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i763 = data
  i762.m_HorizontalAxis = i763[0]
  i762.m_VerticalAxis = i763[1]
  i762.m_SubmitButton = i763[2]
  i762.m_CancelButton = i763[3]
  i762.m_InputActionsPerSecond = i763[4]
  i762.m_RepeatDelay = i763[5]
  i762.m_ForceModuleActive = !!i763[6]
  i762.m_SendPointerHoverToParent = !!i763[7]
  return i762
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i764 = root || request.c( 'GamePlay' )
  var i765 = data
  var i767 = i765[0]
  var i766 = new (System.Collections.Generic.List$1(Bridge.ns('Hole')))
  for(var i = 0; i < i767.length; i += 2) {
  request.r(i767[i + 0], i767[i + 1], 1, i766, '')
  }
  i764.holes = i766
  var i769 = i765[1]
  var i768 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i769.length; i += 2) {
  request.r(i769[i + 0], i769[i + 1], 1, i768, '')
  }
  i764.pigs = i768
  return i764
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i774 = root || request.c( 'TilePathfinder' )
  var i775 = data
  return i774
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i776 = root || request.c( 'CoinManager' )
  var i777 = data
  return i776
}

Deserializers["Design"] = function (request, data, root) {
  var i778 = root || request.c( 'Design' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'coinPrefab')
  request.r(i779[2], i779[3], 0, i778, 'materialsSo')
  return i778
}

Deserializers["Pig"] = function (request, data, root) {
  var i780 = root || request.c( 'Pig' )
  var i781 = data
  i780.colorType = i781[0]
  i780.maxCoinCount = i781[1]
  request.r(i781[2], i781[3], 0, i780, 'positionToDropCoin')
  request.r(i781[4], i781[5], 0, i780, 'endPoint')
  i780.isDropping = !!i781[6]
  request.r(i781[7], i781[8], 0, i780, 'coinBag')
  request.r(i781[9], i781[10], 0, i780, 'materialsSo')
  request.r(i781[11], i781[12], 0, i780, 'coinPrefab')
  request.r(i781[13], i781[14], 0, i780, 'confettiPrefab')
  i780.coinColor = i781[15]
  request.r(i781[16], i781[17], 0, i780, 'skinnedMeshRenderer')
  request.r(i781[18], i781[19], 0, i780, 'dropParticle')
  return i780
}

Deserializers["BounceAnimation"] = function (request, data, root) {
  var i782 = root || request.c( 'BounceAnimation' )
  var i783 = data
  i782.bounceDuration = i783[0]
  i782.bounceDelay = i783[1]
  i782.bounceScale = new pc.Vec3( i783[2], i783[3], i783[4] )
  i782.playOnStart = !!i783[5]
  i782.isLooping = !!i783[6]
  i782.easeType = i783[7]
  return i782
}

Deserializers["CoinBag"] = function (request, data, root) {
  var i784 = root || request.c( 'CoinBag' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'skinnedMeshRenderer')
  request.r(i785[2], i785[3], 0, i784, 'spawnPoint')
  return i784
}

Deserializers["PlayableManager"] = function (request, data, root) {
  var i786 = root || request.c( 'PlayableManager' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'exitButton')
  request.r(i787[2], i787[3], 0, i786, 'winGamePanel')
  return i786
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.Text' )
  var i789 = data
  i788.m_FontData = request.d('UnityEngine.UI.FontData', i789[0], i788.m_FontData)
  i788.m_Text = i789[1]
  request.r(i789[2], i789[3], 0, i788, 'm_Material')
  i788.m_Maskable = !!i789[4]
  i788.m_Color = new pc.Color(i789[5], i789[6], i789[7], i789[8])
  i788.m_RaycastTarget = !!i789[9]
  i788.m_RaycastPadding = new pc.Vec4( i789[10], i789[11], i789[12], i789[13] )
  return i788
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.FontData' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Font')
  i790.m_FontSize = i791[2]
  i790.m_FontStyle = i791[3]
  i790.m_BestFit = !!i791[4]
  i790.m_MinSize = i791[5]
  i790.m_MaxSize = i791[6]
  i790.m_Alignment = i791[7]
  i790.m_AlignByGeometry = !!i791[8]
  i790.m_RichText = !!i791[9]
  i790.m_HorizontalOverflow = i791[10]
  i790.m_VerticalOverflow = i791[11]
  i790.m_LineSpacing = i791[12]
  return i790
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Button' )
  var i793 = data
  i792.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i793[0], i792.m_OnClick)
  i792.m_Navigation = request.d('UnityEngine.UI.Navigation', i793[1], i792.m_Navigation)
  i792.m_Transition = i793[2]
  i792.m_Colors = request.d('UnityEngine.UI.ColorBlock', i793[3], i792.m_Colors)
  i792.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i793[4], i792.m_SpriteState)
  i792.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i793[5], i792.m_AnimationTriggers)
  i792.m_Interactable = !!i793[6]
  request.r(i793[7], i793[8], 0, i792, 'm_TargetGraphic')
  return i792
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i795 = data
  i794.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i795[0], i794.m_PersistentCalls)
  return i794
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('UnityEngine.Events.PersistentCall', i799[i + 0]));
  }
  i796.m_Calls = i798
  return i796
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_Target')
  i802.m_TargetAssemblyTypeName = i803[2]
  i802.m_MethodName = i803[3]
  i802.m_Mode = i803[4]
  i802.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i803[5], i802.m_Arguments)
  i802.m_CallState = i803[6]
  return i802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i805 = data
  i804.m_Mode = i805[0]
  i804.m_WrapAround = !!i805[1]
  request.r(i805[2], i805[3], 0, i804, 'm_SelectOnUp')
  request.r(i805[4], i805[5], 0, i804, 'm_SelectOnDown')
  request.r(i805[6], i805[7], 0, i804, 'm_SelectOnLeft')
  request.r(i805[8], i805[9], 0, i804, 'm_SelectOnRight')
  return i804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i807 = data
  i806.m_NormalColor = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.m_HighlightedColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.m_PressedColor = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.m_SelectedColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.m_DisabledColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.m_ColorMultiplier = i807[20]
  i806.m_FadeDuration = i807[21]
  return i806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_HighlightedSprite')
  request.r(i809[2], i809[3], 0, i808, 'm_PressedSprite')
  request.r(i809[4], i809[5], 0, i808, 'm_SelectedSprite')
  request.r(i809[6], i809[7], 0, i808, 'm_DisabledSprite')
  return i808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i811 = data
  i810.m_NormalTrigger = i811[0]
  i810.m_HighlightedTrigger = i811[1]
  i810.m_PressedTrigger = i811[2]
  i810.m_SelectedTrigger = i811[3]
  i810.m_DisabledTrigger = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i813 = data
  i812.ambientIntensity = i813[0]
  i812.reflectionIntensity = i813[1]
  i812.ambientMode = i813[2]
  i812.ambientLight = new pc.Color(i813[3], i813[4], i813[5], i813[6])
  i812.ambientSkyColor = new pc.Color(i813[7], i813[8], i813[9], i813[10])
  i812.ambientGroundColor = new pc.Color(i813[11], i813[12], i813[13], i813[14])
  i812.ambientEquatorColor = new pc.Color(i813[15], i813[16], i813[17], i813[18])
  i812.fogColor = new pc.Color(i813[19], i813[20], i813[21], i813[22])
  i812.fogEndDistance = i813[23]
  i812.fogStartDistance = i813[24]
  i812.fogDensity = i813[25]
  i812.fog = !!i813[26]
  request.r(i813[27], i813[28], 0, i812, 'skybox')
  i812.fogMode = i813[29]
  var i815 = i813[30]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i815[i + 0]) );
  }
  i812.lightmaps = i814
  i812.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i813[31], i812.lightProbes)
  i812.lightmapsMode = i813[32]
  i812.mixedBakeMode = i813[33]
  i812.environmentLightingMode = i813[34]
  i812.ambientProbe = new pc.SphericalHarmonicsL2(i813[35])
  i812.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i813[36])
  i812.useReferenceAmbientProbe = !!i813[37]
  request.r(i813[38], i813[39], 0, i812, 'customReflection')
  request.r(i813[40], i813[41], 0, i812, 'defaultReflection')
  i812.defaultReflectionMode = i813[42]
  i812.defaultReflectionResolution = i813[43]
  i812.sunLightObjectId = i813[44]
  i812.pixelLightCount = i813[45]
  i812.defaultReflectionHDR = !!i813[46]
  i812.hasLightDataAsset = !!i813[47]
  i812.hasManualGenerate = !!i813[48]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i819 = data
  request.r(i819[0], i819[1], 0, i818, 'lightmapColor')
  request.r(i819[2], i819[3], 0, i818, 'lightmapDirection')
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i820 = root || new UnityEngine.LightProbes()
  var i821 = data
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i829 = data
  var i831 = i829[0]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i831.length; i += 1) {
    i830.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i831[i + 0]));
  }
  i828.ShaderCompilationErrors = i830
  i828.name = i829[1]
  i828.guid = i829[2]
  var i833 = i829[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( i833[i + 0] );
  }
  i828.shaderDefinedKeywords = i832
  var i835 = i829[4]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i835[i + 0]) );
  }
  i828.passes = i834
  var i837 = i829[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i837[i + 0]) );
  }
  i828.usePasses = i836
  var i839 = i829[6]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i839[i + 0]) );
  }
  i828.defaultParameterValues = i838
  request.r(i829[7], i829[8], 0, i828, 'unityFallbackShader')
  i828.readDepth = !!i829[9]
  i828.isCreatedByShaderGraph = !!i829[10]
  i828.compiled = !!i829[11]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i843 = data
  i842.shaderName = i843[0]
  i842.errorMessage = i843[1]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i848 = root || new pc.UnityShaderPass()
  var i849 = data
  i848.id = i849[0]
  i848.subShaderIndex = i849[1]
  i848.name = i849[2]
  i848.passType = i849[3]
  i848.grabPassTextureName = i849[4]
  i848.usePass = !!i849[5]
  i848.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[6], i848.zTest)
  i848.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[7], i848.zWrite)
  i848.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[8], i848.culling)
  i848.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[9], i848.blending)
  i848.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i849[10], i848.alphaBlending)
  i848.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[11], i848.colorWriteMask)
  i848.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[12], i848.offsetUnits)
  i848.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[13], i848.offsetFactor)
  i848.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[14], i848.stencilRef)
  i848.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[15], i848.stencilReadMask)
  i848.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i849[16], i848.stencilWriteMask)
  i848.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[17], i848.stencilOp)
  i848.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[18], i848.stencilOpFront)
  i848.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i849[19], i848.stencilOpBack)
  var i851 = i849[20]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i851[i + 0]) );
  }
  i848.tags = i850
  var i853 = i849[21]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( i853[i + 0] );
  }
  i848.passDefinedKeywords = i852
  var i855 = i849[22]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i855[i + 0]) );
  }
  i848.passDefinedKeywordGroups = i854
  var i857 = i849[23]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i857[i + 0]) );
  }
  i848.variants = i856
  var i859 = i849[24]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i859[i + 0]) );
  }
  i848.excludedVariants = i858
  i848.hasDepthReader = !!i849[25]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i861 = data
  i860.val = i861[0]
  i860.name = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i863 = data
  i862.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[0], i862.src)
  i862.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[1], i862.dst)
  i862.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i863[2], i862.op)
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i865 = data
  i864.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[0], i864.pass)
  i864.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[1], i864.fail)
  i864.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[2], i864.zFail)
  i864.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i865[3], i864.comp)
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i869 = data
  i868.name = i869[0]
  i868.value = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( i875[i + 0] );
  }
  i872.keywords = i874
  i872.hasDiscard = !!i873[1]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i879 = data
  i878.passId = i879[0]
  i878.subShaderIndex = i879[1]
  var i881 = i879[2]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i878.keywords = i880
  i878.vertexProgram = i879[3]
  i878.fragmentProgram = i879[4]
  i878.exportedForWebGl2 = !!i879[5]
  i878.readDepth = !!i879[6]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'shader')
  i884.pass = i885[2]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i889 = data
  i888.name = i889[0]
  i888.type = i889[1]
  i888.value = new pc.Vec4( i889[2], i889[3], i889[4], i889[5] )
  i888.textureValue = i889[6]
  i888.shaderPropertyFlag = i889[7]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i891 = data
  i890.name = i891[0]
  request.r(i891[1], i891[2], 0, i890, 'texture')
  i890.aabb = i891[3]
  i890.vertices = i891[4]
  i890.triangles = i891[5]
  i890.textureRect = UnityEngine.Rect.MinMaxRect(i891[6], i891[7], i891[8], i891[9])
  i890.packedRect = UnityEngine.Rect.MinMaxRect(i891[10], i891[11], i891[12], i891[13])
  i890.border = new pc.Vec4( i891[14], i891[15], i891[16], i891[17] )
  i890.transparency = i891[18]
  i890.bounds = i891[19]
  i890.pixelsPerUnit = i891[20]
  i890.textureWidth = i891[21]
  i890.textureHeight = i891[22]
  i890.nativeSize = new pc.Vec2( i891[23], i891[24] )
  i890.pivot = new pc.Vec2( i891[25], i891[26] )
  i890.textureRectOffset = new pc.Vec2( i891[27], i891[28] )
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i893 = data
  i892.name = i893[0]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i895 = data
  i894.name = i895[0]
  i894.wrapMode = i895[1]
  i894.isLooping = !!i895[2]
  i894.length = i895[3]
  var i897 = i895[4]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i897[i + 0]) );
  }
  i894.curves = i896
  var i899 = i895[5]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i899[i + 0]) );
  }
  i894.events = i898
  i894.halfPrecision = !!i895[6]
  i894._frameRate = i895[7]
  i894.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i895[8], i894.localBounds)
  i894.hasMuscleCurves = !!i895[9]
  var i901 = i895[10]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i894.clipMuscleConstant = i900
  i894.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i895[11], i894.clipBindingConstant)
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i905 = data
  i904.path = i905[0]
  i904.hash = i905[1]
  i904.componentType = i905[2]
  i904.property = i905[3]
  i904.keys = i905[4]
  var i907 = i905[5]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i907[i + 0]) );
  }
  i904.objectReferenceKeys = i906
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i911 = data
  i910.time = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'value')
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i915 = data
  i914.functionName = i915[0]
  i914.floatParameter = i915[1]
  i914.intParameter = i915[2]
  i914.stringParameter = i915[3]
  request.r(i915[4], i915[5], 0, i914, 'objectReferenceParameter')
  i914.time = i915[6]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i917 = data
  i916.center = new pc.Vec3( i917[0], i917[1], i917[2] )
  i916.extends = new pc.Vec3( i917[3], i917[4], i917[5] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i921 = data
  var i923 = i921[0]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i920.genericBindings = i922
  var i925 = i921[1]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( i925[i + 0] );
  }
  i920.pptrCurveMapping = i924
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i927 = data
  i926.name = i927[0]
  i926.ascent = i927[1]
  i926.originalLineHeight = i927[2]
  i926.fontSize = i927[3]
  var i929 = i927[4]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i929[i + 0]) );
  }
  i926.characterInfo = i928
  request.r(i927[5], i927[6], 0, i926, 'texture')
  i926.originalFontSize = i927[7]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i933 = data
  i932.index = i933[0]
  i932.advance = i933[1]
  i932.bearing = i933[2]
  i932.glyphWidth = i933[3]
  i932.glyphHeight = i933[4]
  i932.minX = i933[5]
  i932.maxX = i933[6]
  i932.minY = i933[7]
  i932.maxY = i933[8]
  i932.uvBottomLeftX = i933[9]
  i932.uvBottomLeftY = i933[10]
  i932.uvBottomRightX = i933[11]
  i932.uvBottomRightY = i933[12]
  i932.uvTopLeftX = i933[13]
  i932.uvTopLeftY = i933[14]
  i932.uvTopRightX = i933[15]
  i932.uvTopRightY = i933[16]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i935 = data
  i934.name = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i937[i + 0]) );
  }
  i934.layers = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i939[i + 0]) );
  }
  i934.parameters = i938
  i934.animationClips = i935[3]
  i934.avatarUnsupported = i935[4]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i943 = data
  i942.name = i943[0]
  i942.defaultWeight = i943[1]
  i942.blendingMode = i943[2]
  i942.avatarMask = i943[3]
  i942.syncedLayerIndex = i943[4]
  i942.syncedLayerAffectsTiming = !!i943[5]
  i942.syncedLayers = i943[6]
  i942.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i943[7], i942.stateMachine)
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i945 = data
  i944.id = i945[0]
  i944.name = i945[1]
  i944.path = i945[2]
  var i947 = i945[3]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i947[i + 0]) );
  }
  i944.states = i946
  var i949 = i945[4]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i949[i + 0]) );
  }
  i944.machines = i948
  var i951 = i945[5]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i951[i + 0]) );
  }
  i944.entryStateTransitions = i950
  var i953 = i945[6]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i953[i + 0]) );
  }
  i944.exitStateTransitions = i952
  var i955 = i945[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i955[i + 0]) );
  }
  i944.anyStateTransitions = i954
  i944.defaultStateId = i945[8]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i959 = data
  i958.id = i959[0]
  i958.name = i959[1]
  i958.cycleOffset = i959[2]
  i958.cycleOffsetParameter = i959[3]
  i958.cycleOffsetParameterActive = !!i959[4]
  i958.mirror = !!i959[5]
  i958.mirrorParameter = i959[6]
  i958.mirrorParameterActive = !!i959[7]
  i958.motionId = i959[8]
  i958.nameHash = i959[9]
  i958.fullPathHash = i959[10]
  i958.speed = i959[11]
  i958.speedParameter = i959[12]
  i958.speedParameterActive = !!i959[13]
  i958.tag = i959[14]
  i958.tagHash = i959[15]
  i958.writeDefaultValues = !!i959[16]
  var i961 = i959[17]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i958.behaviours = i960
  var i963 = i959[18]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i963[i + 0]) );
  }
  i958.transitions = i962
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i969 = data
  i968.fullPath = i969[0]
  i968.canTransitionToSelf = !!i969[1]
  i968.duration = i969[2]
  i968.exitTime = i969[3]
  i968.hasExitTime = !!i969[4]
  i968.hasFixedDuration = !!i969[5]
  i968.interruptionSource = i969[6]
  i968.offset = i969[7]
  i968.orderedInterruption = !!i969[8]
  i968.destinationStateId = i969[9]
  i968.isExit = !!i969[10]
  i968.mute = !!i969[11]
  i968.solo = !!i969[12]
  var i971 = i969[13]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i971[i + 0]) );
  }
  i968.conditions = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i975 = data
  i974.mode = i975[0]
  i974.parameter = i975[1]
  i974.threshold = i975[2]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i981 = data
  i980.destinationStateId = i981[0]
  i980.isExit = !!i981[1]
  i980.mute = !!i981[2]
  i980.solo = !!i981[3]
  var i983 = i981[4]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i983[i + 0]) );
  }
  i980.conditions = i982
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i987 = data
  i986.defaultBool = !!i987[0]
  i986.defaultFloat = i987[1]
  i986.defaultInt = i987[2]
  i986.name = i987[3]
  i986.nameHash = i987[4]
  i986.type = i987[5]
  return i986
}

Deserializers["MaterialsSO"] = function (request, data, root) {
  var i988 = root || request.c( 'MaterialsSO' )
  var i989 = data
  var i991 = i989[0]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('MainMaterials')))
  for(var i = 0; i < i991.length; i += 1) {
    i990.add(request.d('MainMaterials', i991[i + 0]));
  }
  i988.mainMaterials = i990
  return i988
}

Deserializers["MainMaterials"] = function (request, data, root) {
  var i994 = root || request.c( 'MainMaterials' )
  var i995 = data
  i994.colorType = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'material')
  request.r(i995[3], i995[4], 0, i994, 'pitMaterial')
  request.r(i995[5], i995[6], 0, i994, 'coinMaterial')
  request.r(i995[7], i995[8], 0, i994, 'pigMaterial')
  return i994
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i996 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i997 = data
  i996.useSafeMode = !!i997[0]
  i996.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i997[1], i996.safeModeOptions)
  i996.timeScale = i997[2]
  i996.unscaledTimeScale = i997[3]
  i996.useSmoothDeltaTime = !!i997[4]
  i996.maxSmoothUnscaledTime = i997[5]
  i996.rewindCallbackMode = i997[6]
  i996.showUnityEditorReport = !!i997[7]
  i996.logBehaviour = i997[8]
  i996.drawGizmos = !!i997[9]
  i996.defaultRecyclable = !!i997[10]
  i996.defaultAutoPlay = i997[11]
  i996.defaultUpdateType = i997[12]
  i996.defaultTimeScaleIndependent = !!i997[13]
  i996.defaultEaseType = i997[14]
  i996.defaultEaseOvershootOrAmplitude = i997[15]
  i996.defaultEasePeriod = i997[16]
  i996.defaultAutoKill = !!i997[17]
  i996.defaultLoopType = i997[18]
  i996.debugMode = !!i997[19]
  i996.debugStoreTargetId = !!i997[20]
  i996.showPreviewPanel = !!i997[21]
  i996.storeSettingsLocation = i997[22]
  i996.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i997[23], i996.modules)
  i996.createASMDEF = !!i997[24]
  i996.showPlayingTweens = !!i997[25]
  i996.showPausedTweens = !!i997[26]
  return i996
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i998 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i999 = data
  i998.logBehaviour = i999[0]
  i998.nestedTweenFailureBehaviour = i999[1]
  return i998
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1000 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1001 = data
  i1000.showPanel = !!i1001[0]
  i1000.audioEnabled = !!i1001[1]
  i1000.physicsEnabled = !!i1001[2]
  i1000.physics2DEnabled = !!i1001[3]
  i1000.spriteEnabled = !!i1001[4]
  i1000.uiEnabled = !!i1001[5]
  i1000.textMeshProEnabled = !!i1001[6]
  i1000.tk2DEnabled = !!i1001[7]
  i1000.deAudioEnabled = !!i1001[8]
  i1000.deUnityExtendedEnabled = !!i1001[9]
  i1000.epoOutlineEnabled = !!i1001[10]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1005[i + 0]) );
  }
  i1002.files = i1004
  i1002.componentToPrefabIds = i1003[1]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1009 = data
  i1008.path = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'unityObject')
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1011 = data
  var i1013 = i1011[0]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1013[i + 0]) );
  }
  i1010.scriptsExecutionOrder = i1012
  var i1015 = i1011[1]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1015[i + 0]) );
  }
  i1010.sortingLayers = i1014
  var i1017 = i1011[2]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1017[i + 0]) );
  }
  i1010.cullingLayers = i1016
  i1010.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1011[3], i1010.timeSettings)
  i1010.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1011[4], i1010.physicsSettings)
  i1010.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1011[5], i1010.physics2DSettings)
  i1010.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1011[6], i1010.qualitySettings)
  i1010.enableRealtimeShadows = !!i1011[7]
  i1010.enableAutoInstancing = !!i1011[8]
  i1010.enableDynamicBatching = !!i1011[9]
  i1010.lightmapEncodingQuality = i1011[10]
  i1010.desiredColorSpace = i1011[11]
  var i1019 = i1011[12]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1010.allTags = i1018
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1023 = data
  i1022.name = i1023[0]
  i1022.value = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1027 = data
  i1026.id = i1027[0]
  i1026.name = i1027[1]
  i1026.value = i1027[2]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.name = i1031[1]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1033 = data
  i1032.fixedDeltaTime = i1033[0]
  i1032.maximumDeltaTime = i1033[1]
  i1032.timeScale = i1033[2]
  i1032.maximumParticleTimestep = i1033[3]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1035 = data
  i1034.gravity = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.defaultSolverIterations = i1035[3]
  i1034.bounceThreshold = i1035[4]
  i1034.autoSyncTransforms = !!i1035[5]
  i1034.autoSimulation = !!i1035[6]
  var i1037 = i1035[7]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1037[i + 0]) );
  }
  i1034.collisionMatrix = i1036
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.layerId = i1041[1]
  i1040.otherLayerId = i1041[2]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1043 = data
  request.r(i1043[0], i1043[1], 0, i1042, 'material')
  i1042.gravity = new pc.Vec2( i1043[2], i1043[3] )
  i1042.positionIterations = i1043[4]
  i1042.velocityIterations = i1043[5]
  i1042.velocityThreshold = i1043[6]
  i1042.maxLinearCorrection = i1043[7]
  i1042.maxAngularCorrection = i1043[8]
  i1042.maxTranslationSpeed = i1043[9]
  i1042.maxRotationSpeed = i1043[10]
  i1042.baumgarteScale = i1043[11]
  i1042.baumgarteTOIScale = i1043[12]
  i1042.timeToSleep = i1043[13]
  i1042.linearSleepTolerance = i1043[14]
  i1042.angularSleepTolerance = i1043[15]
  i1042.defaultContactOffset = i1043[16]
  i1042.autoSimulation = !!i1043[17]
  i1042.queriesHitTriggers = !!i1043[18]
  i1042.queriesStartInColliders = !!i1043[19]
  i1042.callbacksOnDisable = !!i1043[20]
  i1042.reuseCollisionCallbacks = !!i1043[21]
  i1042.autoSyncTransforms = !!i1043[22]
  var i1045 = i1043[23]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1045[i + 0]) );
  }
  i1042.collisionMatrix = i1044
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1049 = data
  i1048.enabled = !!i1049[0]
  i1048.layerId = i1049[1]
  i1048.otherLayerId = i1049[2]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1053[i + 0]) );
  }
  i1050.qualityLevels = i1052
  var i1055 = i1051[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( i1055[i + 0] );
  }
  i1050.names = i1054
  i1050.shadows = i1051[2]
  i1050.anisotropicFiltering = i1051[3]
  i1050.antiAliasing = i1051[4]
  i1050.lodBias = i1051[5]
  i1050.shadowCascades = i1051[6]
  i1050.shadowDistance = i1051[7]
  i1050.shadowmaskMode = i1051[8]
  i1050.shadowProjection = i1051[9]
  i1050.shadowResolution = i1051[10]
  i1050.softParticles = !!i1051[11]
  i1050.softVegetation = !!i1051[12]
  i1050.activeColorSpace = i1051[13]
  i1050.desiredColorSpace = i1051[14]
  i1050.masterTextureLimit = i1051[15]
  i1050.maxQueuedFrames = i1051[16]
  i1050.particleRaycastBudget = i1051[17]
  i1050.pixelLightCount = i1051[18]
  i1050.realtimeReflectionProbes = !!i1051[19]
  i1050.shadowCascade2Split = i1051[20]
  i1050.shadowCascade4Split = new pc.Vec3( i1051[21], i1051[22], i1051[23] )
  i1050.streamingMipmapsActive = !!i1051[24]
  i1050.vSyncCount = i1051[25]
  i1050.asyncUploadBufferSize = i1051[26]
  i1050.asyncUploadTimeSlice = i1051[27]
  i1050.billboardsFaceCameraPosition = !!i1051[28]
  i1050.shadowNearPlaneOffset = i1051[29]
  i1050.streamingMipmapsMemoryBudget = i1051[30]
  i1050.maximumLODLevel = i1051[31]
  i1050.streamingMipmapsAddAllCameras = !!i1051[32]
  i1050.streamingMipmapsMaxLevelReduction = i1051[33]
  i1050.streamingMipmapsRenderersPerFrame = i1051[34]
  i1050.resolutionScalingFixedDPIFactor = i1051[35]
  i1050.streamingMipmapsMaxFileIORequests = i1051[36]
  i1050.currentQualityLevel = i1051[37]
  return i1050
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1059 = data
  request.r(i1059[0], i1059[1], 0, i1058, 'm_ObjectArgument')
  i1058.m_ObjectArgumentAssemblyTypeName = i1059[2]
  i1058.m_IntArgument = i1059[3]
  i1058.m_FloatArgument = i1059[4]
  i1058.m_StringArgument = i1059[5]
  i1058.m_BoolArgument = !!i1059[6]
  return i1058
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[31],"58":[24],"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[60],"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[68],"75":[68],"76":[68],"77":[68],"78":[68],"79":[68],"80":[68],"81":[24],"82":[7],"83":[84],"85":[84],"23":[22],"86":[22],"87":[24],"88":[24],"89":[33],"90":[91],"92":[22],"93":[22],"27":[23],"29":[28,22],"94":[22],"26":[23],"95":[22],"96":[22],"97":[22],"98":[22],"99":[22],"100":[22],"101":[22],"102":[22],"103":[22],"104":[28,22],"105":[22],"106":[22],"107":[22],"108":[22],"46":[28,22],"109":[22],"110":[34],"111":[34],"35":[34],"112":[34],"113":[24],"114":[24],"115":[91],"116":[24],"117":[91],"118":[93,22],"119":[93,22],"120":[93,22],"121":[93,22],"122":[93,22],"123":[93,22],"124":[93,22],"125":[93,22],"126":[93,22],"127":[93,22],"128":[93,22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","Coin","UnityEngine.MeshRenderer","UnityEngine.Animator","UnityEngine.GameObject","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","TimeToDeactivate","UnityEngine.Sprite","Grid","Row","Tile","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","Pig","TilePathfinder","CoinManager","Design","MaterialsSO","CoinBag","BounceAnimation","PlayableManager","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.Cubemap","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/11/2025 07:00:15";

Deserializers.lunaDaysRunning = "3.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "3333";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1825";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3592";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "Kawaii Games Studio";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Kawaii-Games-Studio.Hole-Coin";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "bc5eaed4-3b0e-45d4-84ba-eacd4713d3db";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

