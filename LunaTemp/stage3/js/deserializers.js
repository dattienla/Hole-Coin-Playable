var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.JointSpring' )
  var i781 = data
  i780.spring = i781[0]
  i780.damper = i781[1]
  i780.targetPosition = i781[2]
  return i780
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.JointMotor' )
  var i783 = data
  i782.m_TargetVelocity = i783[0]
  i782.m_Force = i783[1]
  i782.m_FreeSpin = i783[2]
  return i782
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.JointLimits' )
  var i785 = data
  i784.m_Min = i785[0]
  i784.m_Max = i785[1]
  i784.m_Bounciness = i785[2]
  i784.m_BounceMinVelocity = i785[3]
  i784.m_ContactDistance = i785[4]
  i784.minBounce = i785[5]
  i784.maxBounce = i785[6]
  return i784
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.JointDrive' )
  var i787 = data
  i786.m_PositionSpring = i787[0]
  i786.m_PositionDamper = i787[1]
  i786.m_MaximumForce = i787[2]
  i786.m_UseAcceleration = i787[3]
  return i786
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i789 = data
  i788.m_Spring = i789[0]
  i788.m_Damper = i789[1]
  return i788
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i791 = data
  i790.m_Limit = i791[0]
  i790.m_Bounciness = i791[1]
  i790.m_ContactDistance = i791[2]
  return i790
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i793 = data
  i792.m_ExtremumSlip = i793[0]
  i792.m_ExtremumValue = i793[1]
  i792.m_AsymptoteSlip = i793[2]
  i792.m_AsymptoteValue = i793[3]
  i792.m_Stiffness = i793[4]
  return i792
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i795 = data
  i794.m_LowerAngle = i795[0]
  i794.m_UpperAngle = i795[1]
  return i794
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i797 = data
  i796.m_MotorSpeed = i797[0]
  i796.m_MaximumMotorTorque = i797[1]
  return i796
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i799 = data
  i798.m_DampingRatio = i799[0]
  i798.m_Frequency = i799[1]
  i798.m_Angle = i799[2]
  return i798
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i801 = data
  i800.m_LowerTranslation = i801[0]
  i800.m_UpperTranslation = i801[1]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i802 = root || new pc.UnityMaterial()
  var i803 = data
  i802.name = i803[0]
  request.r(i803[1], i803[2], 0, i802, 'shader')
  i802.renderQueue = i803[3]
  i802.enableInstancing = !!i803[4]
  var i805 = i803[5]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i805[i + 0]) );
  }
  i802.floatParameters = i804
  var i807 = i803[6]
  var i806 = []
  for(var i = 0; i < i807.length; i += 1) {
    i806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i807[i + 0]) );
  }
  i802.colorParameters = i806
  var i809 = i803[7]
  var i808 = []
  for(var i = 0; i < i809.length; i += 1) {
    i808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i809[i + 0]) );
  }
  i802.vectorParameters = i808
  var i811 = i803[8]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i811[i + 0]) );
  }
  i802.textureParameters = i810
  var i813 = i803[9]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i813[i + 0]) );
  }
  i802.materialFlags = i812
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i817 = data
  i816.name = i817[0]
  i816.value = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i821 = data
  i820.name = i821[0]
  i820.value = new pc.Color(i821[1], i821[2], i821[3], i821[4])
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i825 = data
  i824.name = i825[0]
  i824.value = new pc.Vec4( i825[1], i825[2], i825[3], i825[4] )
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i829 = data
  i828.name = i829[0]
  request.r(i829[1], i829[2], 0, i828, 'value')
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i833 = data
  i832.name = i833[0]
  i832.enabled = !!i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i835 = data
  i834.name = i835[0]
  i834.halfPrecision = !!i835[1]
  i834.useUInt32IndexFormat = !!i835[2]
  i834.vertexCount = i835[3]
  i834.aabb = i835[4]
  var i837 = i835[5]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( !!i837[i + 0] );
  }
  i834.streams = i836
  i834.vertices = i835[6]
  var i839 = i835[7]
  var i838 = []
  for(var i = 0; i < i839.length; i += 1) {
    i838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i839[i + 0]) );
  }
  i834.subMeshes = i838
  var i841 = i835[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 16) {
    i840.push( new pc.Mat4().setData(i841[i + 0], i841[i + 1], i841[i + 2], i841[i + 3],  i841[i + 4], i841[i + 5], i841[i + 6], i841[i + 7],  i841[i + 8], i841[i + 9], i841[i + 10], i841[i + 11],  i841[i + 12], i841[i + 13], i841[i + 14], i841[i + 15]) );
  }
  i834.bindposes = i840
  var i843 = i835[9]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i843[i + 0]) );
  }
  i834.blendShapes = i842
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i849 = data
  i848.triangles = i849[0]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i855 = data
  i854.name = i855[0]
  var i857 = i855[1]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i857[i + 0]) );
  }
  i854.frames = i856
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i859 = data
  i858.name = i859[0]
  i858.width = i859[1]
  i858.height = i859[2]
  i858.mipmapCount = i859[3]
  i858.anisoLevel = i859[4]
  i858.filterMode = i859[5]
  i858.hdr = !!i859[6]
  i858.format = i859[7]
  i858.wrapMode = i859[8]
  i858.alphaIsTransparency = !!i859[9]
  i858.alphaSource = i859[10]
  i858.graphicsFormat = i859[11]
  i858.sRGBTexture = !!i859[12]
  i858.desiredColorSpace = i859[13]
  i858.wrapU = i859[14]
  i858.wrapV = i859[15]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i863 = data
  i862.weight = i863[0]
  i862.vertices = i863[1]
  i862.normals = i863[2]
  i862.tangents = i863[3]
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i865 = data
  i864.position = new pc.Vec3( i865[0], i865[1], i865[2] )
  i864.scale = new pc.Vec3( i865[3], i865[4], i865[5] )
  i864.rotation = new pc.Quat(i865[6], i865[7], i865[8], i865[9])
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, 'clip')
  request.r(i867[2], i867[3], 0, i866, 'outputAudioMixerGroup')
  i866.playOnAwake = !!i867[4]
  i866.loop = !!i867[5]
  i866.time = i867[6]
  i866.volume = i867[7]
  i866.pitch = i867[8]
  i866.enabled = !!i867[9]
  return i866
}

Deserializers["Coin"] = function (request, data, root) {
  var i868 = root || request.c( 'Coin' )
  var i869 = data
  i868.colorType = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'meshRenderer')
  request.r(i869[3], i869[4], 0, i868, 'animator')
  request.r(i869[5], i869[6], 0, i868, 'smokeParticle')
  request.r(i869[7], i869[8], 0, i868, 'audioSource')
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, 'animatorController')
  request.r(i871[2], i871[3], 0, i870, 'avatar')
  i870.updateMode = i871[4]
  i870.hasTransformHierarchy = !!i871[5]
  i870.applyRootMotion = !!i871[6]
  var i873 = i871[7]
  var i872 = []
  for(var i = 0; i < i873.length; i += 2) {
  request.r(i873[i + 0], i873[i + 1], 2, i872, '')
  }
  i870.humanBones = i872
  i870.enabled = !!i871[8]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i877 = data
  request.r(i877[0], i877[1], 0, i876, 'sharedMesh')
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, 'additionalVertexStreams')
  i878.enabled = !!i879[2]
  request.r(i879[3], i879[4], 0, i878, 'sharedMaterial')
  var i881 = i879[5]
  var i880 = []
  for(var i = 0; i < i881.length; i += 2) {
  request.r(i881[i + 0], i881[i + 1], 2, i880, '')
  }
  i878.sharedMaterials = i880
  i878.receiveShadows = !!i879[6]
  i878.shadowCastingMode = i879[7]
  i878.sortingLayerID = i879[8]
  i878.sortingOrder = i879[9]
  i878.lightmapIndex = i879[10]
  i878.lightmapSceneIndex = i879[11]
  i878.lightmapScaleOffset = new pc.Vec4( i879[12], i879[13], i879[14], i879[15] )
  i878.lightProbeUsage = i879[16]
  i878.reflectionProbeUsage = i879[17]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i885 = data
  i884.name = i885[0]
  i884.tagId = i885[1]
  i884.enabled = !!i885[2]
  i884.isStatic = !!i885[3]
  i884.layer = i885[4]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i887 = data
  i886.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i887[0], i886.main)
  i886.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i887[1], i886.colorBySpeed)
  i886.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i887[2], i886.colorOverLifetime)
  i886.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i887[3], i886.emission)
  i886.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i887[4], i886.rotationBySpeed)
  i886.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i887[5], i886.rotationOverLifetime)
  i886.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i887[6], i886.shape)
  i886.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i887[7], i886.sizeBySpeed)
  i886.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i887[8], i886.sizeOverLifetime)
  i886.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i887[9], i886.textureSheetAnimation)
  i886.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i887[10], i886.velocityOverLifetime)
  i886.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i887[11], i886.noise)
  i886.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i887[12], i886.inheritVelocity)
  i886.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i887[13], i886.forceOverLifetime)
  i886.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i887[14], i886.limitVelocityOverLifetime)
  i886.useAutoRandomSeed = !!i887[15]
  i886.randomSeed = i887[16]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i888 = root || new pc.ParticleSystemMain()
  var i889 = data
  i888.duration = i889[0]
  i888.loop = !!i889[1]
  i888.prewarm = !!i889[2]
  i888.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[3], i888.startDelay)
  i888.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[4], i888.startLifetime)
  i888.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[5], i888.startSpeed)
  i888.startSize3D = !!i889[6]
  i888.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[7], i888.startSizeX)
  i888.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[8], i888.startSizeY)
  i888.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[9], i888.startSizeZ)
  i888.startRotation3D = !!i889[10]
  i888.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[11], i888.startRotationX)
  i888.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[12], i888.startRotationY)
  i888.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[13], i888.startRotationZ)
  i888.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i889[14], i888.startColor)
  i888.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i889[15], i888.gravityModifier)
  i888.simulationSpace = i889[16]
  request.r(i889[17], i889[18], 0, i888, 'customSimulationSpace')
  i888.simulationSpeed = i889[19]
  i888.useUnscaledTime = !!i889[20]
  i888.scalingMode = i889[21]
  i888.playOnAwake = !!i889[22]
  i888.maxParticles = i889[23]
  i888.emitterVelocityMode = i889[24]
  i888.stopAction = i889[25]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i890 = root || new pc.MinMaxCurve()
  var i891 = data
  i890.mode = i891[0]
  i890.curveMin = new pc.AnimationCurve( { keys_flow: i891[1] } )
  i890.curveMax = new pc.AnimationCurve( { keys_flow: i891[2] } )
  i890.curveMultiplier = i891[3]
  i890.constantMin = i891[4]
  i890.constantMax = i891[5]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i892 = root || new pc.MinMaxGradient()
  var i893 = data
  i892.mode = i893[0]
  i892.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i893[1], i892.gradientMin)
  i892.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i893[2], i892.gradientMax)
  i892.colorMin = new pc.Color(i893[3], i893[4], i893[5], i893[6])
  i892.colorMax = new pc.Color(i893[7], i893[8], i893[9], i893[10])
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i895 = data
  i894.mode = i895[0]
  var i897 = i895[1]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i897[i + 0]) );
  }
  i894.colorKeys = i896
  var i899 = i895[2]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i899[i + 0]) );
  }
  i894.alphaKeys = i898
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i900 = root || new pc.ParticleSystemColorBySpeed()
  var i901 = data
  i900.enabled = !!i901[0]
  i900.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i901[1], i900.color)
  i900.range = new pc.Vec2( i901[2], i901[3] )
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i905 = data
  i904.color = new pc.Color(i905[0], i905[1], i905[2], i905[3])
  i904.time = i905[4]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i909 = data
  i908.alpha = i909[0]
  i908.time = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i910 = root || new pc.ParticleSystemColorOverLifetime()
  var i911 = data
  i910.enabled = !!i911[0]
  i910.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i911[1], i910.color)
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i912 = root || new pc.ParticleSystemEmitter()
  var i913 = data
  i912.enabled = !!i913[0]
  i912.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[1], i912.rateOverTime)
  i912.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i913[2], i912.rateOverDistance)
  var i915 = i913[3]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i915[i + 0]) );
  }
  i912.bursts = i914
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i918 = root || new pc.ParticleSystemBurst()
  var i919 = data
  i918.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i919[0], i918.count)
  i918.cycleCount = i919[1]
  i918.minCount = i919[2]
  i918.maxCount = i919[3]
  i918.repeatInterval = i919[4]
  i918.time = i919[5]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i920 = root || new pc.ParticleSystemRotationBySpeed()
  var i921 = data
  i920.enabled = !!i921[0]
  i920.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[1], i920.x)
  i920.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[2], i920.y)
  i920.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i921[3], i920.z)
  i920.separateAxes = !!i921[4]
  i920.range = new pc.Vec2( i921[5], i921[6] )
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i922 = root || new pc.ParticleSystemRotationOverLifetime()
  var i923 = data
  i922.enabled = !!i923[0]
  i922.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[1], i922.x)
  i922.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[2], i922.y)
  i922.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i923[3], i922.z)
  i922.separateAxes = !!i923[4]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i924 = root || new pc.ParticleSystemShape()
  var i925 = data
  i924.enabled = !!i925[0]
  i924.shapeType = i925[1]
  i924.randomDirectionAmount = i925[2]
  i924.sphericalDirectionAmount = i925[3]
  i924.randomPositionAmount = i925[4]
  i924.alignToDirection = !!i925[5]
  i924.radius = i925[6]
  i924.radiusMode = i925[7]
  i924.radiusSpread = i925[8]
  i924.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[9], i924.radiusSpeed)
  i924.radiusThickness = i925[10]
  i924.angle = i925[11]
  i924.length = i925[12]
  i924.boxThickness = new pc.Vec3( i925[13], i925[14], i925[15] )
  i924.meshShapeType = i925[16]
  request.r(i925[17], i925[18], 0, i924, 'mesh')
  request.r(i925[19], i925[20], 0, i924, 'meshRenderer')
  request.r(i925[21], i925[22], 0, i924, 'skinnedMeshRenderer')
  i924.useMeshMaterialIndex = !!i925[23]
  i924.meshMaterialIndex = i925[24]
  i924.useMeshColors = !!i925[25]
  i924.normalOffset = i925[26]
  i924.arc = i925[27]
  i924.arcMode = i925[28]
  i924.arcSpread = i925[29]
  i924.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i925[30], i924.arcSpeed)
  i924.donutRadius = i925[31]
  i924.position = new pc.Vec3( i925[32], i925[33], i925[34] )
  i924.rotation = new pc.Vec3( i925[35], i925[36], i925[37] )
  i924.scale = new pc.Vec3( i925[38], i925[39], i925[40] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i926 = root || new pc.ParticleSystemSizeBySpeed()
  var i927 = data
  i926.enabled = !!i927[0]
  i926.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[1], i926.x)
  i926.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[2], i926.y)
  i926.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i927[3], i926.z)
  i926.separateAxes = !!i927[4]
  i926.range = new pc.Vec2( i927[5], i927[6] )
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i928 = root || new pc.ParticleSystemSizeOverLifetime()
  var i929 = data
  i928.enabled = !!i929[0]
  i928.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[1], i928.x)
  i928.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[2], i928.y)
  i928.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i929[3], i928.z)
  i928.separateAxes = !!i929[4]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i930 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i931 = data
  i930.enabled = !!i931[0]
  i930.mode = i931[1]
  i930.animation = i931[2]
  i930.numTilesX = i931[3]
  i930.numTilesY = i931[4]
  i930.useRandomRow = !!i931[5]
  i930.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[6], i930.frameOverTime)
  i930.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i931[7], i930.startFrame)
  i930.cycleCount = i931[8]
  i930.rowIndex = i931[9]
  i930.flipU = i931[10]
  i930.flipV = i931[11]
  i930.spriteCount = i931[12]
  var i933 = i931[13]
  var i932 = []
  for(var i = 0; i < i933.length; i += 2) {
  request.r(i933[i + 0], i933[i + 1], 2, i932, '')
  }
  i930.sprites = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i936 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i937 = data
  i936.enabled = !!i937[0]
  i936.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[1], i936.x)
  i936.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[2], i936.y)
  i936.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[3], i936.z)
  i936.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[4], i936.radial)
  i936.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[5], i936.speedModifier)
  i936.space = i937[6]
  i936.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[7], i936.orbitalX)
  i936.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[8], i936.orbitalY)
  i936.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[9], i936.orbitalZ)
  i936.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[10], i936.orbitalOffsetX)
  i936.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[11], i936.orbitalOffsetY)
  i936.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i937[12], i936.orbitalOffsetZ)
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i938 = root || new pc.ParticleSystemNoise()
  var i939 = data
  i938.enabled = !!i939[0]
  i938.separateAxes = !!i939[1]
  i938.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[2], i938.strengthX)
  i938.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[3], i938.strengthY)
  i938.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[4], i938.strengthZ)
  i938.frequency = i939[5]
  i938.damping = !!i939[6]
  i938.octaveCount = i939[7]
  i938.octaveMultiplier = i939[8]
  i938.octaveScale = i939[9]
  i938.quality = i939[10]
  i938.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[11], i938.scrollSpeed)
  i938.scrollSpeedMultiplier = i939[12]
  i938.remapEnabled = !!i939[13]
  i938.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[14], i938.remapX)
  i938.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[15], i938.remapY)
  i938.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[16], i938.remapZ)
  i938.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[17], i938.positionAmount)
  i938.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[18], i938.rotationAmount)
  i938.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i939[19], i938.sizeAmount)
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i940 = root || new pc.ParticleSystemInheritVelocity()
  var i941 = data
  i940.enabled = !!i941[0]
  i940.mode = i941[1]
  i940.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i941[2], i940.curve)
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i942 = root || new pc.ParticleSystemForceOverLifetime()
  var i943 = data
  i942.enabled = !!i943[0]
  i942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[1], i942.x)
  i942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[2], i942.y)
  i942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i943[3], i942.z)
  i942.space = i943[4]
  i942.randomized = !!i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i944 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i945 = data
  i944.enabled = !!i945[0]
  i944.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[1], i944.limit)
  i944.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[2], i944.limitX)
  i944.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[3], i944.limitY)
  i944.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[4], i944.limitZ)
  i944.dampen = i945[5]
  i944.separateAxes = !!i945[6]
  i944.space = i945[7]
  i944.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i945[8], i944.drag)
  i944.multiplyDragByParticleSize = !!i945[9]
  i944.multiplyDragByParticleVelocity = !!i945[10]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i947 = data
  i946.enabled = !!i947[0]
  request.r(i947[1], i947[2], 0, i946, 'sharedMaterial')
  var i949 = i947[3]
  var i948 = []
  for(var i = 0; i < i949.length; i += 2) {
  request.r(i949[i + 0], i949[i + 1], 2, i948, '')
  }
  i946.sharedMaterials = i948
  i946.receiveShadows = !!i947[4]
  i946.shadowCastingMode = i947[5]
  i946.sortingLayerID = i947[6]
  i946.sortingOrder = i947[7]
  i946.lightmapIndex = i947[8]
  i946.lightmapSceneIndex = i947[9]
  i946.lightmapScaleOffset = new pc.Vec4( i947[10], i947[11], i947[12], i947[13] )
  i946.lightProbeUsage = i947[14]
  i946.reflectionProbeUsage = i947[15]
  request.r(i947[16], i947[17], 0, i946, 'mesh')
  i946.meshCount = i947[18]
  i946.activeVertexStreamsCount = i947[19]
  i946.alignment = i947[20]
  i946.renderMode = i947[21]
  i946.sortMode = i947[22]
  i946.lengthScale = i947[23]
  i946.velocityScale = i947[24]
  i946.cameraVelocityScale = i947[25]
  i946.normalDirection = i947[26]
  i946.sortingFudge = i947[27]
  i946.minParticleSize = i947[28]
  i946.maxParticleSize = i947[29]
  i946.pivot = new pc.Vec3( i947[30], i947[31], i947[32] )
  request.r(i947[33], i947[34], 0, i946, 'trailMaterial')
  return i946
}

Deserializers["TimeToDeactivate"] = function (request, data, root) {
  var i950 = root || request.c( 'TimeToDeactivate' )
  var i951 = data
  i950.lifeTime = i951[0]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i953 = data
  i952.name = i953[0]
  i952.atlasId = i953[1]
  i952.mipmapCount = i953[2]
  i952.hdr = !!i953[3]
  i952.size = i953[4]
  i952.anisoLevel = i953[5]
  i952.filterMode = i953[6]
  var i955 = i953[7]
  var i954 = []
  for(var i = 0; i < i955.length; i += 4) {
    i954.push( UnityEngine.Rect.MinMaxRect(i955[i + 0], i955[i + 1], i955[i + 2], i955[i + 3]) );
  }
  i952.rects = i954
  i952.wrapU = i953[8]
  i952.wrapV = i953[9]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i959 = data
  i958.name = i959[0]
  i958.index = i959[1]
  i958.startup = !!i959[2]
  return i958
}

Deserializers["Grid"] = function (request, data, root) {
  var i960 = root || request.c( 'Grid' )
  var i961 = data
  var i963 = i961[0]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('Row')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i960.rows = i962
  return i960
}

Deserializers["Row"] = function (request, data, root) {
  var i966 = root || request.c( 'Row' )
  var i967 = data
  var i969 = i967[0]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i966.tiles = i968
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i973 = data
  i972.center = new pc.Vec3( i973[0], i973[1], i973[2] )
  i972.size = new pc.Vec3( i973[3], i973[4], i973[5] )
  i972.enabled = !!i973[6]
  i972.isTrigger = !!i973[7]
  request.r(i973[8], i973[9], 0, i972, 'material')
  return i972
}

Deserializers["Tile"] = function (request, data, root) {
  var i974 = root || request.c( 'Tile' )
  var i975 = data
  i974.gridPosition = new pc.Vec2( i975[0], i975[1] )
  i974.isEmptyAfterCoinMove = !!i975[2]
  request.r(i975[3], i975[4], 0, i974, 'childCoin')
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i977 = data
  i976.pivot = new pc.Vec2( i977[0], i977[1] )
  i976.anchorMin = new pc.Vec2( i977[2], i977[3] )
  i976.anchorMax = new pc.Vec2( i977[4], i977[5] )
  i976.sizeDelta = new pc.Vec2( i977[6], i977[7] )
  i976.anchoredPosition3D = new pc.Vec3( i977[8], i977[9], i977[10] )
  i976.rotation = new pc.Quat(i977[11], i977[12], i977[13], i977[14])
  i976.scale = new pc.Vec3( i977[15], i977[16], i977[17] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i979 = data
  i978.enabled = !!i979[0]
  i978.planeDistance = i979[1]
  i978.referencePixelsPerUnit = i979[2]
  i978.isFallbackOverlay = !!i979[3]
  i978.renderMode = i979[4]
  i978.renderOrder = i979[5]
  i978.sortingLayerName = i979[6]
  i978.sortingOrder = i979[7]
  i978.scaleFactor = i979[8]
  request.r(i979[9], i979[10], 0, i978, 'worldCamera')
  i978.overrideSorting = !!i979[11]
  i978.pixelPerfect = !!i979[12]
  i978.targetDisplay = i979[13]
  i978.overridePixelPerfect = !!i979[14]
  return i978
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i981 = data
  i980.m_UiScaleMode = i981[0]
  i980.m_ReferencePixelsPerUnit = i981[1]
  i980.m_ScaleFactor = i981[2]
  i980.m_ReferenceResolution = new pc.Vec2( i981[3], i981[4] )
  i980.m_ScreenMatchMode = i981[5]
  i980.m_MatchWidthOrHeight = i981[6]
  i980.m_PhysicalUnit = i981[7]
  i980.m_FallbackScreenDPI = i981[8]
  i980.m_DefaultSpriteDPI = i981[9]
  i980.m_DynamicPixelsPerUnit = i981[10]
  i980.m_PresetInfoIsWorld = !!i981[11]
  return i980
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i983 = data
  i982.m_IgnoreReversedGraphics = !!i983[0]
  i982.m_BlockingObjects = i983[1]
  i982.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i983[2] )
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i985 = data
  i984.cullTransparentMesh = !!i985[0]
  return i984
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i986 = root || request.c( 'UnityEngine.UI.Image' )
  var i987 = data
  request.r(i987[0], i987[1], 0, i986, 'm_Sprite')
  i986.m_Type = i987[2]
  i986.m_PreserveAspect = !!i987[3]
  i986.m_FillCenter = !!i987[4]
  i986.m_FillMethod = i987[5]
  i986.m_FillAmount = i987[6]
  i986.m_FillClockwise = !!i987[7]
  i986.m_FillOrigin = i987[8]
  i986.m_UseSpriteMesh = !!i987[9]
  i986.m_PixelsPerUnitMultiplier = i987[10]
  request.r(i987[11], i987[12], 0, i986, 'm_Material')
  i986.m_Maskable = !!i987[13]
  i986.m_Color = new pc.Color(i987[14], i987[15], i987[16], i987[17])
  i986.m_RaycastTarget = !!i987[18]
  i986.m_RaycastPadding = new pc.Vec4( i987[19], i987[20], i987[21], i987[22] )
  return i986
}

Deserializers["Hole"] = function (request, data, root) {
  var i988 = root || request.c( 'Hole' )
  var i989 = data
  i988.colorType = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'pointToDropCoin')
  i988.isHoleActive = !!i989[3]
  i988.canClick = !!i989[4]
  request.r(i989[5], i989[6], 0, i988, 'audioSource')
  request.r(i989[7], i989[8], 0, i988, 'skinnedMeshRenderer')
  var i991 = i989[9]
  var i990 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i991.length; i += 2) {
  request.r(i991[i + 0], i991[i + 1], 1, i990, '')
  }
  i988.tilesInHole = i990
  var i993 = i989[10]
  var i992 = new (System.Collections.Generic.List$1(Bridge.ns('Tile')))
  for(var i = 0; i < i993.length; i += 2) {
  request.r(i993[i + 0], i993[i + 1], 1, i992, '')
  }
  i988.targetTiles = i992
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i995 = data
  i994.enabled = !!i995[0]
  request.r(i995[1], i995[2], 0, i994, 'sharedMaterial')
  var i997 = i995[3]
  var i996 = []
  for(var i = 0; i < i997.length; i += 2) {
  request.r(i997[i + 0], i997[i + 1], 2, i996, '')
  }
  i994.sharedMaterials = i996
  i994.receiveShadows = !!i995[4]
  i994.shadowCastingMode = i995[5]
  i994.sortingLayerID = i995[6]
  i994.sortingOrder = i995[7]
  i994.lightmapIndex = i995[8]
  i994.lightmapSceneIndex = i995[9]
  i994.lightmapScaleOffset = new pc.Vec4( i995[10], i995[11], i995[12], i995[13] )
  i994.lightProbeUsage = i995[14]
  i994.reflectionProbeUsage = i995[15]
  request.r(i995[16], i995[17], 0, i994, 'sharedMesh')
  var i999 = i995[18]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i994.bones = i998
  i994.updateWhenOffscreen = !!i995[19]
  i994.localBounds = i995[20]
  request.r(i995[21], i995[22], 0, i994, 'rootBone')
  var i1001 = i995[23]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1001[i + 0]) );
  }
  i994.blendShapesWeights = i1000
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1005 = data
  i1004.weight = i1005[0]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1007 = data
  i1006.enabled = !!i1007[0]
  i1006.aspect = i1007[1]
  i1006.orthographic = !!i1007[2]
  i1006.orthographicSize = i1007[3]
  i1006.backgroundColor = new pc.Color(i1007[4], i1007[5], i1007[6], i1007[7])
  i1006.nearClipPlane = i1007[8]
  i1006.farClipPlane = i1007[9]
  i1006.fieldOfView = i1007[10]
  i1006.depth = i1007[11]
  i1006.clearFlags = i1007[12]
  i1006.cullingMask = i1007[13]
  i1006.rect = i1007[14]
  request.r(i1007[15], i1007[16], 0, i1006, 'targetTexture')
  i1006.usePhysicalProperties = !!i1007[17]
  i1006.focalLength = i1007[18]
  i1006.sensorSize = new pc.Vec2( i1007[19], i1007[20] )
  i1006.lensShift = new pc.Vec2( i1007[21], i1007[22] )
  i1006.gateFit = i1007[23]
  i1006.commandBufferCount = i1007[24]
  i1006.cameraType = i1007[25]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1009 = data
  i1008.enabled = !!i1009[0]
  i1008.type = i1009[1]
  i1008.color = new pc.Color(i1009[2], i1009[3], i1009[4], i1009[5])
  i1008.cullingMask = i1009[6]
  i1008.intensity = i1009[7]
  i1008.range = i1009[8]
  i1008.spotAngle = i1009[9]
  i1008.shadows = i1009[10]
  i1008.shadowNormalBias = i1009[11]
  i1008.shadowBias = i1009[12]
  i1008.shadowStrength = i1009[13]
  i1008.shadowResolution = i1009[14]
  i1008.lightmapBakeType = i1009[15]
  i1008.renderMode = i1009[16]
  request.r(i1009[17], i1009[18], 0, i1008, 'cookie')
  i1008.cookieSize = i1009[19]
  return i1008
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1011 = data
  request.r(i1011[0], i1011[1], 0, i1010, 'm_FirstSelected')
  i1010.m_sendNavigationEvents = !!i1011[2]
  i1010.m_DragThreshold = i1011[3]
  return i1010
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1013 = data
  i1012.m_HorizontalAxis = i1013[0]
  i1012.m_VerticalAxis = i1013[1]
  i1012.m_SubmitButton = i1013[2]
  i1012.m_CancelButton = i1013[3]
  i1012.m_InputActionsPerSecond = i1013[4]
  i1012.m_RepeatDelay = i1013[5]
  i1012.m_ForceModuleActive = !!i1013[6]
  i1012.m_SendPointerHoverToParent = !!i1013[7]
  return i1012
}

Deserializers["GamePlay"] = function (request, data, root) {
  var i1014 = root || request.c( 'GamePlay' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('Hole')))
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 1, i1016, '')
  }
  i1014.holes = i1016
  var i1019 = i1015[1]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('PigRow')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1014.pigRows = i1018
  var i1021 = i1015[2]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1014.pigQs = i1020
  var i1023 = i1015[3]
  var i1022 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 1, i1022, '')
  }
  i1014.pigQNexts = i1022
  return i1014
}

Deserializers["TilePathfinder"] = function (request, data, root) {
  var i1030 = root || request.c( 'TilePathfinder' )
  var i1031 = data
  return i1030
}

Deserializers["CoinManager"] = function (request, data, root) {
  var i1032 = root || request.c( 'CoinManager' )
  var i1033 = data
  return i1032
}

Deserializers["Design"] = function (request, data, root) {
  var i1034 = root || request.c( 'Design' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'coinPrefab')
  request.r(i1035[2], i1035[3], 0, i1034, 'materialsSo')
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1037 = data
  i1036.m_Alpha = i1037[0]
  i1036.m_Interactable = !!i1037[1]
  i1036.m_BlocksRaycasts = !!i1037[2]
  i1036.m_IgnoreParentGroups = !!i1037[3]
  i1036.enabled = !!i1037[4]
  return i1036
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1039 = data
  i1038.m_hasFontAssetChanged = !!i1039[0]
  request.r(i1039[1], i1039[2], 0, i1038, 'm_baseMaterial')
  i1038.m_maskOffset = new pc.Vec4( i1039[3], i1039[4], i1039[5], i1039[6] )
  i1038.m_text = i1039[7]
  i1038.m_isRightToLeft = !!i1039[8]
  request.r(i1039[9], i1039[10], 0, i1038, 'm_fontAsset')
  request.r(i1039[11], i1039[12], 0, i1038, 'm_sharedMaterial')
  var i1041 = i1039[13]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 2, i1040, '')
  }
  i1038.m_fontSharedMaterials = i1040
  request.r(i1039[14], i1039[15], 0, i1038, 'm_fontMaterial')
  var i1043 = i1039[16]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 2) {
  request.r(i1043[i + 0], i1043[i + 1], 2, i1042, '')
  }
  i1038.m_fontMaterials = i1042
  i1038.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1039[17], i1039[18], i1039[19], i1039[20])
  i1038.m_fontColor = new pc.Color(i1039[21], i1039[22], i1039[23], i1039[24])
  i1038.m_enableVertexGradient = !!i1039[25]
  i1038.m_colorMode = i1039[26]
  i1038.m_fontColorGradient = request.d('TMPro.VertexGradient', i1039[27], i1038.m_fontColorGradient)
  request.r(i1039[28], i1039[29], 0, i1038, 'm_fontColorGradientPreset')
  request.r(i1039[30], i1039[31], 0, i1038, 'm_spriteAsset')
  i1038.m_tintAllSprites = !!i1039[32]
  request.r(i1039[33], i1039[34], 0, i1038, 'm_StyleSheet')
  i1038.m_TextStyleHashCode = i1039[35]
  i1038.m_overrideHtmlColors = !!i1039[36]
  i1038.m_faceColor = UnityEngine.Color32.ConstructColor(i1039[37], i1039[38], i1039[39], i1039[40])
  i1038.m_fontSize = i1039[41]
  i1038.m_fontSizeBase = i1039[42]
  i1038.m_fontWeight = i1039[43]
  i1038.m_enableAutoSizing = !!i1039[44]
  i1038.m_fontSizeMin = i1039[45]
  i1038.m_fontSizeMax = i1039[46]
  i1038.m_fontStyle = i1039[47]
  i1038.m_HorizontalAlignment = i1039[48]
  i1038.m_VerticalAlignment = i1039[49]
  i1038.m_textAlignment = i1039[50]
  i1038.m_characterSpacing = i1039[51]
  i1038.m_wordSpacing = i1039[52]
  i1038.m_lineSpacing = i1039[53]
  i1038.m_lineSpacingMax = i1039[54]
  i1038.m_paragraphSpacing = i1039[55]
  i1038.m_charWidthMaxAdj = i1039[56]
  i1038.m_enableWordWrapping = !!i1039[57]
  i1038.m_wordWrappingRatios = i1039[58]
  i1038.m_overflowMode = i1039[59]
  request.r(i1039[60], i1039[61], 0, i1038, 'm_linkedTextComponent')
  request.r(i1039[62], i1039[63], 0, i1038, 'parentLinkedComponent')
  i1038.m_enableKerning = !!i1039[64]
  i1038.m_enableExtraPadding = !!i1039[65]
  i1038.checkPaddingRequired = !!i1039[66]
  i1038.m_isRichText = !!i1039[67]
  i1038.m_parseCtrlCharacters = !!i1039[68]
  i1038.m_isOrthographic = !!i1039[69]
  i1038.m_isCullingEnabled = !!i1039[70]
  i1038.m_horizontalMapping = i1039[71]
  i1038.m_verticalMapping = i1039[72]
  i1038.m_uvLineOffset = i1039[73]
  i1038.m_geometrySortingOrder = i1039[74]
  i1038.m_IsTextObjectScaleStatic = !!i1039[75]
  i1038.m_VertexBufferAutoSizeReduction = !!i1039[76]
  i1038.m_useMaxVisibleDescender = !!i1039[77]
  i1038.m_pageToDisplay = i1039[78]
  i1038.m_margin = new pc.Vec4( i1039[79], i1039[80], i1039[81], i1039[82] )
  i1038.m_isUsingLegacyAnimationComponent = !!i1039[83]
  i1038.m_isVolumetricText = !!i1039[84]
  request.r(i1039[85], i1039[86], 0, i1038, 'm_Material')
  i1038.m_Maskable = !!i1039[87]
  i1038.m_Color = new pc.Color(i1039[88], i1039[89], i1039[90], i1039[91])
  i1038.m_RaycastTarget = !!i1039[92]
  i1038.m_RaycastPadding = new pc.Vec4( i1039[93], i1039[94], i1039[95], i1039[96] )
  return i1038
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.VertexGradient' )
  var i1045 = data
  i1044.topLeft = new pc.Color(i1045[0], i1045[1], i1045[2], i1045[3])
  i1044.topRight = new pc.Color(i1045[4], i1045[5], i1045[6], i1045[7])
  i1044.bottomLeft = new pc.Color(i1045[8], i1045[9], i1045[10], i1045[11])
  i1044.bottomRight = new pc.Color(i1045[12], i1045[13], i1045[14], i1045[15])
  return i1044
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1046 = root || request.c( 'UnityEngine.UI.Button' )
  var i1047 = data
  i1046.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1047[0], i1046.m_OnClick)
  i1046.m_Navigation = request.d('UnityEngine.UI.Navigation', i1047[1], i1046.m_Navigation)
  i1046.m_Transition = i1047[2]
  i1046.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1047[3], i1046.m_Colors)
  i1046.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1047[4], i1046.m_SpriteState)
  i1046.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1047[5], i1046.m_AnimationTriggers)
  i1046.m_Interactable = !!i1047[6]
  request.r(i1047[7], i1047[8], 0, i1046, 'm_TargetGraphic')
  return i1046
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1048 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1049 = data
  i1048.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1049[0], i1048.m_PersistentCalls)
  return i1048
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1050 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('UnityEngine.Events.PersistentCall', i1053[i + 0]));
  }
  i1050.m_Calls = i1052
  return i1050
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1056 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1057 = data
  request.r(i1057[0], i1057[1], 0, i1056, 'm_Target')
  i1056.m_TargetAssemblyTypeName = i1057[2]
  i1056.m_MethodName = i1057[3]
  i1056.m_Mode = i1057[4]
  i1056.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1057[5], i1056.m_Arguments)
  i1056.m_CallState = i1057[6]
  return i1056
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1058 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1059 = data
  i1058.m_Mode = i1059[0]
  i1058.m_WrapAround = !!i1059[1]
  request.r(i1059[2], i1059[3], 0, i1058, 'm_SelectOnUp')
  request.r(i1059[4], i1059[5], 0, i1058, 'm_SelectOnDown')
  request.r(i1059[6], i1059[7], 0, i1058, 'm_SelectOnLeft')
  request.r(i1059[8], i1059[9], 0, i1058, 'm_SelectOnRight')
  return i1058
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1060 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1061 = data
  i1060.m_NormalColor = new pc.Color(i1061[0], i1061[1], i1061[2], i1061[3])
  i1060.m_HighlightedColor = new pc.Color(i1061[4], i1061[5], i1061[6], i1061[7])
  i1060.m_PressedColor = new pc.Color(i1061[8], i1061[9], i1061[10], i1061[11])
  i1060.m_SelectedColor = new pc.Color(i1061[12], i1061[13], i1061[14], i1061[15])
  i1060.m_DisabledColor = new pc.Color(i1061[16], i1061[17], i1061[18], i1061[19])
  i1060.m_ColorMultiplier = i1061[20]
  i1060.m_FadeDuration = i1061[21]
  return i1060
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1062 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'm_HighlightedSprite')
  request.r(i1063[2], i1063[3], 0, i1062, 'm_PressedSprite')
  request.r(i1063[4], i1063[5], 0, i1062, 'm_SelectedSprite')
  request.r(i1063[6], i1063[7], 0, i1062, 'm_DisabledSprite')
  return i1062
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1064 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1065 = data
  i1064.m_NormalTrigger = i1065[0]
  i1064.m_HighlightedTrigger = i1065[1]
  i1064.m_PressedTrigger = i1065[2]
  i1064.m_SelectedTrigger = i1065[3]
  i1064.m_DisabledTrigger = i1065[4]
  return i1064
}

Deserializers["Hand"] = function (request, data, root) {
  var i1066 = root || request.c( 'Hand' )
  var i1067 = data
  return i1066
}

Deserializers["PigRow"] = function (request, data, root) {
  var i1068 = root || request.c( 'PigRow' )
  var i1069 = data
  var i1071 = i1069[0]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('Pig')))
  for(var i = 0; i < i1071.length; i += 2) {
  request.r(i1071[i + 0], i1071[i + 1], 1, i1070, '')
  }
  i1068.pigs = i1070
  return i1068
}

Deserializers["Pig"] = function (request, data, root) {
  var i1072 = root || request.c( 'Pig' )
  var i1073 = data
  i1072.colorType = i1073[0]
  i1072.maxCoinCount = i1073[1]
  request.r(i1073[2], i1073[3], 0, i1072, 'scoreText')
  request.r(i1073[4], i1073[5], 0, i1072, 'positionToDropCoin')
  request.r(i1073[6], i1073[7], 0, i1072, 'endPoint')
  i1072.isDropping = !!i1073[8]
  request.r(i1073[9], i1073[10], 0, i1072, 'coinBag')
  request.r(i1073[11], i1073[12], 0, i1072, 'materialsSo')
  request.r(i1073[13], i1073[14], 0, i1072, 'coinPrefab')
  request.r(i1073[15], i1073[16], 0, i1072, 'confettiPrefab')
  i1072.coinColor = i1073[17]
  request.r(i1073[18], i1073[19], 0, i1072, 'skinnedMeshRenderer')
  request.r(i1073[20], i1073[21], 0, i1072, 'dropParticle')
  return i1072
}

Deserializers["BounceAnimation"] = function (request, data, root) {
  var i1074 = root || request.c( 'BounceAnimation' )
  var i1075 = data
  i1074.bounceDuration = i1075[0]
  i1074.bounceDelay = i1075[1]
  i1074.bounceScale = new pc.Vec3( i1075[2], i1075[3], i1075[4] )
  i1074.playOnStart = !!i1075[5]
  i1074.isLooping = !!i1075[6]
  i1074.easeType = i1075[7]
  return i1074
}

Deserializers["CoinBag"] = function (request, data, root) {
  var i1076 = root || request.c( 'CoinBag' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'skinnedMeshRenderer')
  request.r(i1077[2], i1077[3], 0, i1076, 'spawnPoint')
  return i1076
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i1078 = root || request.c( 'TMPro.TextMeshPro' )
  var i1079 = data
  i1078._SortingLayer = i1079[0]
  i1078._SortingLayerID = i1079[1]
  i1078._SortingOrder = i1079[2]
  i1078.m_hasFontAssetChanged = !!i1079[3]
  request.r(i1079[4], i1079[5], 0, i1078, 'm_renderer')
  i1078.m_maskType = i1079[6]
  i1078.m_text = i1079[7]
  i1078.m_isRightToLeft = !!i1079[8]
  request.r(i1079[9], i1079[10], 0, i1078, 'm_fontAsset')
  request.r(i1079[11], i1079[12], 0, i1078, 'm_sharedMaterial')
  var i1081 = i1079[13]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.m_fontSharedMaterials = i1080
  request.r(i1079[14], i1079[15], 0, i1078, 'm_fontMaterial')
  var i1083 = i1079[16]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 2) {
  request.r(i1083[i + 0], i1083[i + 1], 2, i1082, '')
  }
  i1078.m_fontMaterials = i1082
  i1078.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1079[17], i1079[18], i1079[19], i1079[20])
  i1078.m_fontColor = new pc.Color(i1079[21], i1079[22], i1079[23], i1079[24])
  i1078.m_enableVertexGradient = !!i1079[25]
  i1078.m_colorMode = i1079[26]
  i1078.m_fontColorGradient = request.d('TMPro.VertexGradient', i1079[27], i1078.m_fontColorGradient)
  request.r(i1079[28], i1079[29], 0, i1078, 'm_fontColorGradientPreset')
  request.r(i1079[30], i1079[31], 0, i1078, 'm_spriteAsset')
  i1078.m_tintAllSprites = !!i1079[32]
  request.r(i1079[33], i1079[34], 0, i1078, 'm_StyleSheet')
  i1078.m_TextStyleHashCode = i1079[35]
  i1078.m_overrideHtmlColors = !!i1079[36]
  i1078.m_faceColor = UnityEngine.Color32.ConstructColor(i1079[37], i1079[38], i1079[39], i1079[40])
  i1078.m_fontSize = i1079[41]
  i1078.m_fontSizeBase = i1079[42]
  i1078.m_fontWeight = i1079[43]
  i1078.m_enableAutoSizing = !!i1079[44]
  i1078.m_fontSizeMin = i1079[45]
  i1078.m_fontSizeMax = i1079[46]
  i1078.m_fontStyle = i1079[47]
  i1078.m_HorizontalAlignment = i1079[48]
  i1078.m_VerticalAlignment = i1079[49]
  i1078.m_textAlignment = i1079[50]
  i1078.m_characterSpacing = i1079[51]
  i1078.m_wordSpacing = i1079[52]
  i1078.m_lineSpacing = i1079[53]
  i1078.m_lineSpacingMax = i1079[54]
  i1078.m_paragraphSpacing = i1079[55]
  i1078.m_charWidthMaxAdj = i1079[56]
  i1078.m_enableWordWrapping = !!i1079[57]
  i1078.m_wordWrappingRatios = i1079[58]
  i1078.m_overflowMode = i1079[59]
  request.r(i1079[60], i1079[61], 0, i1078, 'm_linkedTextComponent')
  request.r(i1079[62], i1079[63], 0, i1078, 'parentLinkedComponent')
  i1078.m_enableKerning = !!i1079[64]
  i1078.m_enableExtraPadding = !!i1079[65]
  i1078.checkPaddingRequired = !!i1079[66]
  i1078.m_isRichText = !!i1079[67]
  i1078.m_parseCtrlCharacters = !!i1079[68]
  i1078.m_isOrthographic = !!i1079[69]
  i1078.m_isCullingEnabled = !!i1079[70]
  i1078.m_horizontalMapping = i1079[71]
  i1078.m_verticalMapping = i1079[72]
  i1078.m_uvLineOffset = i1079[73]
  i1078.m_geometrySortingOrder = i1079[74]
  i1078.m_IsTextObjectScaleStatic = !!i1079[75]
  i1078.m_VertexBufferAutoSizeReduction = !!i1079[76]
  i1078.m_useMaxVisibleDescender = !!i1079[77]
  i1078.m_pageToDisplay = i1079[78]
  i1078.m_margin = new pc.Vec4( i1079[79], i1079[80], i1079[81], i1079[82] )
  i1078.m_isUsingLegacyAnimationComponent = !!i1079[83]
  i1078.m_isVolumetricText = !!i1079[84]
  request.r(i1079[85], i1079[86], 0, i1078, 'm_Material')
  i1078.m_Maskable = !!i1079[87]
  i1078.m_Color = new pc.Color(i1079[88], i1079[89], i1079[90], i1079[91])
  i1078.m_RaycastTarget = !!i1079[92]
  i1078.m_RaycastPadding = new pc.Vec4( i1079[93], i1079[94], i1079[95], i1079[96] )
  return i1078
}

Deserializers["PlayableManager"] = function (request, data, root) {
  var i1084 = root || request.c( 'PlayableManager' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'exitButton')
  request.r(i1085[2], i1085[3], 0, i1084, 'closeButton')
  request.r(i1085[4], i1085[5], 0, i1084, 'exitButton2')
  request.r(i1085[6], i1085[7], 0, i1084, 'winGamePanel')
  request.r(i1085[8], i1085[9], 0, i1084, 'hand')
  return i1084
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1086 = root || request.c( 'AudioManager' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'audioSource')
  request.r(i1087[2], i1087[3], 0, i1086, 'coinAndMoneyBagClip')
  request.r(i1087[4], i1087[5], 0, i1086, 'attendClip')
  request.r(i1087[6], i1087[7], 0, i1086, 'winClip')
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1089 = data
  i1088.ambientIntensity = i1089[0]
  i1088.reflectionIntensity = i1089[1]
  i1088.ambientMode = i1089[2]
  i1088.ambientLight = new pc.Color(i1089[3], i1089[4], i1089[5], i1089[6])
  i1088.ambientSkyColor = new pc.Color(i1089[7], i1089[8], i1089[9], i1089[10])
  i1088.ambientGroundColor = new pc.Color(i1089[11], i1089[12], i1089[13], i1089[14])
  i1088.ambientEquatorColor = new pc.Color(i1089[15], i1089[16], i1089[17], i1089[18])
  i1088.fogColor = new pc.Color(i1089[19], i1089[20], i1089[21], i1089[22])
  i1088.fogEndDistance = i1089[23]
  i1088.fogStartDistance = i1089[24]
  i1088.fogDensity = i1089[25]
  i1088.fog = !!i1089[26]
  request.r(i1089[27], i1089[28], 0, i1088, 'skybox')
  i1088.fogMode = i1089[29]
  var i1091 = i1089[30]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1091[i + 0]) );
  }
  i1088.lightmaps = i1090
  i1088.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1089[31], i1088.lightProbes)
  i1088.lightmapsMode = i1089[32]
  i1088.mixedBakeMode = i1089[33]
  i1088.environmentLightingMode = i1089[34]
  i1088.ambientProbe = new pc.SphericalHarmonicsL2(i1089[35])
  i1088.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1089[36])
  i1088.useReferenceAmbientProbe = !!i1089[37]
  request.r(i1089[38], i1089[39], 0, i1088, 'customReflection')
  request.r(i1089[40], i1089[41], 0, i1088, 'defaultReflection')
  i1088.defaultReflectionMode = i1089[42]
  i1088.defaultReflectionResolution = i1089[43]
  i1088.sunLightObjectId = i1089[44]
  i1088.pixelLightCount = i1089[45]
  i1088.defaultReflectionHDR = !!i1089[46]
  i1088.hasLightDataAsset = !!i1089[47]
  i1088.hasManualGenerate = !!i1089[48]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1095 = data
  request.r(i1095[0], i1095[1], 0, i1094, 'lightmapColor')
  request.r(i1095[2], i1095[3], 0, i1094, 'lightmapDirection')
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1096 = root || new UnityEngine.LightProbes()
  var i1097 = data
  return i1096
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1104 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'panelPrefab')
  var i1107 = i1105[2]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1107[i + 0]));
  }
  i1104.prefabs = i1106
  return i1104
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1110 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1111 = data
  i1110.type = i1111[0]
  request.r(i1111[1], i1111[2], 0, i1110, 'prefab')
  return i1110
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1112 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1113 = data
  i1112.m_Spacing = i1113[0]
  i1112.m_ChildForceExpandWidth = !!i1113[1]
  i1112.m_ChildForceExpandHeight = !!i1113[2]
  i1112.m_ChildControlWidth = !!i1113[3]
  i1112.m_ChildControlHeight = !!i1113[4]
  i1112.m_ChildScaleWidth = !!i1113[5]
  i1112.m_ChildScaleHeight = !!i1113[6]
  i1112.m_ReverseArrangement = !!i1113[7]
  i1112.m_Padding = UnityEngine.RectOffset.FromPaddings(i1113[8], i1113[9], i1113[10], i1113[11])
  i1112.m_ChildAlignment = i1113[12]
  return i1112
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1114 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1115 = data
  i1114.m_HorizontalFit = i1115[0]
  i1114.m_VerticalFit = i1115[1]
  return i1114
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'contentHolder')
  return i1116
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1118 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'nameLabel')
  request.r(i1119[2], i1119[3], 0, i1118, 'scrollRect')
  request.r(i1119[4], i1119[5], 0, i1118, 'viewport')
  request.r(i1119[6], i1119[7], 0, i1118, 'Canvas')
  return i1118
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1120 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1121 = data
  i1120.m_IgnoreLayout = !!i1121[0]
  i1120.m_MinWidth = i1121[1]
  i1120.m_MinHeight = i1121[2]
  i1120.m_PreferredWidth = i1121[3]
  i1120.m_PreferredHeight = i1121[4]
  i1120.m_FlexibleWidth = i1121[5]
  i1120.m_FlexibleHeight = i1121[6]
  i1120.m_LayoutPriority = i1121[7]
  return i1120
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1122 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'm_ObjectArgument')
  i1122.m_ObjectArgumentAssemblyTypeName = i1123[2]
  i1122.m_IntArgument = i1123[3]
  i1122.m_FloatArgument = i1123[4]
  i1122.m_StringArgument = i1123[5]
  i1122.m_BoolArgument = !!i1123[6]
  return i1122
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.UI.Text' )
  var i1125 = data
  i1124.m_FontData = request.d('UnityEngine.UI.FontData', i1125[0], i1124.m_FontData)
  i1124.m_Text = i1125[1]
  request.r(i1125[2], i1125[3], 0, i1124, 'm_Material')
  i1124.m_Maskable = !!i1125[4]
  i1124.m_Color = new pc.Color(i1125[5], i1125[6], i1125[7], i1125[8])
  i1124.m_RaycastTarget = !!i1125[9]
  i1124.m_RaycastPadding = new pc.Vec4( i1125[10], i1125[11], i1125[12], i1125[13] )
  return i1124
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1126 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'm_Font')
  i1126.m_FontSize = i1127[2]
  i1126.m_FontStyle = i1127[3]
  i1126.m_BestFit = !!i1127[4]
  i1126.m_MinSize = i1127[5]
  i1126.m_MaxSize = i1127[6]
  i1126.m_Alignment = i1127[7]
  i1126.m_AlignByGeometry = !!i1127[8]
  i1126.m_RichText = !!i1127[9]
  i1126.m_HorizontalOverflow = i1127[10]
  i1126.m_VerticalOverflow = i1127[11]
  i1126.m_LineSpacing = i1127[12]
  return i1126
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'm_Content')
  i1128.m_Horizontal = !!i1129[2]
  i1128.m_Vertical = !!i1129[3]
  i1128.m_MovementType = i1129[4]
  i1128.m_Elasticity = i1129[5]
  i1128.m_Inertia = !!i1129[6]
  i1128.m_DecelerationRate = i1129[7]
  i1128.m_ScrollSensitivity = i1129[8]
  request.r(i1129[9], i1129[10], 0, i1128, 'm_Viewport')
  request.r(i1129[11], i1129[12], 0, i1128, 'm_HorizontalScrollbar')
  request.r(i1129[13], i1129[14], 0, i1128, 'm_VerticalScrollbar')
  i1128.m_HorizontalScrollbarVisibility = i1129[15]
  i1128.m_VerticalScrollbarVisibility = i1129[16]
  i1128.m_HorizontalScrollbarSpacing = i1129[17]
  i1128.m_VerticalScrollbarSpacing = i1129[18]
  i1128.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1129[19], i1128.m_OnValueChanged)
  return i1128
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1131 = data
  i1130.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1131[0], i1130.m_PersistentCalls)
  return i1130
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1133 = data
  i1132.m_ShowMaskGraphic = !!i1133[0]
  return i1132
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'm_HandleRect')
  i1134.m_Direction = i1135[2]
  i1134.m_Value = i1135[3]
  i1134.m_Size = i1135[4]
  i1134.m_NumberOfSteps = i1135[5]
  i1134.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1135[6], i1134.m_OnValueChanged)
  i1134.m_Navigation = request.d('UnityEngine.UI.Navigation', i1135[7], i1134.m_Navigation)
  i1134.m_Transition = i1135[8]
  i1134.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1135[9], i1134.m_Colors)
  i1134.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1135[10], i1134.m_SpriteState)
  i1134.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1135[11], i1134.m_AnimationTriggers)
  i1134.m_Interactable = !!i1135[12]
  request.r(i1135[13], i1135[14], 0, i1134, 'm_TargetGraphic')
  return i1134
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1137 = data
  i1136.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1137[0], i1136.m_PersistentCalls)
  return i1136
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1138 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1141[i + 0]));
  }
  i1138.m_Delegates = i1140
  return i1138
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1145 = data
  i1144.eventID = i1145[0]
  i1144.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1145[1], i1144.callback)
  return i1144
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1147 = data
  i1146.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1147[0], i1146.m_PersistentCalls)
  return i1146
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'nameLabel')
  request.r(i1149[2], i1149[3], 0, i1148, 'valueLabel')
  i1148.colorDefault = new pc.Color(i1149[4], i1149[5], i1149[6], i1149[7])
  i1148.colorSelected = new pc.Color(i1149[8], i1149[9], i1149[10], i1149[11])
  return i1148
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1151 = data
  request.r(i1151[0], i1151[1], 0, i1150, 'nameLabel')
  request.r(i1151[2], i1151[3], 0, i1150, 'valueToggle')
  request.r(i1151[4], i1151[5], 0, i1150, 'checkmarkImage')
  i1150.colorDefault = new pc.Color(i1151[6], i1151[7], i1151[8], i1151[9])
  i1150.colorSelected = new pc.Color(i1151[10], i1151[11], i1151[12], i1151[13])
  return i1150
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1153 = data
  i1152.toggleTransition = i1153[0]
  request.r(i1153[1], i1153[2], 0, i1152, 'graphic')
  i1152.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1153[3], i1152.onValueChanged)
  request.r(i1153[4], i1153[5], 0, i1152, 'm_Group')
  i1152.m_IsOn = !!i1153[6]
  i1152.m_Navigation = request.d('UnityEngine.UI.Navigation', i1153[7], i1152.m_Navigation)
  i1152.m_Transition = i1153[8]
  i1152.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1153[9], i1152.m_Colors)
  i1152.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1153[10], i1152.m_SpriteState)
  i1152.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1153[11], i1152.m_AnimationTriggers)
  i1152.m_Interactable = !!i1153[12]
  request.r(i1153[13], i1153[14], 0, i1152, 'm_TargetGraphic')
  return i1152
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1155 = data
  i1154.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1155[0], i1154.m_PersistentCalls)
  return i1154
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1157 = data
  request.r(i1157[0], i1157[1], 0, i1156, 'nameLabel')
  request.r(i1157[2], i1157[3], 0, i1156, 'valueLabel')
  i1156.colorDefault = new pc.Color(i1157[4], i1157[5], i1157[6], i1157[7])
  i1156.colorSelected = new pc.Color(i1157[8], i1157[9], i1157[10], i1157[11])
  return i1156
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1159 = data
  request.r(i1159[0], i1159[1], 0, i1158, 'nameLabel')
  request.r(i1159[2], i1159[3], 0, i1158, 'valueLabel')
  i1158.colorDefault = new pc.Color(i1159[4], i1159[5], i1159[6], i1159[7])
  i1158.colorSelected = new pc.Color(i1159[8], i1159[9], i1159[10], i1159[11])
  return i1158
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1161 = data
  request.r(i1161[0], i1161[1], 0, i1160, 'nameLabel')
  request.r(i1161[2], i1161[3], 0, i1160, 'valueLabel')
  i1160.colorDefault = new pc.Color(i1161[4], i1161[5], i1161[6], i1161[7])
  i1160.colorSelected = new pc.Color(i1161[8], i1161[9], i1161[10], i1161[11])
  return i1160
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1162 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1163 = data
  request.r(i1163[0], i1163[1], 0, i1162, 'nextButtonText')
  request.r(i1163[2], i1163[3], 0, i1162, 'previousButtonText')
  request.r(i1163[4], i1163[5], 0, i1162, 'nameLabel')
  request.r(i1163[6], i1163[7], 0, i1162, 'valueLabel')
  i1162.colorDefault = new pc.Color(i1163[8], i1163[9], i1163[10], i1163[11])
  i1162.colorSelected = new pc.Color(i1163[12], i1163[13], i1163[14], i1163[15])
  return i1162
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'nameLabel')
  i1164.colorDefault = new pc.Color(i1165[2], i1165[3], i1165[4], i1165[5])
  i1164.colorSelected = new pc.Color(i1165[6], i1165[7], i1165[8], i1165[9])
  return i1164
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1167 = data
  request.r(i1167[0], i1167[1], 0, i1166, 'nameLabel')
  request.r(i1167[2], i1167[3], 0, i1166, 'valueToggle')
  i1166.colorDefault = new pc.Color(i1167[4], i1167[5], i1167[6], i1167[7])
  i1166.colorSelected = new pc.Color(i1167[8], i1167[9], i1167[10], i1167[11])
  return i1166
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1169 = data
  i1168.toggleTransition = i1169[0]
  request.r(i1169[1], i1169[2], 0, i1168, 'graphic')
  i1168.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1169[3], i1168.onValueChanged)
  request.r(i1169[4], i1169[5], 0, i1168, 'content')
  request.r(i1169[6], i1169[7], 0, i1168, 'arrowOpened')
  request.r(i1169[8], i1169[9], 0, i1168, 'arrowClosed')
  request.r(i1169[10], i1169[11], 0, i1168, 'm_Group')
  i1168.m_IsOn = !!i1169[12]
  i1168.m_Navigation = request.d('UnityEngine.UI.Navigation', i1169[13], i1168.m_Navigation)
  i1168.m_Transition = i1169[14]
  i1168.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1169[15], i1168.m_Colors)
  i1168.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1169[16], i1168.m_SpriteState)
  i1168.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1169[17], i1168.m_AnimationTriggers)
  i1168.m_Interactable = !!i1169[18]
  request.r(i1169[19], i1169[20], 0, i1168, 'm_TargetGraphic')
  return i1168
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'nameLabel')
  request.r(i1171[2], i1171[3], 0, i1170, 'valueToggle')
  request.r(i1171[4], i1171[5], 0, i1170, 'colorImage')
  request.r(i1171[6], i1171[7], 0, i1170, 'fieldR')
  request.r(i1171[8], i1171[9], 0, i1170, 'fieldG')
  request.r(i1171[10], i1171[11], 0, i1170, 'fieldB')
  request.r(i1171[12], i1171[13], 0, i1170, 'fieldA')
  i1170.colorDefault = new pc.Color(i1171[14], i1171[15], i1171[16], i1171[17])
  i1170.colorSelected = new pc.Color(i1171[18], i1171[19], i1171[20], i1171[21])
  return i1170
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1173 = data
  request.r(i1173[0], i1173[1], 0, i1172, 'nameLabel')
  request.r(i1173[2], i1173[3], 0, i1172, 'valueLabel')
  i1172.colorDefault = new pc.Color(i1173[4], i1173[5], i1173[6], i1173[7])
  i1172.colorSelected = new pc.Color(i1173[8], i1173[9], i1173[10], i1173[11])
  return i1172
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'nameLabel')
  request.r(i1175[2], i1175[3], 0, i1174, 'valueToggle')
  request.r(i1175[4], i1175[5], 0, i1174, 'fieldX')
  request.r(i1175[6], i1175[7], 0, i1174, 'fieldY')
  i1174.colorDefault = new pc.Color(i1175[8], i1175[9], i1175[10], i1175[11])
  i1174.colorSelected = new pc.Color(i1175[12], i1175[13], i1175[14], i1175[15])
  return i1174
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'nameLabel')
  request.r(i1177[2], i1177[3], 0, i1176, 'valueToggle')
  request.r(i1177[4], i1177[5], 0, i1176, 'fieldX')
  request.r(i1177[6], i1177[7], 0, i1176, 'fieldY')
  request.r(i1177[8], i1177[9], 0, i1176, 'fieldZ')
  i1176.colorDefault = new pc.Color(i1177[10], i1177[11], i1177[12], i1177[13])
  i1176.colorSelected = new pc.Color(i1177[14], i1177[15], i1177[16], i1177[17])
  return i1176
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'nameLabel')
  request.r(i1179[2], i1179[3], 0, i1178, 'valueToggle')
  request.r(i1179[4], i1179[5], 0, i1178, 'fieldX')
  request.r(i1179[6], i1179[7], 0, i1178, 'fieldY')
  request.r(i1179[8], i1179[9], 0, i1178, 'fieldZ')
  request.r(i1179[10], i1179[11], 0, i1178, 'fieldW')
  i1178.colorDefault = new pc.Color(i1179[12], i1179[13], i1179[14], i1179[15])
  i1178.colorSelected = new pc.Color(i1179[16], i1179[17], i1179[18], i1179[19])
  return i1178
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1181 = data
  i1180.colorDefault = new pc.Color(i1181[0], i1181[1], i1181[2], i1181[3])
  i1180.colorSelected = new pc.Color(i1181[4], i1181[5], i1181[6], i1181[7])
  return i1180
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1182 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1183 = data
  i1182.m_Spacing = i1183[0]
  i1182.m_ChildForceExpandWidth = !!i1183[1]
  i1182.m_ChildForceExpandHeight = !!i1183[2]
  i1182.m_ChildControlWidth = !!i1183[3]
  i1182.m_ChildControlHeight = !!i1183[4]
  i1182.m_ChildScaleWidth = !!i1183[5]
  i1182.m_ChildScaleHeight = !!i1183[6]
  i1182.m_ReverseArrangement = !!i1183[7]
  i1182.m_Padding = UnityEngine.RectOffset.FromPaddings(i1183[8], i1183[9], i1183[10], i1183[11])
  i1182.m_ChildAlignment = i1183[12]
  return i1182
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1185 = data
  i1184.colorDefault = new pc.Color(i1185[0], i1185[1], i1185[2], i1185[3])
  i1184.colorSelected = new pc.Color(i1185[4], i1185[5], i1185[6], i1185[7])
  return i1184
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1187 = data
  request.r(i1187[0], i1187[1], 0, i1186, 'nameLabel')
  request.r(i1187[2], i1187[3], 0, i1186, 'header')
  i1186.colorDefault = new pc.Color(i1187[4], i1187[5], i1187[6], i1187[7])
  i1186.colorSelected = new pc.Color(i1187[8], i1187[9], i1187[10], i1187[11])
  return i1186
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1188 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'nameLabel')
  request.r(i1189[2], i1189[3], 0, i1188, 'valueToggle')
  var i1191 = i1189[4]
  var i1190 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1191.length; i += 2) {
  request.r(i1191[i + 0], i1191[i + 1], 1, i1190, '')
  }
  i1188.toggles = i1190
  i1188.colorDefault = new pc.Color(i1189[5], i1189[6], i1189[7], i1189[8])
  i1188.colorSelected = new pc.Color(i1189[9], i1189[10], i1189[11], i1189[12])
  return i1188
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'nameLabel')
  request.r(i1195[2], i1195[3], 0, i1194, 'valueToggle')
  request.r(i1195[4], i1195[5], 0, i1194, 'checkmarkImage')
  i1194.colorDefault = new pc.Color(i1195[6], i1195[7], i1195[8], i1195[9])
  i1194.colorSelected = new pc.Color(i1195[10], i1195[11], i1195[12], i1195[13])
  return i1194
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1196 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1197 = data
  request.r(i1197[0], i1197[1], 0, i1196, 'nameLabel')
  request.r(i1197[2], i1197[3], 0, i1196, 'valueToggle')
  request.r(i1197[4], i1197[5], 0, i1196, 'checkmarkImage')
  i1196.colorDefault = new pc.Color(i1197[6], i1197[7], i1197[8], i1197[9])
  i1196.colorSelected = new pc.Color(i1197[10], i1197[11], i1197[12], i1197[13])
  return i1196
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1198 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'nextButtonText')
  request.r(i1199[2], i1199[3], 0, i1198, 'previousButtonText')
  request.r(i1199[4], i1199[5], 0, i1198, 'nameLabel')
  request.r(i1199[6], i1199[7], 0, i1198, 'valueLabel')
  i1198.colorDefault = new pc.Color(i1199[8], i1199[9], i1199[10], i1199[11])
  i1198.colorSelected = new pc.Color(i1199[12], i1199[13], i1199[14], i1199[15])
  return i1198
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1200 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'nameLabel')
  request.r(i1201[2], i1201[3], 0, i1200, 'valueToggle')
  i1200.colorDefault = new pc.Color(i1201[4], i1201[5], i1201[6], i1201[7])
  i1200.colorSelected = new pc.Color(i1201[8], i1201[9], i1201[10], i1201[11])
  return i1200
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1202 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'nameLabel')
  i1202.colorDefault = new pc.Color(i1203[2], i1203[3], i1203[4], i1203[5])
  i1202.colorSelected = new pc.Color(i1203[6], i1203[7], i1203[8], i1203[9])
  return i1202
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'nameLabel')
  request.r(i1205[2], i1205[3], 0, i1204, 'valueLabel')
  request.r(i1205[4], i1205[5], 0, i1204, 'progressBarRect')
  i1204.colorDefault = new pc.Color(i1205[6], i1205[7], i1205[8], i1205[9])
  i1204.colorSelected = new pc.Color(i1205[10], i1205[11], i1205[12], i1205[13])
  return i1204
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1207 = data
  request.r(i1207[0], i1207[1], 0, i1206, 'nameLabel')
  request.r(i1207[2], i1207[3], 0, i1206, 'valueLabel')
  i1206.colorDefault = new pc.Color(i1207[4], i1207[5], i1207[6], i1207[7])
  i1206.colorSelected = new pc.Color(i1207[8], i1207[9], i1207[10], i1207[11])
  return i1206
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1208 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'nameLabel')
  request.r(i1209[2], i1209[3], 0, i1208, 'valueLabel')
  i1208.colorDefault = new pc.Color(i1209[4], i1209[5], i1209[6], i1209[7])
  i1208.colorSelected = new pc.Color(i1209[8], i1209[9], i1209[10], i1209[11])
  return i1208
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1210 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1211 = data
  request.r(i1211[0], i1211[1], 0, i1210, 'nextButtonText')
  request.r(i1211[2], i1211[3], 0, i1210, 'previousButtonText')
  request.r(i1211[4], i1211[5], 0, i1210, 'nameLabel')
  request.r(i1211[6], i1211[7], 0, i1210, 'valueLabel')
  i1210.colorDefault = new pc.Color(i1211[8], i1211[9], i1211[10], i1211[11])
  i1210.colorSelected = new pc.Color(i1211[12], i1211[13], i1211[14], i1211[15])
  return i1210
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1212 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'nextButtonText')
  request.r(i1213[2], i1213[3], 0, i1212, 'previousButtonText')
  request.r(i1213[4], i1213[5], 0, i1212, 'nameLabel')
  request.r(i1213[6], i1213[7], 0, i1212, 'valueLabel')
  i1212.colorDefault = new pc.Color(i1213[8], i1213[9], i1213[10], i1213[11])
  i1212.colorSelected = new pc.Color(i1213[12], i1213[13], i1213[14], i1213[15])
  return i1212
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1214 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1215 = data
  request.r(i1215[0], i1215[1], 0, i1214, 'panel')
  request.r(i1215[2], i1215[3], 0, i1214, 'valuePrefab')
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1217 = data
  var i1219 = i1217[0]
  var i1218 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1219[i + 0]));
  }
  i1216.ShaderCompilationErrors = i1218
  i1216.name = i1217[1]
  i1216.guid = i1217[2]
  var i1221 = i1217[3]
  var i1220 = []
  for(var i = 0; i < i1221.length; i += 1) {
    i1220.push( i1221[i + 0] );
  }
  i1216.shaderDefinedKeywords = i1220
  var i1223 = i1217[4]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1223[i + 0]) );
  }
  i1216.passes = i1222
  var i1225 = i1217[5]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1225[i + 0]) );
  }
  i1216.usePasses = i1224
  var i1227 = i1217[6]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1227[i + 0]) );
  }
  i1216.defaultParameterValues = i1226
  request.r(i1217[7], i1217[8], 0, i1216, 'unityFallbackShader')
  i1216.readDepth = !!i1217[9]
  i1216.isCreatedByShaderGraph = !!i1217[10]
  i1216.compiled = !!i1217[11]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1231 = data
  i1230.shaderName = i1231[0]
  i1230.errorMessage = i1231[1]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1236 = root || new pc.UnityShaderPass()
  var i1237 = data
  i1236.id = i1237[0]
  i1236.subShaderIndex = i1237[1]
  i1236.name = i1237[2]
  i1236.passType = i1237[3]
  i1236.grabPassTextureName = i1237[4]
  i1236.usePass = !!i1237[5]
  i1236.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[6], i1236.zTest)
  i1236.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[7], i1236.zWrite)
  i1236.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[8], i1236.culling)
  i1236.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1237[9], i1236.blending)
  i1236.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1237[10], i1236.alphaBlending)
  i1236.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[11], i1236.colorWriteMask)
  i1236.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[12], i1236.offsetUnits)
  i1236.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[13], i1236.offsetFactor)
  i1236.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[14], i1236.stencilRef)
  i1236.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[15], i1236.stencilReadMask)
  i1236.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1237[16], i1236.stencilWriteMask)
  i1236.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1237[17], i1236.stencilOp)
  i1236.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1237[18], i1236.stencilOpFront)
  i1236.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1237[19], i1236.stencilOpBack)
  var i1239 = i1237[20]
  var i1238 = []
  for(var i = 0; i < i1239.length; i += 1) {
    i1238.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1239[i + 0]) );
  }
  i1236.tags = i1238
  var i1241 = i1237[21]
  var i1240 = []
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.push( i1241[i + 0] );
  }
  i1236.passDefinedKeywords = i1240
  var i1243 = i1237[22]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1243[i + 0]) );
  }
  i1236.passDefinedKeywordGroups = i1242
  var i1245 = i1237[23]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1245[i + 0]) );
  }
  i1236.variants = i1244
  var i1247 = i1237[24]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1247[i + 0]) );
  }
  i1236.excludedVariants = i1246
  i1236.hasDepthReader = !!i1237[25]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1249 = data
  i1248.val = i1249[0]
  i1248.name = i1249[1]
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1251 = data
  i1250.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1251[0], i1250.src)
  i1250.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1251[1], i1250.dst)
  i1250.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1251[2], i1250.op)
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1253 = data
  i1252.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[0], i1252.pass)
  i1252.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[1], i1252.fail)
  i1252.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[2], i1252.zFail)
  i1252.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1253[3], i1252.comp)
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1257 = data
  i1256.name = i1257[0]
  i1256.value = i1257[1]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1260.keywords = i1262
  i1260.hasDiscard = !!i1261[1]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1267 = data
  i1266.passId = i1267[0]
  i1266.subShaderIndex = i1267[1]
  var i1269 = i1267[2]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1266.keywords = i1268
  i1266.vertexProgram = i1267[3]
  i1266.fragmentProgram = i1267[4]
  i1266.exportedForWebGl2 = !!i1267[5]
  i1266.readDepth = !!i1267[6]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1273 = data
  request.r(i1273[0], i1273[1], 0, i1272, 'shader')
  i1272.pass = i1273[2]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1277 = data
  i1276.name = i1277[0]
  i1276.type = i1277[1]
  i1276.value = new pc.Vec4( i1277[2], i1277[3], i1277[4], i1277[5] )
  i1276.textureValue = i1277[6]
  i1276.shaderPropertyFlag = i1277[7]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1279 = data
  i1278.name = i1279[0]
  request.r(i1279[1], i1279[2], 0, i1278, 'texture')
  i1278.aabb = i1279[3]
  i1278.vertices = i1279[4]
  i1278.triangles = i1279[5]
  i1278.textureRect = UnityEngine.Rect.MinMaxRect(i1279[6], i1279[7], i1279[8], i1279[9])
  i1278.packedRect = UnityEngine.Rect.MinMaxRect(i1279[10], i1279[11], i1279[12], i1279[13])
  i1278.border = new pc.Vec4( i1279[14], i1279[15], i1279[16], i1279[17] )
  i1278.transparency = i1279[18]
  i1278.bounds = i1279[19]
  i1278.pixelsPerUnit = i1279[20]
  i1278.textureWidth = i1279[21]
  i1278.textureHeight = i1279[22]
  i1278.nativeSize = new pc.Vec2( i1279[23], i1279[24] )
  i1278.pivot = new pc.Vec2( i1279[25], i1279[26] )
  i1278.textureRectOffset = new pc.Vec2( i1279[27], i1279[28] )
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1281 = data
  i1280.name = i1281[0]
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.wrapMode = i1283[1]
  i1282.isLooping = !!i1283[2]
  i1282.length = i1283[3]
  var i1285 = i1283[4]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1285[i + 0]) );
  }
  i1282.curves = i1284
  var i1287 = i1283[5]
  var i1286 = []
  for(var i = 0; i < i1287.length; i += 1) {
    i1286.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1287[i + 0]) );
  }
  i1282.events = i1286
  i1282.halfPrecision = !!i1283[6]
  i1282._frameRate = i1283[7]
  i1282.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1283[8], i1282.localBounds)
  i1282.hasMuscleCurves = !!i1283[9]
  var i1289 = i1283[10]
  var i1288 = []
  for(var i = 0; i < i1289.length; i += 1) {
    i1288.push( i1289[i + 0] );
  }
  i1282.clipMuscleConstant = i1288
  i1282.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1283[11], i1282.clipBindingConstant)
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1293 = data
  i1292.path = i1293[0]
  i1292.hash = i1293[1]
  i1292.componentType = i1293[2]
  i1292.property = i1293[3]
  i1292.keys = i1293[4]
  var i1295 = i1293[5]
  var i1294 = []
  for(var i = 0; i < i1295.length; i += 1) {
    i1294.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1295[i + 0]) );
  }
  i1292.objectReferenceKeys = i1294
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1299 = data
  i1298.time = i1299[0]
  request.r(i1299[1], i1299[2], 0, i1298, 'value')
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1303 = data
  i1302.functionName = i1303[0]
  i1302.floatParameter = i1303[1]
  i1302.intParameter = i1303[2]
  i1302.stringParameter = i1303[3]
  request.r(i1303[4], i1303[5], 0, i1302, 'objectReferenceParameter')
  i1302.time = i1303[6]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1305 = data
  i1304.center = new pc.Vec3( i1305[0], i1305[1], i1305[2] )
  i1304.extends = new pc.Vec3( i1305[3], i1305[4], i1305[5] )
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1309 = data
  var i1311 = i1309[0]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( i1311[i + 0] );
  }
  i1308.genericBindings = i1310
  var i1313 = i1309[1]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( i1313[i + 0] );
  }
  i1308.pptrCurveMapping = i1312
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1315 = data
  i1314.name = i1315[0]
  i1314.ascent = i1315[1]
  i1314.originalLineHeight = i1315[2]
  i1314.fontSize = i1315[3]
  var i1317 = i1315[4]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1317[i + 0]) );
  }
  i1314.characterInfo = i1316
  request.r(i1315[5], i1315[6], 0, i1314, 'texture')
  i1314.originalFontSize = i1315[7]
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1321 = data
  i1320.index = i1321[0]
  i1320.advance = i1321[1]
  i1320.bearing = i1321[2]
  i1320.glyphWidth = i1321[3]
  i1320.glyphHeight = i1321[4]
  i1320.minX = i1321[5]
  i1320.maxX = i1321[6]
  i1320.minY = i1321[7]
  i1320.maxY = i1321[8]
  i1320.uvBottomLeftX = i1321[9]
  i1320.uvBottomLeftY = i1321[10]
  i1320.uvBottomRightX = i1321[11]
  i1320.uvBottomRightY = i1321[12]
  i1320.uvTopLeftX = i1321[13]
  i1320.uvTopLeftY = i1321[14]
  i1320.uvTopRightX = i1321[15]
  i1320.uvTopRightY = i1321[16]
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1323 = data
  i1322.name = i1323[0]
  var i1325 = i1323[1]
  var i1324 = []
  for(var i = 0; i < i1325.length; i += 1) {
    i1324.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1325[i + 0]) );
  }
  i1322.layers = i1324
  var i1327 = i1323[2]
  var i1326 = []
  for(var i = 0; i < i1327.length; i += 1) {
    i1326.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1327[i + 0]) );
  }
  i1322.parameters = i1326
  i1322.animationClips = i1323[3]
  i1322.avatarUnsupported = i1323[4]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1331 = data
  i1330.name = i1331[0]
  i1330.defaultWeight = i1331[1]
  i1330.blendingMode = i1331[2]
  i1330.avatarMask = i1331[3]
  i1330.syncedLayerIndex = i1331[4]
  i1330.syncedLayerAffectsTiming = !!i1331[5]
  i1330.syncedLayers = i1331[6]
  i1330.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1331[7], i1330.stateMachine)
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1333 = data
  i1332.id = i1333[0]
  i1332.name = i1333[1]
  i1332.path = i1333[2]
  var i1335 = i1333[3]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1335[i + 0]) );
  }
  i1332.states = i1334
  var i1337 = i1333[4]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1337[i + 0]) );
  }
  i1332.machines = i1336
  var i1339 = i1333[5]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1339[i + 0]) );
  }
  i1332.entryStateTransitions = i1338
  var i1341 = i1333[6]
  var i1340 = []
  for(var i = 0; i < i1341.length; i += 1) {
    i1340.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1341[i + 0]) );
  }
  i1332.exitStateTransitions = i1340
  var i1343 = i1333[7]
  var i1342 = []
  for(var i = 0; i < i1343.length; i += 1) {
    i1342.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1343[i + 0]) );
  }
  i1332.anyStateTransitions = i1342
  i1332.defaultStateId = i1333[8]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1347 = data
  i1346.id = i1347[0]
  i1346.name = i1347[1]
  i1346.cycleOffset = i1347[2]
  i1346.cycleOffsetParameter = i1347[3]
  i1346.cycleOffsetParameterActive = !!i1347[4]
  i1346.mirror = !!i1347[5]
  i1346.mirrorParameter = i1347[6]
  i1346.mirrorParameterActive = !!i1347[7]
  i1346.motionId = i1347[8]
  i1346.nameHash = i1347[9]
  i1346.fullPathHash = i1347[10]
  i1346.speed = i1347[11]
  i1346.speedParameter = i1347[12]
  i1346.speedParameterActive = !!i1347[13]
  i1346.tag = i1347[14]
  i1346.tagHash = i1347[15]
  i1346.writeDefaultValues = !!i1347[16]
  var i1349 = i1347[17]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 2) {
  request.r(i1349[i + 0], i1349[i + 1], 2, i1348, '')
  }
  i1346.behaviours = i1348
  var i1351 = i1347[18]
  var i1350 = []
  for(var i = 0; i < i1351.length; i += 1) {
    i1350.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1351[i + 0]) );
  }
  i1346.transitions = i1350
  return i1346
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1356 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1357 = data
  i1356.fullPath = i1357[0]
  i1356.canTransitionToSelf = !!i1357[1]
  i1356.duration = i1357[2]
  i1356.exitTime = i1357[3]
  i1356.hasExitTime = !!i1357[4]
  i1356.hasFixedDuration = !!i1357[5]
  i1356.interruptionSource = i1357[6]
  i1356.offset = i1357[7]
  i1356.orderedInterruption = !!i1357[8]
  i1356.destinationStateId = i1357[9]
  i1356.isExit = !!i1357[10]
  i1356.mute = !!i1357[11]
  i1356.solo = !!i1357[12]
  var i1359 = i1357[13]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1359[i + 0]) );
  }
  i1356.conditions = i1358
  return i1356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1363 = data
  i1362.mode = i1363[0]
  i1362.parameter = i1363[1]
  i1362.threshold = i1363[2]
  return i1362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1369 = data
  i1368.destinationStateId = i1369[0]
  i1368.isExit = !!i1369[1]
  i1368.mute = !!i1369[2]
  i1368.solo = !!i1369[3]
  var i1371 = i1369[4]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1371[i + 0]) );
  }
  i1368.conditions = i1370
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1374 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1375 = data
  i1374.defaultBool = !!i1375[0]
  i1374.defaultFloat = i1375[1]
  i1374.defaultInt = i1375[2]
  i1374.name = i1375[3]
  i1374.nameHash = i1375[4]
  i1374.type = i1375[5]
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1376 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1377 = data
  i1376.name = i1377[0]
  i1376.bytes64 = i1377[1]
  i1376.data = i1377[2]
  return i1376
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1378 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1379 = data
  i1378.hashCode = i1379[0]
  request.r(i1379[1], i1379[2], 0, i1378, 'material')
  i1378.materialHashCode = i1379[3]
  request.r(i1379[4], i1379[5], 0, i1378, 'atlas')
  i1378.normalStyle = i1379[6]
  i1378.normalSpacingOffset = i1379[7]
  i1378.boldStyle = i1379[8]
  i1378.boldSpacing = i1379[9]
  i1378.italicStyle = i1379[10]
  i1378.tabSize = i1379[11]
  i1378.m_Version = i1379[12]
  i1378.m_SourceFontFileGUID = i1379[13]
  request.r(i1379[14], i1379[15], 0, i1378, 'm_SourceFontFile_EditorRef')
  request.r(i1379[16], i1379[17], 0, i1378, 'm_SourceFontFile')
  i1378.m_AtlasPopulationMode = i1379[18]
  i1378.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1379[19], i1378.m_FaceInfo)
  var i1381 = i1379[20]
  var i1380 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.add(request.d('UnityEngine.TextCore.Glyph', i1381[i + 0]));
  }
  i1378.m_GlyphTable = i1380
  var i1383 = i1379[21]
  var i1382 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1383.length; i += 1) {
    i1382.add(request.d('TMPro.TMP_Character', i1383[i + 0]));
  }
  i1378.m_CharacterTable = i1382
  var i1385 = i1379[22]
  var i1384 = []
  for(var i = 0; i < i1385.length; i += 2) {
  request.r(i1385[i + 0], i1385[i + 1], 2, i1384, '')
  }
  i1378.m_AtlasTextures = i1384
  i1378.m_AtlasTextureIndex = i1379[23]
  i1378.m_IsMultiAtlasTexturesEnabled = !!i1379[24]
  i1378.m_ClearDynamicDataOnBuild = !!i1379[25]
  var i1387 = i1379[26]
  var i1386 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.add(request.d('UnityEngine.TextCore.GlyphRect', i1387[i + 0]));
  }
  i1378.m_UsedGlyphRects = i1386
  var i1389 = i1379[27]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('UnityEngine.TextCore.GlyphRect', i1389[i + 0]));
  }
  i1378.m_FreeGlyphRects = i1388
  i1378.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1379[28], i1378.m_fontInfo)
  i1378.m_AtlasWidth = i1379[29]
  i1378.m_AtlasHeight = i1379[30]
  i1378.m_AtlasPadding = i1379[31]
  i1378.m_AtlasRenderMode = i1379[32]
  var i1391 = i1379[33]
  var i1390 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.add(request.d('TMPro.TMP_Glyph', i1391[i + 0]));
  }
  i1378.m_glyphInfoList = i1390
  i1378.m_KerningTable = request.d('TMPro.KerningTable', i1379[34], i1378.m_KerningTable)
  i1378.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1379[35], i1378.m_FontFeatureTable)
  var i1393 = i1379[36]
  var i1392 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1393.length; i += 2) {
  request.r(i1393[i + 0], i1393[i + 1], 1, i1392, '')
  }
  i1378.fallbackFontAssets = i1392
  var i1395 = i1379[37]
  var i1394 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1395.length; i += 2) {
  request.r(i1395[i + 0], i1395[i + 1], 1, i1394, '')
  }
  i1378.m_FallbackFontAssetTable = i1394
  i1378.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1379[38], i1378.m_CreationSettings)
  var i1397 = i1379[39]
  var i1396 = []
  for(var i = 0; i < i1397.length; i += 1) {
    i1396.push( request.d('TMPro.TMP_FontWeightPair', i1397[i + 0]) );
  }
  i1378.m_FontWeightTable = i1396
  var i1399 = i1379[40]
  var i1398 = []
  for(var i = 0; i < i1399.length; i += 1) {
    i1398.push( request.d('TMPro.TMP_FontWeightPair', i1399[i + 0]) );
  }
  i1378.fontWeights = i1398
  return i1378
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1401 = data
  i1400.m_FaceIndex = i1401[0]
  i1400.m_FamilyName = i1401[1]
  i1400.m_StyleName = i1401[2]
  i1400.m_PointSize = i1401[3]
  i1400.m_Scale = i1401[4]
  i1400.m_UnitsPerEM = i1401[5]
  i1400.m_LineHeight = i1401[6]
  i1400.m_AscentLine = i1401[7]
  i1400.m_CapLine = i1401[8]
  i1400.m_MeanLine = i1401[9]
  i1400.m_Baseline = i1401[10]
  i1400.m_DescentLine = i1401[11]
  i1400.m_SuperscriptOffset = i1401[12]
  i1400.m_SuperscriptSize = i1401[13]
  i1400.m_SubscriptOffset = i1401[14]
  i1400.m_SubscriptSize = i1401[15]
  i1400.m_UnderlineOffset = i1401[16]
  i1400.m_UnderlineThickness = i1401[17]
  i1400.m_StrikethroughOffset = i1401[18]
  i1400.m_StrikethroughThickness = i1401[19]
  i1400.m_TabWidth = i1401[20]
  return i1400
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1405 = data
  i1404.m_Index = i1405[0]
  i1404.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1405[1], i1404.m_Metrics)
  i1404.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1405[2], i1404.m_GlyphRect)
  i1404.m_Scale = i1405[3]
  i1404.m_AtlasIndex = i1405[4]
  i1404.m_ClassDefinitionType = i1405[5]
  return i1404
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1406 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1407 = data
  i1406.m_Width = i1407[0]
  i1406.m_Height = i1407[1]
  i1406.m_HorizontalBearingX = i1407[2]
  i1406.m_HorizontalBearingY = i1407[3]
  i1406.m_HorizontalAdvance = i1407[4]
  return i1406
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1408 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1409 = data
  i1408.m_X = i1409[0]
  i1408.m_Y = i1409[1]
  i1408.m_Width = i1409[2]
  i1408.m_Height = i1409[3]
  return i1408
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1412 = root || request.c( 'TMPro.TMP_Character' )
  var i1413 = data
  i1412.m_ElementType = i1413[0]
  i1412.m_Unicode = i1413[1]
  i1412.m_GlyphIndex = i1413[2]
  i1412.m_Scale = i1413[3]
  return i1412
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1418 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1419 = data
  i1418.Name = i1419[0]
  i1418.PointSize = i1419[1]
  i1418.Scale = i1419[2]
  i1418.CharacterCount = i1419[3]
  i1418.LineHeight = i1419[4]
  i1418.Baseline = i1419[5]
  i1418.Ascender = i1419[6]
  i1418.CapHeight = i1419[7]
  i1418.Descender = i1419[8]
  i1418.CenterLine = i1419[9]
  i1418.SuperscriptOffset = i1419[10]
  i1418.SubscriptOffset = i1419[11]
  i1418.SubSize = i1419[12]
  i1418.Underline = i1419[13]
  i1418.UnderlineThickness = i1419[14]
  i1418.strikethrough = i1419[15]
  i1418.strikethroughThickness = i1419[16]
  i1418.TabWidth = i1419[17]
  i1418.Padding = i1419[18]
  i1418.AtlasWidth = i1419[19]
  i1418.AtlasHeight = i1419[20]
  return i1418
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1422 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1423 = data
  i1422.id = i1423[0]
  i1422.x = i1423[1]
  i1422.y = i1423[2]
  i1422.width = i1423[3]
  i1422.height = i1423[4]
  i1422.xOffset = i1423[5]
  i1422.yOffset = i1423[6]
  i1422.xAdvance = i1423[7]
  i1422.scale = i1423[8]
  return i1422
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1424 = root || request.c( 'TMPro.KerningTable' )
  var i1425 = data
  var i1427 = i1425[0]
  var i1426 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1427.length; i += 1) {
    i1426.add(request.d('TMPro.KerningPair', i1427[i + 0]));
  }
  i1424.kerningPairs = i1426
  return i1424
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1430 = root || request.c( 'TMPro.KerningPair' )
  var i1431 = data
  i1430.xOffset = i1431[0]
  i1430.m_FirstGlyph = i1431[1]
  i1430.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1431[2], i1430.m_FirstGlyphAdjustments)
  i1430.m_SecondGlyph = i1431[3]
  i1430.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1431[4], i1430.m_SecondGlyphAdjustments)
  i1430.m_IgnoreSpacingAdjustments = !!i1431[5]
  return i1430
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1432 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1433 = data
  var i1435 = i1433[0]
  var i1434 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1435[i + 0]));
  }
  i1432.m_GlyphPairAdjustmentRecords = i1434
  return i1432
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1438 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1439 = data
  i1438.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1439[0], i1438.m_FirstAdjustmentRecord)
  i1438.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1439[1], i1438.m_SecondAdjustmentRecord)
  i1438.m_FeatureLookupFlags = i1439[2]
  return i1438
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1442 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1443 = data
  i1442.sourceFontFileName = i1443[0]
  i1442.sourceFontFileGUID = i1443[1]
  i1442.pointSizeSamplingMode = i1443[2]
  i1442.pointSize = i1443[3]
  i1442.padding = i1443[4]
  i1442.packingMode = i1443[5]
  i1442.atlasWidth = i1443[6]
  i1442.atlasHeight = i1443[7]
  i1442.characterSetSelectionMode = i1443[8]
  i1442.characterSequence = i1443[9]
  i1442.referencedFontAssetGUID = i1443[10]
  i1442.referencedTextAssetGUID = i1443[11]
  i1442.fontStyle = i1443[12]
  i1442.fontStyleModifier = i1443[13]
  i1442.renderMode = i1443[14]
  i1442.includeFontFeatures = !!i1443[15]
  return i1442
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1447 = data
  request.r(i1447[0], i1447[1], 0, i1446, 'regularTypeface')
  request.r(i1447[2], i1447[3], 0, i1446, 'italicTypeface')
  return i1446
}

Deserializers["MaterialsSO"] = function (request, data, root) {
  var i1448 = root || request.c( 'MaterialsSO' )
  var i1449 = data
  var i1451 = i1449[0]
  var i1450 = new (System.Collections.Generic.List$1(Bridge.ns('MainMaterials')))
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.add(request.d('MainMaterials', i1451[i + 0]));
  }
  i1448.mainMaterials = i1450
  return i1448
}

Deserializers["MainMaterials"] = function (request, data, root) {
  var i1454 = root || request.c( 'MainMaterials' )
  var i1455 = data
  i1454.colorType = i1455[0]
  request.r(i1455[1], i1455[2], 0, i1454, 'material')
  request.r(i1455[3], i1455[4], 0, i1454, 'pitMaterial')
  request.r(i1455[5], i1455[6], 0, i1454, 'coinMaterial')
  request.r(i1455[7], i1455[8], 0, i1454, 'pigMaterial')
  return i1454
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1457 = data
  i1456.useSafeMode = !!i1457[0]
  i1456.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1457[1], i1456.safeModeOptions)
  i1456.timeScale = i1457[2]
  i1456.unscaledTimeScale = i1457[3]
  i1456.useSmoothDeltaTime = !!i1457[4]
  i1456.maxSmoothUnscaledTime = i1457[5]
  i1456.rewindCallbackMode = i1457[6]
  i1456.showUnityEditorReport = !!i1457[7]
  i1456.logBehaviour = i1457[8]
  i1456.drawGizmos = !!i1457[9]
  i1456.defaultRecyclable = !!i1457[10]
  i1456.defaultAutoPlay = i1457[11]
  i1456.defaultUpdateType = i1457[12]
  i1456.defaultTimeScaleIndependent = !!i1457[13]
  i1456.defaultEaseType = i1457[14]
  i1456.defaultEaseOvershootOrAmplitude = i1457[15]
  i1456.defaultEasePeriod = i1457[16]
  i1456.defaultAutoKill = !!i1457[17]
  i1456.defaultLoopType = i1457[18]
  i1456.debugMode = !!i1457[19]
  i1456.debugStoreTargetId = !!i1457[20]
  i1456.showPreviewPanel = !!i1457[21]
  i1456.storeSettingsLocation = i1457[22]
  i1456.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1457[23], i1456.modules)
  i1456.createASMDEF = !!i1457[24]
  i1456.showPlayingTweens = !!i1457[25]
  i1456.showPausedTweens = !!i1457[26]
  return i1456
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1459 = data
  i1458.logBehaviour = i1459[0]
  i1458.nestedTweenFailureBehaviour = i1459[1]
  return i1458
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1460 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1461 = data
  i1460.showPanel = !!i1461[0]
  i1460.audioEnabled = !!i1461[1]
  i1460.physicsEnabled = !!i1461[2]
  i1460.physics2DEnabled = !!i1461[3]
  i1460.spriteEnabled = !!i1461[4]
  i1460.uiEnabled = !!i1461[5]
  i1460.textMeshProEnabled = !!i1461[6]
  i1460.tk2DEnabled = !!i1461[7]
  i1460.deAudioEnabled = !!i1461[8]
  i1460.deUnityExtendedEnabled = !!i1461[9]
  i1460.epoOutlineEnabled = !!i1461[10]
  return i1460
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1462 = root || request.c( 'TMPro.TMP_Settings' )
  var i1463 = data
  i1462.m_enableWordWrapping = !!i1463[0]
  i1462.m_enableKerning = !!i1463[1]
  i1462.m_enableExtraPadding = !!i1463[2]
  i1462.m_enableTintAllSprites = !!i1463[3]
  i1462.m_enableParseEscapeCharacters = !!i1463[4]
  i1462.m_EnableRaycastTarget = !!i1463[5]
  i1462.m_GetFontFeaturesAtRuntime = !!i1463[6]
  i1462.m_missingGlyphCharacter = i1463[7]
  i1462.m_warningsDisabled = !!i1463[8]
  request.r(i1463[9], i1463[10], 0, i1462, 'm_defaultFontAsset')
  i1462.m_defaultFontAssetPath = i1463[11]
  i1462.m_defaultFontSize = i1463[12]
  i1462.m_defaultAutoSizeMinRatio = i1463[13]
  i1462.m_defaultAutoSizeMaxRatio = i1463[14]
  i1462.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1463[15], i1463[16] )
  i1462.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1463[17], i1463[18] )
  i1462.m_autoSizeTextContainer = !!i1463[19]
  i1462.m_IsTextObjectScaleStatic = !!i1463[20]
  var i1465 = i1463[21]
  var i1464 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1465.length; i += 2) {
  request.r(i1465[i + 0], i1465[i + 1], 1, i1464, '')
  }
  i1462.m_fallbackFontAssets = i1464
  i1462.m_matchMaterialPreset = !!i1463[22]
  request.r(i1463[23], i1463[24], 0, i1462, 'm_defaultSpriteAsset')
  i1462.m_defaultSpriteAssetPath = i1463[25]
  i1462.m_enableEmojiSupport = !!i1463[26]
  i1462.m_MissingCharacterSpriteUnicode = i1463[27]
  i1462.m_defaultColorGradientPresetsPath = i1463[28]
  request.r(i1463[29], i1463[30], 0, i1462, 'm_defaultStyleSheet')
  i1462.m_StyleSheetsResourcePath = i1463[31]
  request.r(i1463[32], i1463[33], 0, i1462, 'm_leadingCharacters')
  request.r(i1463[34], i1463[35], 0, i1462, 'm_followingCharacters')
  i1462.m_UseModernHangulLineBreakingRules = !!i1463[36]
  return i1462
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1466 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1467 = data
  i1466.m_GlyphIndex = i1467[0]
  i1466.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1467[1], i1466.m_GlyphValueRecord)
  return i1466
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1469 = data
  i1468.m_XPlacement = i1469[0]
  i1468.m_YPlacement = i1469[1]
  i1468.m_XAdvance = i1469[2]
  i1468.m_YAdvance = i1469[3]
  return i1468
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1470 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1471 = data
  i1470.hashCode = i1471[0]
  request.r(i1471[1], i1471[2], 0, i1470, 'material')
  i1470.materialHashCode = i1471[3]
  request.r(i1471[4], i1471[5], 0, i1470, 'spriteSheet')
  var i1473 = i1471[6]
  var i1472 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.add(request.d('TMPro.TMP_Sprite', i1473[i + 0]));
  }
  i1470.spriteInfoList = i1472
  var i1475 = i1471[7]
  var i1474 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1475.length; i += 2) {
  request.r(i1475[i + 0], i1475[i + 1], 1, i1474, '')
  }
  i1470.fallbackSpriteAssets = i1474
  i1470.m_Version = i1471[8]
  i1470.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1471[9], i1470.m_FaceInfo)
  var i1477 = i1471[10]
  var i1476 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.add(request.d('TMPro.TMP_SpriteCharacter', i1477[i + 0]));
  }
  i1470.m_SpriteCharacterTable = i1476
  var i1479 = i1471[11]
  var i1478 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.add(request.d('TMPro.TMP_SpriteGlyph', i1479[i + 0]));
  }
  i1470.m_SpriteGlyphTable = i1478
  return i1470
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1482 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.hashCode = i1483[1]
  i1482.unicode = i1483[2]
  i1482.pivot = new pc.Vec2( i1483[3], i1483[4] )
  request.r(i1483[5], i1483[6], 0, i1482, 'sprite')
  i1482.id = i1483[7]
  i1482.x = i1483[8]
  i1482.y = i1483[9]
  i1482.width = i1483[10]
  i1482.height = i1483[11]
  i1482.xOffset = i1483[12]
  i1482.yOffset = i1483[13]
  i1482.xAdvance = i1483[14]
  i1482.scale = i1483[15]
  return i1482
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1488 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1489 = data
  i1488.m_Name = i1489[0]
  i1488.m_HashCode = i1489[1]
  i1488.m_ElementType = i1489[2]
  i1488.m_Unicode = i1489[3]
  i1488.m_GlyphIndex = i1489[4]
  i1488.m_Scale = i1489[5]
  return i1488
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1492 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'sprite')
  i1492.m_Index = i1493[2]
  i1492.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1493[3], i1492.m_Metrics)
  i1492.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1493[4], i1492.m_GlyphRect)
  i1492.m_Scale = i1493[5]
  i1492.m_AtlasIndex = i1493[6]
  i1492.m_ClassDefinitionType = i1493[7]
  return i1492
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1494 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1495 = data
  var i1497 = i1495[0]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('TMPro.TMP_Style', i1497[i + 0]));
  }
  i1494.m_StyleList = i1496
  return i1494
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1500 = root || request.c( 'TMPro.TMP_Style' )
  var i1501 = data
  i1500.m_Name = i1501[0]
  i1500.m_HashCode = i1501[1]
  i1500.m_OpeningDefinition = i1501[2]
  i1500.m_ClosingDefinition = i1501[3]
  i1500.m_OpeningTagArray = i1501[4]
  i1500.m_ClosingTagArray = i1501[5]
  i1500.m_OpeningTagUnicodeArray = i1501[6]
  i1500.m_ClosingTagUnicodeArray = i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1503 = data
  var i1505 = i1503[0]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1505[i + 0]) );
  }
  i1502.files = i1504
  i1502.componentToPrefabIds = i1503[1]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1509 = data
  i1508.path = i1509[0]
  request.r(i1509[1], i1509[2], 0, i1508, 'unityObject')
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1513[i + 0]) );
  }
  i1510.scriptsExecutionOrder = i1512
  var i1515 = i1511[1]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1515[i + 0]) );
  }
  i1510.sortingLayers = i1514
  var i1517 = i1511[2]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1517[i + 0]) );
  }
  i1510.cullingLayers = i1516
  i1510.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1511[3], i1510.timeSettings)
  i1510.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1511[4], i1510.physicsSettings)
  i1510.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1511[5], i1510.physics2DSettings)
  i1510.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1511[6], i1510.qualitySettings)
  i1510.enableRealtimeShadows = !!i1511[7]
  i1510.enableAutoInstancing = !!i1511[8]
  i1510.enableDynamicBatching = !!i1511[9]
  i1510.lightmapEncodingQuality = i1511[10]
  i1510.desiredColorSpace = i1511[11]
  var i1519 = i1511[12]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( i1519[i + 0] );
  }
  i1510.allTags = i1518
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1523 = data
  i1522.name = i1523[0]
  i1522.value = i1523[1]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1527 = data
  i1526.id = i1527[0]
  i1526.name = i1527[1]
  i1526.value = i1527[2]
  return i1526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1531 = data
  i1530.id = i1531[0]
  i1530.name = i1531[1]
  return i1530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1533 = data
  i1532.fixedDeltaTime = i1533[0]
  i1532.maximumDeltaTime = i1533[1]
  i1532.timeScale = i1533[2]
  i1532.maximumParticleTimestep = i1533[3]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1535 = data
  i1534.gravity = new pc.Vec3( i1535[0], i1535[1], i1535[2] )
  i1534.defaultSolverIterations = i1535[3]
  i1534.bounceThreshold = i1535[4]
  i1534.autoSyncTransforms = !!i1535[5]
  i1534.autoSimulation = !!i1535[6]
  var i1537 = i1535[7]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1537[i + 0]) );
  }
  i1534.collisionMatrix = i1536
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1541 = data
  i1540.enabled = !!i1541[0]
  i1540.layerId = i1541[1]
  i1540.otherLayerId = i1541[2]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1543 = data
  request.r(i1543[0], i1543[1], 0, i1542, 'material')
  i1542.gravity = new pc.Vec2( i1543[2], i1543[3] )
  i1542.positionIterations = i1543[4]
  i1542.velocityIterations = i1543[5]
  i1542.velocityThreshold = i1543[6]
  i1542.maxLinearCorrection = i1543[7]
  i1542.maxAngularCorrection = i1543[8]
  i1542.maxTranslationSpeed = i1543[9]
  i1542.maxRotationSpeed = i1543[10]
  i1542.baumgarteScale = i1543[11]
  i1542.baumgarteTOIScale = i1543[12]
  i1542.timeToSleep = i1543[13]
  i1542.linearSleepTolerance = i1543[14]
  i1542.angularSleepTolerance = i1543[15]
  i1542.defaultContactOffset = i1543[16]
  i1542.autoSimulation = !!i1543[17]
  i1542.queriesHitTriggers = !!i1543[18]
  i1542.queriesStartInColliders = !!i1543[19]
  i1542.callbacksOnDisable = !!i1543[20]
  i1542.reuseCollisionCallbacks = !!i1543[21]
  i1542.autoSyncTransforms = !!i1543[22]
  var i1545 = i1543[23]
  var i1544 = []
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1545[i + 0]) );
  }
  i1542.collisionMatrix = i1544
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1549 = data
  i1548.enabled = !!i1549[0]
  i1548.layerId = i1549[1]
  i1548.otherLayerId = i1549[2]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1551 = data
  var i1553 = i1551[0]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1553[i + 0]) );
  }
  i1550.qualityLevels = i1552
  var i1555 = i1551[1]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( i1555[i + 0] );
  }
  i1550.names = i1554
  i1550.shadows = i1551[2]
  i1550.anisotropicFiltering = i1551[3]
  i1550.antiAliasing = i1551[4]
  i1550.lodBias = i1551[5]
  i1550.shadowCascades = i1551[6]
  i1550.shadowDistance = i1551[7]
  i1550.shadowmaskMode = i1551[8]
  i1550.shadowProjection = i1551[9]
  i1550.shadowResolution = i1551[10]
  i1550.softParticles = !!i1551[11]
  i1550.softVegetation = !!i1551[12]
  i1550.activeColorSpace = i1551[13]
  i1550.desiredColorSpace = i1551[14]
  i1550.masterTextureLimit = i1551[15]
  i1550.maxQueuedFrames = i1551[16]
  i1550.particleRaycastBudget = i1551[17]
  i1550.pixelLightCount = i1551[18]
  i1550.realtimeReflectionProbes = !!i1551[19]
  i1550.shadowCascade2Split = i1551[20]
  i1550.shadowCascade4Split = new pc.Vec3( i1551[21], i1551[22], i1551[23] )
  i1550.streamingMipmapsActive = !!i1551[24]
  i1550.vSyncCount = i1551[25]
  i1550.asyncUploadBufferSize = i1551[26]
  i1550.asyncUploadTimeSlice = i1551[27]
  i1550.billboardsFaceCameraPosition = !!i1551[28]
  i1550.shadowNearPlaneOffset = i1551[29]
  i1550.streamingMipmapsMemoryBudget = i1551[30]
  i1550.maximumLODLevel = i1551[31]
  i1550.streamingMipmapsAddAllCameras = !!i1551[32]
  i1550.streamingMipmapsMaxLevelReduction = i1551[33]
  i1550.streamingMipmapsRenderersPerFrame = i1551[34]
  i1550.resolutionScalingFixedDPIFactor = i1551[35]
  i1550.streamingMipmapsMaxFileIORequests = i1551[36]
  i1550.currentQualityLevel = i1551[37]
  return i1550
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1558 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1559 = data
  i1558.xPlacement = i1559[0]
  i1558.yPlacement = i1559[1]
  i1558.xAdvance = i1559[2]
  i1558.yAdvance = i1559[3]
  return i1558
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"103":[104],"105":[104],"106":[104],"107":[104],"108":[104],"109":[104],"110":[31],"111":[24],"112":[113],"114":[113],"115":[113],"116":[113],"117":[113],"118":[113],"119":[113],"120":[121],"122":[121],"123":[121],"124":[121],"125":[121],"126":[121],"127":[121],"128":[121],"129":[121],"130":[121],"131":[121],"132":[121],"133":[121],"134":[24],"135":[7],"136":[137],"138":[137],"23":[22],"75":[22],"139":[24],"140":[24],"141":[33],"142":[143],"144":[22],"145":[22],"27":[23],"29":[28,22],"146":[22],"26":[23],"56":[22],"147":[22],"82":[22],"148":[22],"61":[22],"149":[22],"55":[22],"64":[22],"150":[22],"151":[28,22],"152":[22],"63":[22],"60":[22],"153":[22],"59":[28,22],"68":[22],"154":[34],"155":[34],"35":[34],"156":[34],"157":[24],"158":[24],"159":[143],"160":[24],"161":[22],"48":[7,22],"43":[22,28],"162":[22],"163":[28,22],"164":[7],"165":[28,22],"166":[22],"167":[143],"168":[145,22],"169":[145,22],"170":[145,22],"171":[145,22],"172":[145,22],"173":[145,22],"174":[145,22],"175":[145,22],"176":[145,22],"177":[145,22],"178":[145,22]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.MonoBehaviour","Coin","UnityEngine.MeshRenderer","UnityEngine.Animator","UnityEngine.GameObject","UnityEditor.Animations.AnimatorController","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","TimeToDeactivate","UnityEngine.Sprite","Grid","Row","Tile","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.Camera","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","Hole","UnityEngine.SkinnedMeshRenderer","UnityEngine.AudioListener","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","GamePlay","PigRow","TilePathfinder","CoinManager","Design","MaterialsSO","UnityEngine.CanvasGroup","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Button","Hand","Pig","TMPro.TextMeshPro","CoinBag","BounceAnimation","PlayableManager","AudioManager","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEditor.ShaderInclude","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","ToonyColorsPro.Runtime.TCP2_CameraDepth","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UIShiny","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/11/2025 07:00:15";

Deserializers.lunaDaysRunning = "8.1";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "HoleCoin";

Deserializers.lunaAppID = "31927";

Deserializers.projectId = "8dd6c23a054ebdf4789e7fb4978079d8";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 3.2.1\ncom.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 3.0.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1893";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4544";

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

Deserializers.buildID = "c5df5f8b-9a93-4983-a805-c980ccb7421f";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

