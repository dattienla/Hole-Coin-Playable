var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i834 = root || request.c( 'UnityEngine.JointSpring' )
  var i835 = data
  i834.spring = i835[0]
  i834.damper = i835[1]
  i834.targetPosition = i835[2]
  return i834
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.JointMotor' )
  var i837 = data
  i836.m_TargetVelocity = i837[0]
  i836.m_Force = i837[1]
  i836.m_FreeSpin = i837[2]
  return i836
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.JointLimits' )
  var i839 = data
  i838.m_Min = i839[0]
  i838.m_Max = i839[1]
  i838.m_Bounciness = i839[2]
  i838.m_BounceMinVelocity = i839[3]
  i838.m_ContactDistance = i839[4]
  i838.minBounce = i839[5]
  i838.maxBounce = i839[6]
  return i838
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.JointDrive' )
  var i841 = data
  i840.m_PositionSpring = i841[0]
  i840.m_PositionDamper = i841[1]
  i840.m_MaximumForce = i841[2]
  i840.m_UseAcceleration = i841[3]
  return i840
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i843 = data
  i842.m_Spring = i843[0]
  i842.m_Damper = i843[1]
  return i842
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i845 = data
  i844.m_Limit = i845[0]
  i844.m_Bounciness = i845[1]
  i844.m_ContactDistance = i845[2]
  return i844
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i847 = data
  i846.m_ExtremumSlip = i847[0]
  i846.m_ExtremumValue = i847[1]
  i846.m_AsymptoteSlip = i847[2]
  i846.m_AsymptoteValue = i847[3]
  i846.m_Stiffness = i847[4]
  return i846
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i849 = data
  i848.m_LowerAngle = i849[0]
  i848.m_UpperAngle = i849[1]
  return i848
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i851 = data
  i850.m_MotorSpeed = i851[0]
  i850.m_MaximumMotorTorque = i851[1]
  return i850
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i853 = data
  i852.m_DampingRatio = i853[0]
  i852.m_Frequency = i853[1]
  i852.m_Angle = i853[2]
  return i852
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i855 = data
  i854.m_LowerTranslation = i855[0]
  i854.m_UpperTranslation = i855[1]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i856 = root || new pc.UnityMaterial()
  var i857 = data
  i856.name = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'shader')
  i856.renderQueue = i857[3]
  i856.enableInstancing = !!i857[4]
  var i859 = i857[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i859[i + 0]) );
  }
  i856.floatParameters = i858
  var i861 = i857[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i861[i + 0]) );
  }
  i856.colorParameters = i860
  var i863 = i857[7]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i863[i + 0]) );
  }
  i856.vectorParameters = i862
  var i865 = i857[8]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i865[i + 0]) );
  }
  i856.textureParameters = i864
  var i867 = i857[9]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i867[i + 0]) );
  }
  i856.materialFlags = i866
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i871 = data
  i870.name = i871[0]
  i870.value = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i875 = data
  i874.name = i875[0]
  i874.value = new pc.Color(i875[1], i875[2], i875[3], i875[4])
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i879 = data
  i878.name = i879[0]
  i878.value = new pc.Vec4( i879[1], i879[2], i879[3], i879[4] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i883 = data
  i882.name = i883[0]
  request.r(i883[1], i883[2], 0, i882, 'value')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i887 = data
  i886.name = i887[0]
  i886.enabled = !!i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i889 = data
  i888.position = new pc.Vec3( i889[0], i889[1], i889[2] )
  i888.scale = new pc.Vec3( i889[3], i889[4], i889[5] )
  i888.rotation = new pc.Quat(i889[6], i889[7], i889[8], i889[9])
  return i888
}

Deserializers["_HoleMoney.Scripts.Game.TempSlot"] = function (request, data, root) {
  var i890 = root || request.c( '_HoleMoney.Scripts.Game.TempSlot' )
  var i891 = data
  i890.coinCount = i891[0]
  i890.colorType = i891[1]
  var i893 = i891[2]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Slot')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i890.slots = i892
  var i895 = i891[3]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Coin')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i890.coins = i894
  request.r(i891[4], i891[5], 0, i890, 'pointToDropCoin')
  request.r(i891[6], i891[7], 0, i890, 'outline')
  request.r(i891[8], i891[9], 0, i890, 'remainingText')
  request.r(i891[10], i891[11], 0, i890, 'coinBag')
  i890.isDropping = !!i891[12]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i901 = data
  i900.enabled = !!i901[0]
  request.r(i901[1], i901[2], 0, i900, 'sharedMaterial')
  var i903 = i901[3]
  var i902 = []
  for(var i = 0; i < i903.length; i += 2) {
  request.r(i903[i + 0], i903[i + 1], 2, i902, '')
  }
  i900.sharedMaterials = i902
  i900.receiveShadows = !!i901[4]
  i900.shadowCastingMode = i901[5]
  i900.sortingLayerID = i901[6]
  i900.sortingOrder = i901[7]
  i900.lightmapIndex = i901[8]
  i900.lightmapSceneIndex = i901[9]
  i900.lightmapScaleOffset = new pc.Vec4( i901[10], i901[11], i901[12], i901[13] )
  i900.lightProbeUsage = i901[14]
  i900.reflectionProbeUsage = i901[15]
  request.r(i901[16], i901[17], 0, i900, 'sharedMesh')
  var i905 = i901[18]
  var i904 = []
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 2, i904, '')
  }
  i900.bones = i904
  i900.updateWhenOffscreen = !!i901[19]
  i900.localBounds = i901[20]
  request.r(i901[21], i901[22], 0, i900, 'rootBone')
  var i907 = i901[23]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i907[i + 0]) );
  }
  i900.blendShapesWeights = i906
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i915 = data
  i914.weight = i915[0]
  return i914
}

Deserializers["_HoleMoney.Scripts.Game.CoinBag"] = function (request, data, root) {
  var i916 = root || request.c( '_HoleMoney.Scripts.Game.CoinBag' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'skinnedMeshRenderer')
  request.r(i917[2], i917[3], 0, i916, 'spawnPoint')
  return i916
}

Deserializers["DG.Tweening.DOTweenVisualManager"] = function (request, data, root) {
  var i918 = root || request.c( 'DG.Tweening.DOTweenVisualManager' )
  var i919 = data
  i918.preset = i919[0]
  i918.onEnableBehaviour = i919[1]
  i918.onDisableBehaviour = i919[2]
  return i918
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i920 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i921 = data
  i920.targetIsSelf = !!i921[0]
  request.r(i921[1], i921[2], 0, i920, 'targetGO')
  i920.tweenTargetIsTargetGO = !!i921[3]
  i920.delay = i921[4]
  i920.duration = i921[5]
  i920.easeType = i921[6]
  i920.easeCurve = new pc.AnimationCurve( { keys_flow: i921[7] } )
  i920.loopType = i921[8]
  i920.loops = i921[9]
  i920.id = i921[10]
  i920.isRelative = !!i921[11]
  i920.isFrom = !!i921[12]
  i920.isIndependentUpdate = !!i921[13]
  i920.autoKill = !!i921[14]
  i920.autoGenerate = !!i921[15]
  i920.isActive = !!i921[16]
  i920.isValid = !!i921[17]
  request.r(i921[18], i921[19], 0, i920, 'target')
  i920.animationType = i921[20]
  i920.targetType = i921[21]
  i920.forcedTargetType = i921[22]
  i920.autoPlay = !!i921[23]
  i920.useTargetAsV3 = !!i921[24]
  i920.endValueFloat = i921[25]
  i920.endValueV3 = new pc.Vec3( i921[26], i921[27], i921[28] )
  i920.endValueV2 = new pc.Vec2( i921[29], i921[30] )
  i920.endValueColor = new pc.Color(i921[31], i921[32], i921[33], i921[34])
  i920.endValueString = i921[35]
  i920.endValueRect = UnityEngine.Rect.MinMaxRect(i921[36], i921[37], i921[38], i921[39])
  request.r(i921[40], i921[41], 0, i920, 'endValueTransform')
  i920.optionalBool0 = !!i921[42]
  i920.optionalBool1 = !!i921[43]
  i920.optionalFloat0 = i921[44]
  i920.optionalInt0 = i921[45]
  i920.optionalRotationMode = i921[46]
  i920.optionalScrambleMode = i921[47]
  i920.optionalShakeRandomnessMode = i921[48]
  i920.optionalString = i921[49]
  i920.updateType = i921[50]
  i920.isSpeedBased = !!i921[51]
  i920.hasOnStart = !!i921[52]
  i920.hasOnPlay = !!i921[53]
  i920.hasOnUpdate = !!i921[54]
  i920.hasOnStepComplete = !!i921[55]
  i920.hasOnComplete = !!i921[56]
  i920.hasOnTweenCreated = !!i921[57]
  i920.hasOnRewind = !!i921[58]
  i920.onStart = request.d('UnityEngine.Events.UnityEvent', i921[59], i920.onStart)
  i920.onPlay = request.d('UnityEngine.Events.UnityEvent', i921[60], i920.onPlay)
  i920.onUpdate = request.d('UnityEngine.Events.UnityEvent', i921[61], i920.onUpdate)
  i920.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i921[62], i920.onStepComplete)
  i920.onComplete = request.d('UnityEngine.Events.UnityEvent', i921[63], i920.onComplete)
  i920.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i921[64], i920.onTweenCreated)
  i920.onRewind = request.d('UnityEngine.Events.UnityEvent', i921[65], i920.onRewind)
  return i920
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i922 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i923 = data
  i922.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i923[0], i922.m_PersistentCalls)
  return i922
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i924 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i925 = data
  var i927 = i925[0]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('UnityEngine.Events.PersistentCall', i927[i + 0]));
  }
  i924.m_Calls = i926
  return i924
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i930 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i931 = data
  request.r(i931[0], i931[1], 0, i930, 'm_Target')
  i930.m_TargetAssemblyTypeName = i931[2]
  i930.m_MethodName = i931[3]
  i930.m_Mode = i931[4]
  i930.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i931[5], i930.m_Arguments)
  i930.m_CallState = i931[6]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i933 = data
  i932.name = i933[0]
  i932.tagId = i933[1]
  i932.enabled = !!i933[2]
  i932.isStatic = !!i933[3]
  i932.layer = i933[4]
  return i932
}

Deserializers["_HoleMoney.Scripts.Game.Slot"] = function (request, data, root) {
  var i934 = root || request.c( '_HoleMoney.Scripts.Game.Slot' )
  var i935 = data
  i934.isFill = !!i935[0]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'additionalVertexStreams')
  i936.enabled = !!i937[2]
  request.r(i937[3], i937[4], 0, i936, 'sharedMaterial')
  var i939 = i937[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 2, i938, '')
  }
  i936.sharedMaterials = i938
  i936.receiveShadows = !!i937[6]
  i936.shadowCastingMode = i937[7]
  i936.sortingLayerID = i937[8]
  i936.sortingOrder = i937[9]
  i936.lightmapIndex = i937[10]
  i936.lightmapSceneIndex = i937[11]
  i936.lightmapScaleOffset = new pc.Vec4( i937[12], i937[13], i937[14], i937[15] )
  i936.lightProbeUsage = i937[16]
  i936.reflectionProbeUsage = i937[17]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'sharedMesh')
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i943 = data
  i942.enabled = !!i943[0]
  request.r(i943[1], i943[2], 0, i942, 'sharedMaterial')
  var i945 = i943[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.sharedMaterials = i944
  i942.receiveShadows = !!i943[4]
  i942.shadowCastingMode = i943[5]
  i942.sortingLayerID = i943[6]
  i942.sortingOrder = i943[7]
  i942.lightmapIndex = i943[8]
  i942.lightmapSceneIndex = i943[9]
  i942.lightmapScaleOffset = new pc.Vec4( i943[10], i943[11], i943[12], i943[13] )
  i942.lightProbeUsage = i943[14]
  i942.reflectionProbeUsage = i943[15]
  i942.color = new pc.Color(i943[16], i943[17], i943[18], i943[19])
  request.r(i943[20], i943[21], 0, i942, 'sprite')
  i942.flipX = !!i943[22]
  i942.flipY = !!i943[23]
  i942.drawMode = i943[24]
  i942.size = new pc.Vec2( i943[25], i943[26] )
  i942.tileMode = i943[27]
  i942.adaptiveModeThreshold = i943[28]
  i942.maskInteraction = i943[29]
  i942.spriteSortPoint = i943[30]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i947 = data
  i946.pivot = new pc.Vec2( i947[0], i947[1] )
  i946.anchorMin = new pc.Vec2( i947[2], i947[3] )
  i946.anchorMax = new pc.Vec2( i947[4], i947[5] )
  i946.sizeDelta = new pc.Vec2( i947[6], i947[7] )
  i946.anchoredPosition3D = new pc.Vec3( i947[8], i947[9], i947[10] )
  i946.rotation = new pc.Quat(i947[11], i947[12], i947[13], i947[14])
  i946.scale = new pc.Vec3( i947[15], i947[16], i947[17] )
  return i946
}

Deserializers["TMPro.TextMeshPro"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TextMeshPro' )
  var i949 = data
  i948._SortingLayer = i949[0]
  i948._SortingLayerID = i949[1]
  i948._SortingOrder = i949[2]
  i948.m_hasFontAssetChanged = !!i949[3]
  request.r(i949[4], i949[5], 0, i948, 'm_renderer')
  i948.m_maskType = i949[6]
  i948.m_text = i949[7]
  i948.m_isRightToLeft = !!i949[8]
  request.r(i949[9], i949[10], 0, i948, 'm_fontAsset')
  request.r(i949[11], i949[12], 0, i948, 'm_sharedMaterial')
  var i951 = i949[13]
  var i950 = []
  for(var i = 0; i < i951.length; i += 2) {
  request.r(i951[i + 0], i951[i + 1], 2, i950, '')
  }
  i948.m_fontSharedMaterials = i950
  request.r(i949[14], i949[15], 0, i948, 'm_fontMaterial')
  var i953 = i949[16]
  var i952 = []
  for(var i = 0; i < i953.length; i += 2) {
  request.r(i953[i + 0], i953[i + 1], 2, i952, '')
  }
  i948.m_fontMaterials = i952
  i948.m_fontColor32 = UnityEngine.Color32.ConstructColor(i949[17], i949[18], i949[19], i949[20])
  i948.m_fontColor = new pc.Color(i949[21], i949[22], i949[23], i949[24])
  i948.m_enableVertexGradient = !!i949[25]
  i948.m_colorMode = i949[26]
  i948.m_fontColorGradient = request.d('TMPro.VertexGradient', i949[27], i948.m_fontColorGradient)
  request.r(i949[28], i949[29], 0, i948, 'm_fontColorGradientPreset')
  request.r(i949[30], i949[31], 0, i948, 'm_spriteAsset')
  i948.m_tintAllSprites = !!i949[32]
  request.r(i949[33], i949[34], 0, i948, 'm_StyleSheet')
  i948.m_TextStyleHashCode = i949[35]
  i948.m_overrideHtmlColors = !!i949[36]
  i948.m_faceColor = UnityEngine.Color32.ConstructColor(i949[37], i949[38], i949[39], i949[40])
  i948.m_fontSize = i949[41]
  i948.m_fontSizeBase = i949[42]
  i948.m_fontWeight = i949[43]
  i948.m_enableAutoSizing = !!i949[44]
  i948.m_fontSizeMin = i949[45]
  i948.m_fontSizeMax = i949[46]
  i948.m_fontStyle = i949[47]
  i948.m_HorizontalAlignment = i949[48]
  i948.m_VerticalAlignment = i949[49]
  i948.m_textAlignment = i949[50]
  i948.m_characterSpacing = i949[51]
  i948.m_wordSpacing = i949[52]
  i948.m_lineSpacing = i949[53]
  i948.m_lineSpacingMax = i949[54]
  i948.m_paragraphSpacing = i949[55]
  i948.m_charWidthMaxAdj = i949[56]
  i948.m_enableWordWrapping = !!i949[57]
  i948.m_wordWrappingRatios = i949[58]
  i948.m_overflowMode = i949[59]
  request.r(i949[60], i949[61], 0, i948, 'm_linkedTextComponent')
  request.r(i949[62], i949[63], 0, i948, 'parentLinkedComponent')
  i948.m_enableKerning = !!i949[64]
  i948.m_enableExtraPadding = !!i949[65]
  i948.checkPaddingRequired = !!i949[66]
  i948.m_isRichText = !!i949[67]
  i948.m_parseCtrlCharacters = !!i949[68]
  i948.m_isOrthographic = !!i949[69]
  i948.m_isCullingEnabled = !!i949[70]
  i948.m_horizontalMapping = i949[71]
  i948.m_verticalMapping = i949[72]
  i948.m_uvLineOffset = i949[73]
  i948.m_geometrySortingOrder = i949[74]
  i948.m_IsTextObjectScaleStatic = !!i949[75]
  i948.m_VertexBufferAutoSizeReduction = !!i949[76]
  i948.m_useMaxVisibleDescender = !!i949[77]
  i948.m_pageToDisplay = i949[78]
  i948.m_margin = new pc.Vec4( i949[79], i949[80], i949[81], i949[82] )
  i948.m_isUsingLegacyAnimationComponent = !!i949[83]
  i948.m_isVolumetricText = !!i949[84]
  request.r(i949[85], i949[86], 0, i948, 'm_Material')
  i948.m_Maskable = !!i949[87]
  i948.m_Color = new pc.Color(i949[88], i949[89], i949[90], i949[91])
  i948.m_RaycastTarget = !!i949[92]
  i948.m_RaycastPadding = new pc.Vec4( i949[93], i949[94], i949[95], i949[96] )
  return i948
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.VertexGradient' )
  var i955 = data
  i954.topLeft = new pc.Color(i955[0], i955[1], i955[2], i955[3])
  i954.topRight = new pc.Color(i955[4], i955[5], i955[6], i955[7])
  i954.bottomLeft = new pc.Color(i955[8], i955[9], i955[10], i955[11])
  i954.bottomRight = new pc.Color(i955[12], i955[13], i955[14], i955[15])
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i957 = data
  i956.name = i957[0]
  i956.width = i957[1]
  i956.height = i957[2]
  i956.mipmapCount = i957[3]
  i956.anisoLevel = i957[4]
  i956.filterMode = i957[5]
  i956.hdr = !!i957[6]
  i956.format = i957[7]
  i956.wrapMode = i957[8]
  i956.alphaIsTransparency = !!i957[9]
  i956.alphaSource = i957[10]
  i956.graphicsFormat = i957[11]
  i956.sRGBTexture = !!i957[12]
  i956.desiredColorSpace = i957[13]
  i956.wrapU = i957[14]
  i956.wrapV = i957[15]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i959 = data
  i958.name = i959[0]
  i958.halfPrecision = !!i959[1]
  i958.useUInt32IndexFormat = !!i959[2]
  i958.vertexCount = i959[3]
  i958.aabb = i959[4]
  var i961 = i959[5]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( !!i961[i + 0] );
  }
  i958.streams = i960
  i958.vertices = i959[6]
  var i963 = i959[7]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i963[i + 0]) );
  }
  i958.subMeshes = i962
  var i965 = i959[8]
  var i964 = []
  for(var i = 0; i < i965.length; i += 16) {
    i964.push( new pc.Mat4().setData(i965[i + 0], i965[i + 1], i965[i + 2], i965[i + 3],  i965[i + 4], i965[i + 5], i965[i + 6], i965[i + 7],  i965[i + 8], i965[i + 9], i965[i + 10], i965[i + 11],  i965[i + 12], i965[i + 13], i965[i + 14], i965[i + 15]) );
  }
  i958.bindposes = i964
  var i967 = i959[9]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i967[i + 0]) );
  }
  i958.blendShapes = i966
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i973 = data
  i972.triangles = i973[0]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i979 = data
  i978.name = i979[0]
  var i981 = i979[1]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i981[i + 0]) );
  }
  i978.frames = i980
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i985 = data
  i984.weight = i985[0]
  i984.vertices = i985[1]
  i984.normals = i985[2]
  i984.tangents = i985[3]
  return i984
}

Deserializers["_HoleMoney.Scripts.Game.Row"] = function (request, data, root) {
  var i986 = root || request.c( '_HoleMoney.Scripts.Game.Row' )
  var i987 = data
  var i989 = i987[0]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Tile')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.tiles = i988
  return i986
}

Deserializers["_HoleMoney.Scripts.Game.Tile"] = function (request, data, root) {
  var i992 = root || request.c( '_HoleMoney.Scripts.Game.Tile' )
  var i993 = data
  i992.isEmpty = !!i993[0]
  i992.gridPosition = new pc.Vec2( i993[1], i993[2] )
  request.r(i993[3], i993[4], 0, i992, 'childCoin')
  request.r(i993[5], i993[6], 0, i992, 'childIceBox')
  i992.isHidden = !!i993[7]
  i992.isEmptyAfterCoinMove = !!i993[8]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i995 = data
  i994.center = new pc.Vec3( i995[0], i995[1], i995[2] )
  i994.size = new pc.Vec3( i995[3], i995[4], i995[5] )
  i994.enabled = !!i995[6]
  i994.isTrigger = !!i995[7]
  request.r(i995[8], i995[9], 0, i994, 'material')
  return i994
}

Deserializers["_HoleMoney.Scripts.UI.UIBoosterBase"] = function (request, data, root) {
  var i996 = root || request.c( '_HoleMoney.Scripts.UI.UIBoosterBase' )
  var i997 = data
  i996.boosterType = i997[0]
  i996.levelToUnlock = i997[1]
  i996.costPerUse = i997[2]
  request.r(i997[3], i997[4], 0, i996, 'unlockPanel')
  request.r(i997[5], i997[6], 0, i996, 'buyPanel')
  request.r(i997[7], i997[8], 0, i996, 'handTut')
  request.r(i997[9], i997[10], 0, i996, 'icon')
  request.r(i997[11], i997[12], 0, i996, 'unlocked')
  request.r(i997[13], i997[14], 0, i996, 'locked')
  request.r(i997[15], i997[16], 0, i996, 'canUse')
  request.r(i997[17], i997[18], 0, i996, 'cannotUse')
  request.r(i997[19], i997[20], 0, i996, 'amountText')
  request.r(i997[21], i997[22], 0, i996, 'plusText')
  request.r(i997[23], i997[24], 0, i996, 'levelToUnlockText')
  request.r(i997[25], i997[26], 0, i996, 'tutorialPanel')
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i999 = data
  i998.cullTransparentMesh = !!i999[0]
  return i998
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1000 = root || request.c( 'UnityEngine.UI.Image' )
  var i1001 = data
  request.r(i1001[0], i1001[1], 0, i1000, 'm_Sprite')
  i1000.m_Type = i1001[2]
  i1000.m_PreserveAspect = !!i1001[3]
  i1000.m_FillCenter = !!i1001[4]
  i1000.m_FillMethod = i1001[5]
  i1000.m_FillAmount = i1001[6]
  i1000.m_FillClockwise = !!i1001[7]
  i1000.m_FillOrigin = i1001[8]
  i1000.m_UseSpriteMesh = !!i1001[9]
  i1000.m_PixelsPerUnitMultiplier = i1001[10]
  request.r(i1001[11], i1001[12], 0, i1000, 'm_Material')
  i1000.m_Maskable = !!i1001[13]
  i1000.m_Color = new pc.Color(i1001[14], i1001[15], i1001[16], i1001[17])
  i1000.m_RaycastTarget = !!i1001[18]
  i1000.m_RaycastPadding = new pc.Vec4( i1001[19], i1001[20], i1001[21], i1001[22] )
  return i1000
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1002 = root || request.c( 'UnityEngine.UI.Button' )
  var i1003 = data
  i1002.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1003[0], i1002.m_OnClick)
  i1002.m_Navigation = request.d('UnityEngine.UI.Navigation', i1003[1], i1002.m_Navigation)
  i1002.m_Transition = i1003[2]
  i1002.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1003[3], i1002.m_Colors)
  i1002.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1003[4], i1002.m_SpriteState)
  i1002.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1003[5], i1002.m_AnimationTriggers)
  i1002.m_Interactable = !!i1003[6]
  request.r(i1003[7], i1003[8], 0, i1002, 'm_TargetGraphic')
  return i1002
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1004 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1005 = data
  i1004.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1005[0], i1004.m_PersistentCalls)
  return i1004
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1006 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1007 = data
  request.r(i1007[0], i1007[1], 0, i1006, 'm_ObjectArgument')
  i1006.m_ObjectArgumentAssemblyTypeName = i1007[2]
  i1006.m_IntArgument = i1007[3]
  i1006.m_FloatArgument = i1007[4]
  i1006.m_StringArgument = i1007[5]
  i1006.m_BoolArgument = !!i1007[6]
  return i1006
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1008 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1009 = data
  i1008.m_Mode = i1009[0]
  i1008.m_WrapAround = !!i1009[1]
  request.r(i1009[2], i1009[3], 0, i1008, 'm_SelectOnUp')
  request.r(i1009[4], i1009[5], 0, i1008, 'm_SelectOnDown')
  request.r(i1009[6], i1009[7], 0, i1008, 'm_SelectOnLeft')
  request.r(i1009[8], i1009[9], 0, i1008, 'm_SelectOnRight')
  return i1008
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1010 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1011 = data
  i1010.m_NormalColor = new pc.Color(i1011[0], i1011[1], i1011[2], i1011[3])
  i1010.m_HighlightedColor = new pc.Color(i1011[4], i1011[5], i1011[6], i1011[7])
  i1010.m_PressedColor = new pc.Color(i1011[8], i1011[9], i1011[10], i1011[11])
  i1010.m_SelectedColor = new pc.Color(i1011[12], i1011[13], i1011[14], i1011[15])
  i1010.m_DisabledColor = new pc.Color(i1011[16], i1011[17], i1011[18], i1011[19])
  i1010.m_ColorMultiplier = i1011[20]
  i1010.m_FadeDuration = i1011[21]
  return i1010
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1012 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1013 = data
  request.r(i1013[0], i1013[1], 0, i1012, 'm_HighlightedSprite')
  request.r(i1013[2], i1013[3], 0, i1012, 'm_PressedSprite')
  request.r(i1013[4], i1013[5], 0, i1012, 'm_SelectedSprite')
  request.r(i1013[6], i1013[7], 0, i1012, 'm_DisabledSprite')
  return i1012
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1015 = data
  i1014.m_NormalTrigger = i1015[0]
  i1014.m_HighlightedTrigger = i1015[1]
  i1014.m_PressedTrigger = i1015[2]
  i1014.m_SelectedTrigger = i1015[3]
  i1014.m_DisabledTrigger = i1015[4]
  return i1014
}

Deserializers["CrazyLabsExtension.HapticFeedbackUIButton"] = function (request, data, root) {
  var i1016 = root || request.c( 'CrazyLabsExtension.HapticFeedbackUIButton' )
  var i1017 = data
  i1016._hapticType = i1017[0]
  return i1016
}

Deserializers["Base.UI.UIButtonBase"] = function (request, data, root) {
  var i1018 = root || request.c( 'Base.UI.UIButtonBase' )
  var i1019 = data
  return i1018
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1021 = data
  i1020.m_hasFontAssetChanged = !!i1021[0]
  request.r(i1021[1], i1021[2], 0, i1020, 'm_baseMaterial')
  i1020.m_maskOffset = new pc.Vec4( i1021[3], i1021[4], i1021[5], i1021[6] )
  i1020.m_text = i1021[7]
  i1020.m_isRightToLeft = !!i1021[8]
  request.r(i1021[9], i1021[10], 0, i1020, 'm_fontAsset')
  request.r(i1021[11], i1021[12], 0, i1020, 'm_sharedMaterial')
  var i1023 = i1021[13]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 2) {
  request.r(i1023[i + 0], i1023[i + 1], 2, i1022, '')
  }
  i1020.m_fontSharedMaterials = i1022
  request.r(i1021[14], i1021[15], 0, i1020, 'm_fontMaterial')
  var i1025 = i1021[16]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 2) {
  request.r(i1025[i + 0], i1025[i + 1], 2, i1024, '')
  }
  i1020.m_fontMaterials = i1024
  i1020.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1021[17], i1021[18], i1021[19], i1021[20])
  i1020.m_fontColor = new pc.Color(i1021[21], i1021[22], i1021[23], i1021[24])
  i1020.m_enableVertexGradient = !!i1021[25]
  i1020.m_colorMode = i1021[26]
  i1020.m_fontColorGradient = request.d('TMPro.VertexGradient', i1021[27], i1020.m_fontColorGradient)
  request.r(i1021[28], i1021[29], 0, i1020, 'm_fontColorGradientPreset')
  request.r(i1021[30], i1021[31], 0, i1020, 'm_spriteAsset')
  i1020.m_tintAllSprites = !!i1021[32]
  request.r(i1021[33], i1021[34], 0, i1020, 'm_StyleSheet')
  i1020.m_TextStyleHashCode = i1021[35]
  i1020.m_overrideHtmlColors = !!i1021[36]
  i1020.m_faceColor = UnityEngine.Color32.ConstructColor(i1021[37], i1021[38], i1021[39], i1021[40])
  i1020.m_fontSize = i1021[41]
  i1020.m_fontSizeBase = i1021[42]
  i1020.m_fontWeight = i1021[43]
  i1020.m_enableAutoSizing = !!i1021[44]
  i1020.m_fontSizeMin = i1021[45]
  i1020.m_fontSizeMax = i1021[46]
  i1020.m_fontStyle = i1021[47]
  i1020.m_HorizontalAlignment = i1021[48]
  i1020.m_VerticalAlignment = i1021[49]
  i1020.m_textAlignment = i1021[50]
  i1020.m_characterSpacing = i1021[51]
  i1020.m_wordSpacing = i1021[52]
  i1020.m_lineSpacing = i1021[53]
  i1020.m_lineSpacingMax = i1021[54]
  i1020.m_paragraphSpacing = i1021[55]
  i1020.m_charWidthMaxAdj = i1021[56]
  i1020.m_enableWordWrapping = !!i1021[57]
  i1020.m_wordWrappingRatios = i1021[58]
  i1020.m_overflowMode = i1021[59]
  request.r(i1021[60], i1021[61], 0, i1020, 'm_linkedTextComponent')
  request.r(i1021[62], i1021[63], 0, i1020, 'parentLinkedComponent')
  i1020.m_enableKerning = !!i1021[64]
  i1020.m_enableExtraPadding = !!i1021[65]
  i1020.checkPaddingRequired = !!i1021[66]
  i1020.m_isRichText = !!i1021[67]
  i1020.m_parseCtrlCharacters = !!i1021[68]
  i1020.m_isOrthographic = !!i1021[69]
  i1020.m_isCullingEnabled = !!i1021[70]
  i1020.m_horizontalMapping = i1021[71]
  i1020.m_verticalMapping = i1021[72]
  i1020.m_uvLineOffset = i1021[73]
  i1020.m_geometrySortingOrder = i1021[74]
  i1020.m_IsTextObjectScaleStatic = !!i1021[75]
  i1020.m_VertexBufferAutoSizeReduction = !!i1021[76]
  i1020.m_useMaxVisibleDescender = !!i1021[77]
  i1020.m_pageToDisplay = i1021[78]
  i1020.m_margin = new pc.Vec4( i1021[79], i1021[80], i1021[81], i1021[82] )
  i1020.m_isUsingLegacyAnimationComponent = !!i1021[83]
  i1020.m_isVolumetricText = !!i1021[84]
  request.r(i1021[85], i1021[86], 0, i1020, 'm_Material')
  i1020.m_Maskable = !!i1021[87]
  i1020.m_Color = new pc.Color(i1021[88], i1021[89], i1021[90], i1021[91])
  i1020.m_RaycastTarget = !!i1021[92]
  i1020.m_RaycastPadding = new pc.Vec4( i1021[93], i1021[94], i1021[95], i1021[96] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1027 = data
  i1026.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1027[0], i1026.main)
  i1026.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1027[1], i1026.colorBySpeed)
  i1026.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1027[2], i1026.colorOverLifetime)
  i1026.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1027[3], i1026.emission)
  i1026.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1027[4], i1026.rotationBySpeed)
  i1026.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1027[5], i1026.rotationOverLifetime)
  i1026.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1027[6], i1026.shape)
  i1026.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1027[7], i1026.sizeBySpeed)
  i1026.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1027[8], i1026.sizeOverLifetime)
  i1026.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1027[9], i1026.textureSheetAnimation)
  i1026.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1027[10], i1026.velocityOverLifetime)
  i1026.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1027[11], i1026.noise)
  i1026.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1027[12], i1026.inheritVelocity)
  i1026.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1027[13], i1026.forceOverLifetime)
  i1026.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1027[14], i1026.limitVelocityOverLifetime)
  i1026.useAutoRandomSeed = !!i1027[15]
  i1026.randomSeed = i1027[16]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1028 = root || new pc.ParticleSystemMain()
  var i1029 = data
  i1028.duration = i1029[0]
  i1028.loop = !!i1029[1]
  i1028.prewarm = !!i1029[2]
  i1028.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[3], i1028.startDelay)
  i1028.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[4], i1028.startLifetime)
  i1028.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[5], i1028.startSpeed)
  i1028.startSize3D = !!i1029[6]
  i1028.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[7], i1028.startSizeX)
  i1028.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[8], i1028.startSizeY)
  i1028.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[9], i1028.startSizeZ)
  i1028.startRotation3D = !!i1029[10]
  i1028.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[11], i1028.startRotationX)
  i1028.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[12], i1028.startRotationY)
  i1028.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[13], i1028.startRotationZ)
  i1028.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1029[14], i1028.startColor)
  i1028.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1029[15], i1028.gravityModifier)
  i1028.simulationSpace = i1029[16]
  request.r(i1029[17], i1029[18], 0, i1028, 'customSimulationSpace')
  i1028.simulationSpeed = i1029[19]
  i1028.useUnscaledTime = !!i1029[20]
  i1028.scalingMode = i1029[21]
  i1028.playOnAwake = !!i1029[22]
  i1028.maxParticles = i1029[23]
  i1028.emitterVelocityMode = i1029[24]
  i1028.stopAction = i1029[25]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1030 = root || new pc.MinMaxCurve()
  var i1031 = data
  i1030.mode = i1031[0]
  i1030.curveMin = new pc.AnimationCurve( { keys_flow: i1031[1] } )
  i1030.curveMax = new pc.AnimationCurve( { keys_flow: i1031[2] } )
  i1030.curveMultiplier = i1031[3]
  i1030.constantMin = i1031[4]
  i1030.constantMax = i1031[5]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1032 = root || new pc.MinMaxGradient()
  var i1033 = data
  i1032.mode = i1033[0]
  i1032.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1033[1], i1032.gradientMin)
  i1032.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1033[2], i1032.gradientMax)
  i1032.colorMin = new pc.Color(i1033[3], i1033[4], i1033[5], i1033[6])
  i1032.colorMax = new pc.Color(i1033[7], i1033[8], i1033[9], i1033[10])
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1035 = data
  i1034.mode = i1035[0]
  var i1037 = i1035[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1037[i + 0]) );
  }
  i1034.colorKeys = i1036
  var i1039 = i1035[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1039[i + 0]) );
  }
  i1034.alphaKeys = i1038
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1040 = root || new pc.ParticleSystemColorBySpeed()
  var i1041 = data
  i1040.enabled = !!i1041[0]
  i1040.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1041[1], i1040.color)
  i1040.range = new pc.Vec2( i1041[2], i1041[3] )
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1045 = data
  i1044.color = new pc.Color(i1045[0], i1045[1], i1045[2], i1045[3])
  i1044.time = i1045[4]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1049 = data
  i1048.alpha = i1049[0]
  i1048.time = i1049[1]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1050 = root || new pc.ParticleSystemColorOverLifetime()
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1051[1], i1050.color)
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1052 = root || new pc.ParticleSystemEmitter()
  var i1053 = data
  i1052.enabled = !!i1053[0]
  i1052.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[1], i1052.rateOverTime)
  i1052.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1053[2], i1052.rateOverDistance)
  var i1055 = i1053[3]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1055[i + 0]) );
  }
  i1052.bursts = i1054
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1058 = root || new pc.ParticleSystemBurst()
  var i1059 = data
  i1058.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1059[0], i1058.count)
  i1058.cycleCount = i1059[1]
  i1058.minCount = i1059[2]
  i1058.maxCount = i1059[3]
  i1058.repeatInterval = i1059[4]
  i1058.time = i1059[5]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1060 = root || new pc.ParticleSystemRotationBySpeed()
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[1], i1060.x)
  i1060.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[2], i1060.y)
  i1060.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1061[3], i1060.z)
  i1060.separateAxes = !!i1061[4]
  i1060.range = new pc.Vec2( i1061[5], i1061[6] )
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1062 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1063 = data
  i1062.enabled = !!i1063[0]
  i1062.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[1], i1062.x)
  i1062.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[2], i1062.y)
  i1062.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1063[3], i1062.z)
  i1062.separateAxes = !!i1063[4]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1064 = root || new pc.ParticleSystemShape()
  var i1065 = data
  i1064.enabled = !!i1065[0]
  i1064.shapeType = i1065[1]
  i1064.randomDirectionAmount = i1065[2]
  i1064.sphericalDirectionAmount = i1065[3]
  i1064.randomPositionAmount = i1065[4]
  i1064.alignToDirection = !!i1065[5]
  i1064.radius = i1065[6]
  i1064.radiusMode = i1065[7]
  i1064.radiusSpread = i1065[8]
  i1064.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[9], i1064.radiusSpeed)
  i1064.radiusThickness = i1065[10]
  i1064.angle = i1065[11]
  i1064.length = i1065[12]
  i1064.boxThickness = new pc.Vec3( i1065[13], i1065[14], i1065[15] )
  i1064.meshShapeType = i1065[16]
  request.r(i1065[17], i1065[18], 0, i1064, 'mesh')
  request.r(i1065[19], i1065[20], 0, i1064, 'meshRenderer')
  request.r(i1065[21], i1065[22], 0, i1064, 'skinnedMeshRenderer')
  i1064.useMeshMaterialIndex = !!i1065[23]
  i1064.meshMaterialIndex = i1065[24]
  i1064.useMeshColors = !!i1065[25]
  i1064.normalOffset = i1065[26]
  i1064.arc = i1065[27]
  i1064.arcMode = i1065[28]
  i1064.arcSpread = i1065[29]
  i1064.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1065[30], i1064.arcSpeed)
  i1064.donutRadius = i1065[31]
  i1064.position = new pc.Vec3( i1065[32], i1065[33], i1065[34] )
  i1064.rotation = new pc.Vec3( i1065[35], i1065[36], i1065[37] )
  i1064.scale = new pc.Vec3( i1065[38], i1065[39], i1065[40] )
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1066 = root || new pc.ParticleSystemSizeBySpeed()
  var i1067 = data
  i1066.enabled = !!i1067[0]
  i1066.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[1], i1066.x)
  i1066.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[2], i1066.y)
  i1066.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1067[3], i1066.z)
  i1066.separateAxes = !!i1067[4]
  i1066.range = new pc.Vec2( i1067[5], i1067[6] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1068 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[1], i1068.x)
  i1068.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[2], i1068.y)
  i1068.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1069[3], i1068.z)
  i1068.separateAxes = !!i1069[4]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1070 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1071 = data
  i1070.enabled = !!i1071[0]
  i1070.mode = i1071[1]
  i1070.animation = i1071[2]
  i1070.numTilesX = i1071[3]
  i1070.numTilesY = i1071[4]
  i1070.useRandomRow = !!i1071[5]
  i1070.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1071[6], i1070.frameOverTime)
  i1070.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1071[7], i1070.startFrame)
  i1070.cycleCount = i1071[8]
  i1070.rowIndex = i1071[9]
  i1070.flipU = i1071[10]
  i1070.flipV = i1071[11]
  i1070.spriteCount = i1071[12]
  var i1073 = i1071[13]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 2) {
  request.r(i1073[i + 0], i1073[i + 1], 2, i1072, '')
  }
  i1070.sprites = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1076 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1077 = data
  i1076.enabled = !!i1077[0]
  i1076.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[1], i1076.x)
  i1076.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[2], i1076.y)
  i1076.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[3], i1076.z)
  i1076.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[4], i1076.radial)
  i1076.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[5], i1076.speedModifier)
  i1076.space = i1077[6]
  i1076.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[7], i1076.orbitalX)
  i1076.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[8], i1076.orbitalY)
  i1076.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[9], i1076.orbitalZ)
  i1076.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[10], i1076.orbitalOffsetX)
  i1076.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[11], i1076.orbitalOffsetY)
  i1076.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1077[12], i1076.orbitalOffsetZ)
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1078 = root || new pc.ParticleSystemNoise()
  var i1079 = data
  i1078.enabled = !!i1079[0]
  i1078.separateAxes = !!i1079[1]
  i1078.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[2], i1078.strengthX)
  i1078.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[3], i1078.strengthY)
  i1078.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[4], i1078.strengthZ)
  i1078.frequency = i1079[5]
  i1078.damping = !!i1079[6]
  i1078.octaveCount = i1079[7]
  i1078.octaveMultiplier = i1079[8]
  i1078.octaveScale = i1079[9]
  i1078.quality = i1079[10]
  i1078.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[11], i1078.scrollSpeed)
  i1078.scrollSpeedMultiplier = i1079[12]
  i1078.remapEnabled = !!i1079[13]
  i1078.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[14], i1078.remapX)
  i1078.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[15], i1078.remapY)
  i1078.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[16], i1078.remapZ)
  i1078.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[17], i1078.positionAmount)
  i1078.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[18], i1078.rotationAmount)
  i1078.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1079[19], i1078.sizeAmount)
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1080 = root || new pc.ParticleSystemInheritVelocity()
  var i1081 = data
  i1080.enabled = !!i1081[0]
  i1080.mode = i1081[1]
  i1080.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1081[2], i1080.curve)
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1082 = root || new pc.ParticleSystemForceOverLifetime()
  var i1083 = data
  i1082.enabled = !!i1083[0]
  i1082.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1083[1], i1082.x)
  i1082.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1083[2], i1082.y)
  i1082.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1083[3], i1082.z)
  i1082.space = i1083[4]
  i1082.randomized = !!i1083[5]
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1084 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1085 = data
  i1084.enabled = !!i1085[0]
  i1084.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1085[1], i1084.limit)
  i1084.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1085[2], i1084.limitX)
  i1084.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1085[3], i1084.limitY)
  i1084.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1085[4], i1084.limitZ)
  i1084.dampen = i1085[5]
  i1084.separateAxes = !!i1085[6]
  i1084.space = i1085[7]
  i1084.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1085[8], i1084.drag)
  i1084.multiplyDragByParticleSize = !!i1085[9]
  i1084.multiplyDragByParticleVelocity = !!i1085[10]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1087 = data
  i1086.enabled = !!i1087[0]
  request.r(i1087[1], i1087[2], 0, i1086, 'sharedMaterial')
  var i1089 = i1087[3]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 2) {
  request.r(i1089[i + 0], i1089[i + 1], 2, i1088, '')
  }
  i1086.sharedMaterials = i1088
  i1086.receiveShadows = !!i1087[4]
  i1086.shadowCastingMode = i1087[5]
  i1086.sortingLayerID = i1087[6]
  i1086.sortingOrder = i1087[7]
  i1086.lightmapIndex = i1087[8]
  i1086.lightmapSceneIndex = i1087[9]
  i1086.lightmapScaleOffset = new pc.Vec4( i1087[10], i1087[11], i1087[12], i1087[13] )
  i1086.lightProbeUsage = i1087[14]
  i1086.reflectionProbeUsage = i1087[15]
  request.r(i1087[16], i1087[17], 0, i1086, 'mesh')
  i1086.meshCount = i1087[18]
  i1086.activeVertexStreamsCount = i1087[19]
  i1086.alignment = i1087[20]
  i1086.renderMode = i1087[21]
  i1086.sortMode = i1087[22]
  i1086.lengthScale = i1087[23]
  i1086.velocityScale = i1087[24]
  i1086.cameraVelocityScale = i1087[25]
  i1086.normalDirection = i1087[26]
  i1086.sortingFudge = i1087[27]
  i1086.minParticleSize = i1087[28]
  i1086.maxParticleSize = i1087[29]
  i1086.pivot = new pc.Vec3( i1087[30], i1087[31], i1087[32] )
  request.r(i1087[33], i1087[34], 0, i1086, 'trailMaterial')
  return i1086
}

Deserializers["_HoleMoney.Scripts.Managers.CenterDataManager"] = function (request, data, root) {
  var i1090 = root || request.c( '_HoleMoney.Scripts.Managers.CenterDataManager' )
  var i1091 = data
  request.r(i1091[0], i1091[1], 0, i1090, 'gameData')
  request.r(i1091[2], i1091[3], 0, i1090, 'mapData')
  request.r(i1091[4], i1091[5], 0, i1090, 'currentLevelData')
  request.r(i1091[6], i1091[7], 0, i1090, 'materialsSo')
  request.r(i1091[8], i1091[9], 0, i1090, 'levelDesigner')
  request.r(i1091[10], i1091[11], 0, i1090, 'prefabSo')
  request.r(i1091[12], i1091[13], 0, i1090, 'skinSo')
  request.r(i1091[14], i1091[15], 0, i1090, 'mapSo')
  return i1090
}

Deserializers["_HoleMoney.Scripts.Game.Hole"] = function (request, data, root) {
  var i1092 = root || request.c( '_HoleMoney.Scripts.Game.Hole' )
  var i1093 = data
  i1092.colorType = i1093[0]
  i1092.originalColorType = i1093[1]
  request.r(i1093[2], i1093[3], 0, i1092, 'pointToDropCoin')
  request.r(i1093[4], i1093[5], 0, i1092, 'skinnedMeshRenderer')
  request.r(i1093[6], i1093[7], 0, i1092, 'meshRendererRainbow')
  request.r(i1093[8], i1093[9], 0, i1092, 'pitMeshRenderer')
  request.r(i1093[10], i1093[11], 0, i1092, 'audioSource')
  var i1095 = i1093[12]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Tile')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1092.targetTiles = i1094
  var i1097 = i1093[13]
  var i1096 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Tile')))
  for(var i = 0; i < i1097.length; i += 2) {
  request.r(i1097[i + 0], i1097[i + 1], 1, i1096, '')
  }
  i1092.lockTiles = i1096
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'clip')
  request.r(i1099[2], i1099[3], 0, i1098, 'outputAudioMixerGroup')
  i1098.playOnAwake = !!i1099[4]
  i1098.loop = !!i1099[5]
  i1098.time = i1099[6]
  i1098.volume = i1099[7]
  i1098.pitch = i1099[8]
  i1098.enabled = !!i1099[9]
  return i1098
}

Deserializers["Base.Internal.SoundFx"] = function (request, data, root) {
  var i1100 = root || request.c( 'Base.Internal.SoundFx' )
  var i1101 = data
  return i1100
}

Deserializers["_HoleMoney.Scripts.Game.Coin"] = function (request, data, root) {
  var i1102 = root || request.c( '_HoleMoney.Scripts.Game.Coin' )
  var i1103 = data
  i1102.colorType = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'meshRenderer')
  request.r(i1103[3], i1103[4], 0, i1102, 'animator')
  request.r(i1103[5], i1103[6], 0, i1102, 'smokeParticle')
  request.r(i1103[7], i1103[8], 0, i1102, 'audioSource')
  request.r(i1103[9], i1103[10], 0, i1102, 'hiddenCoin')
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1105 = data
  request.r(i1105[0], i1105[1], 0, i1104, 'animatorController')
  request.r(i1105[2], i1105[3], 0, i1104, 'avatar')
  i1104.updateMode = i1105[4]
  i1104.hasTransformHierarchy = !!i1105[5]
  i1104.applyRootMotion = !!i1105[6]
  var i1107 = i1105[7]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1104.humanBones = i1106
  i1104.enabled = !!i1105[8]
  return i1104
}

Deserializers["_HoleMoney.Scripts.Game.Pig"] = function (request, data, root) {
  var i1108 = root || request.c( '_HoleMoney.Scripts.Game.Pig' )
  var i1109 = data
  i1108.colorType = i1109[0]
  i1108.maxCoinCount = i1109[1]
  request.r(i1109[2], i1109[3], 0, i1108, 'positionToDropCoin')
  request.r(i1109[4], i1109[5], 0, i1108, 'endPoint')
  request.r(i1109[6], i1109[7], 0, i1108, 'coinCountText')
  i1108.isDropping = !!i1109[8]
  request.r(i1109[9], i1109[10], 0, i1108, 'audioSource')
  request.r(i1109[11], i1109[12], 0, i1108, 'coinBag')
  request.r(i1109[13], i1109[14], 0, i1108, 'skinnedMeshRenderer')
  request.r(i1109[15], i1109[16], 0, i1108, 'dropParticle')
  return i1108
}

Deserializers["Base.DotweenAnimations.BounceAnimation"] = function (request, data, root) {
  var i1110 = root || request.c( 'Base.DotweenAnimations.BounceAnimation' )
  var i1111 = data
  i1110.bounceDuration = i1111[0]
  i1110.bounceDelay = i1111[1]
  i1110.bounceScale = new pc.Vec3( i1111[2], i1111[3], i1111[4] )
  i1110.playOnStart = !!i1111[5]
  i1110.isLooping = !!i1111[6]
  i1110.easeType = i1111[7]
  return i1110
}

Deserializers["Base.Internal.TimeToDeactivate"] = function (request, data, root) {
  var i1112 = root || request.c( 'Base.Internal.TimeToDeactivate' )
  var i1113 = data
  i1112.lifeTime = i1113[0]
  return i1112
}

Deserializers["_HoleMoney.Scripts.Game.IceBox"] = function (request, data, root) {
  var i1114 = root || request.c( '_HoleMoney.Scripts.Game.IceBox' )
  var i1115 = data
  i1114.maxLockValue = i1115[0]
  i1114.lockValue = i1115[1]
  request.r(i1115[2], i1115[3], 0, i1114, 'lockValueText')
  request.r(i1115[4], i1115[5], 0, i1114, 'highIce')
  request.r(i1115[6], i1115[7], 0, i1114, 'lowIce')
  request.r(i1115[8], i1115[9], 0, i1114, 'mediumIce')
  request.r(i1115[10], i1115[11], 0, i1114, 'effectIce')
  request.r(i1115[12], i1115[13], 0, i1114, 'audioSource')
  return i1114
}

Deserializers["_HoleMoney.Scripts.UI.GhostTrailUI"] = function (request, data, root) {
  var i1116 = root || request.c( '_HoleMoney.Scripts.UI.GhostTrailUI' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'coinImage')
  request.r(i1117[2], i1117[3], 0, i1116, 'ghostPrefab')
  i1116.spawnInterval = i1117[4]
  i1116.ghostLifetime = i1117[5]
  return i1116
}

Deserializers["Base.UI.Build.IslandController"] = function (request, data, root) {
  var i1118 = root || request.c( 'Base.UI.Build.IslandController' )
  var i1119 = data
  i1118.islandID = i1119[0]
  var i1121 = i1119[1]
  var i1120 = new (System.Collections.Generic.List$1(Bridge.ns('Base.UI.Build.TowerController')))
  for(var i = 0; i < i1121.length; i += 2) {
  request.r(i1121[i + 0], i1121[i + 1], 1, i1120, '')
  }
  i1118.towerControllers = i1120
  return i1118
}

Deserializers["Base.UI.Build.TowerController"] = function (request, data, root) {
  var i1124 = root || request.c( 'Base.UI.Build.TowerController' )
  var i1125 = data
  i1124.towerID = i1125[0]
  var i1127 = i1125[1]
  var i1126 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1127.length; i += 2) {
  request.r(i1127[i + 0], i1127[i + 1], 1, i1126, '')
  }
  i1124.buildPoints = i1126
  request.r(i1125[2], i1125[3], 0, i1124, 'towerBrickAmount')
  request.r(i1125[4], i1125[5], 0, i1124, 'towerMeshRenderer')
  return i1124
}

Deserializers["Base.UI.Build.SetHeight"] = function (request, data, root) {
  var i1130 = root || request.c( 'Base.UI.Build.SetHeight' )
  var i1131 = data
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1133 = data
  i1132.enabled = !!i1133[0]
  i1132.planeDistance = i1133[1]
  i1132.referencePixelsPerUnit = i1133[2]
  i1132.isFallbackOverlay = !!i1133[3]
  i1132.renderMode = i1133[4]
  i1132.renderOrder = i1133[5]
  i1132.sortingLayerName = i1133[6]
  i1132.sortingOrder = i1133[7]
  i1132.scaleFactor = i1133[8]
  request.r(i1133[9], i1133[10], 0, i1132, 'worldCamera')
  i1132.overrideSorting = !!i1133[11]
  i1132.pixelPerfect = !!i1133[12]
  i1132.targetDisplay = i1133[13]
  i1132.overridePixelPerfect = !!i1133[14]
  return i1132
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1135 = data
  i1134.m_UiScaleMode = i1135[0]
  i1134.m_ReferencePixelsPerUnit = i1135[1]
  i1134.m_ScaleFactor = i1135[2]
  i1134.m_ReferenceResolution = new pc.Vec2( i1135[3], i1135[4] )
  i1134.m_ScreenMatchMode = i1135[5]
  i1134.m_MatchWidthOrHeight = i1135[6]
  i1134.m_PhysicalUnit = i1135[7]
  i1134.m_FallbackScreenDPI = i1135[8]
  i1134.m_DefaultSpriteDPI = i1135[9]
  i1134.m_DynamicPixelsPerUnit = i1135[10]
  i1134.m_PresetInfoIsWorld = !!i1135[11]
  return i1134
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1137 = data
  i1136.m_IgnoreReversedGraphics = !!i1137[0]
  i1136.m_BlockingObjects = i1137[1]
  i1136.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1137[2] )
  return i1136
}

Deserializers["Base.UI.Build.UITowerBrickAmount"] = function (request, data, root) {
  var i1138 = root || request.c( 'Base.UI.Build.UITowerBrickAmount' )
  var i1139 = data
  request.r(i1139[0], i1139[1], 0, i1138, 'amountText')
  return i1138
}

Deserializers["_HoleMoney.Scripts.Managers.AudioManager"] = function (request, data, root) {
  var i1140 = root || request.c( '_HoleMoney.Scripts.Managers.AudioManager' )
  var i1141 = data
  request.r(i1141[0], i1141[1], 0, i1140, 'backgroundMusic')
  request.r(i1141[2], i1141[3], 0, i1140, 'coinDropAudioSource')
  request.r(i1141[4], i1141[5], 0, i1140, 'uiClickAudioSource')
  return i1140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1143 = data
  i1142.name = i1143[0]
  i1142.atlasId = i1143[1]
  i1142.mipmapCount = i1143[2]
  i1142.hdr = !!i1143[3]
  i1142.size = i1143[4]
  i1142.anisoLevel = i1143[5]
  i1142.filterMode = i1143[6]
  var i1145 = i1143[7]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 4) {
    i1144.push( UnityEngine.Rect.MinMaxRect(i1145[i + 0], i1145[i + 1], i1145[i + 2], i1145[i + 3]) );
  }
  i1142.rects = i1144
  i1142.wrapU = i1143[8]
  i1142.wrapV = i1143[9]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.index = i1149[1]
  i1148.startup = !!i1149[2]
  return i1148
}

Deserializers["Base.Internal.ActiveOnly3DLayoutGroup"] = function (request, data, root) {
  var i1150 = root || request.c( 'Base.Internal.ActiveOnly3DLayoutGroup' )
  var i1151 = data
  i1150.layoutAxis = i1151[0]
  i1150.alignment = i1151[1]
  i1150.spacing = i1151[2]
  i1150.autoUpdate = !!i1151[3]
  i1150.visibleCount = i1151[4]
  return i1150
}

Deserializers["_HoleMoney.Scripts.Game.TempSlotsManager"] = function (request, data, root) {
  var i1152 = root || request.c( '_HoleMoney.Scripts.Game.TempSlotsManager' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'layoutGroup')
  var i1155 = i1153[2]
  var i1154 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.TempSlot')))
  for(var i = 0; i < i1155.length; i += 2) {
  request.r(i1155[i + 0], i1155[i + 1], 1, i1154, '')
  }
  i1152.tempSlots = i1154
  return i1152
}

Deserializers["_HoleMoney.Scripts.Game.Grid"] = function (request, data, root) {
  var i1158 = root || request.c( '_HoleMoney.Scripts.Game.Grid' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Row')))
  for(var i = 0; i < i1161.length; i += 2) {
  request.r(i1161[i + 0], i1161[i + 1], 1, i1160, '')
  }
  i1158.rows = i1160
  return i1158
}

Deserializers["_HoleMoney.Scripts.Game.PigRowManager"] = function (request, data, root) {
  var i1164 = root || request.c( '_HoleMoney.Scripts.Game.PigRowManager' )
  var i1165 = data
  var i1167 = i1165[0]
  var i1166 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.PigRow')))
  for(var i = 0; i < i1167.length; i += 2) {
  request.r(i1167[i + 0], i1167[i + 1], 1, i1166, '')
  }
  i1164.pigRows = i1166
  request.r(i1165[1], i1165[2], 0, i1164, 'layoutGroup')
  return i1164
}

Deserializers["_HoleMoney.Scripts.Game.PigRow"] = function (request, data, root) {
  var i1170 = root || request.c( '_HoleMoney.Scripts.Game.PigRow' )
  var i1171 = data
  request.r(i1171[0], i1171[1], 0, i1170, 'layoutGroup')
  var i1173 = i1171[2]
  var i1172 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Pig')))
  for(var i = 0; i < i1173.length; i += 2) {
  request.r(i1173[i + 0], i1173[i + 1], 1, i1172, '')
  }
  i1170.pigs = i1172
  return i1170
}

Deserializers["_HoleMoney.Scripts.Game.BagBooster"] = function (request, data, root) {
  var i1176 = root || request.c( '_HoleMoney.Scripts.Game.BagBooster' )
  var i1177 = data
  request.r(i1177[0], i1177[1], 0, i1176, 'point1')
  request.r(i1177[2], i1177[3], 0, i1176, 'point2')
  request.r(i1177[4], i1177[5], 0, i1176, 'skinnedMeshRenderer')
  request.r(i1177[6], i1177[7], 0, i1176, 'spawnPoint')
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1179 = data
  i1178.enabled = !!i1179[0]
  i1178.aspect = i1179[1]
  i1178.orthographic = !!i1179[2]
  i1178.orthographicSize = i1179[3]
  i1178.backgroundColor = new pc.Color(i1179[4], i1179[5], i1179[6], i1179[7])
  i1178.nearClipPlane = i1179[8]
  i1178.farClipPlane = i1179[9]
  i1178.fieldOfView = i1179[10]
  i1178.depth = i1179[11]
  i1178.clearFlags = i1179[12]
  i1178.cullingMask = i1179[13]
  i1178.rect = i1179[14]
  request.r(i1179[15], i1179[16], 0, i1178, 'targetTexture')
  i1178.usePhysicalProperties = !!i1179[17]
  i1178.focalLength = i1179[18]
  i1178.sensorSize = new pc.Vec2( i1179[19], i1179[20] )
  i1178.lensShift = new pc.Vec2( i1179[21], i1179[22] )
  i1178.gateFit = i1179[23]
  i1178.commandBufferCount = i1179[24]
  i1178.cameraType = i1179[25]
  return i1178
}

Deserializers["_HoleMoney.Scripts.Managers.UIManager"] = function (request, data, root) {
  var i1180 = root || request.c( '_HoleMoney.Scripts.Managers.UIManager' )
  var i1181 = data
  request.r(i1181[0], i1181[1], 0, i1180, 'uiCanvas')
  request.r(i1181[2], i1181[3], 0, i1180, 'uiTop')
  request.r(i1181[4], i1181[5], 0, i1180, 'uiWin')
  request.r(i1181[6], i1181[7], 0, i1180, 'uiLose')
  request.r(i1181[8], i1181[9], 0, i1180, 'uiBoosters')
  return i1180
}

Deserializers["_HoleMoney.Scripts.UI.UITop"] = function (request, data, root) {
  var i1182 = root || request.c( '_HoleMoney.Scripts.UI.UITop' )
  var i1183 = data
  request.r(i1183[0], i1183[1], 0, i1182, 'levelText')
  return i1182
}

Deserializers["_HoleMoney.Scripts.UI.UIBoosters"] = function (request, data, root) {
  var i1184 = root || request.c( '_HoleMoney.Scripts.UI.UIBoosters' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'main')
  request.r(i1185[2], i1185[3], 0, i1184, 'holePanel')
  request.r(i1185[4], i1185[5], 0, i1184, 'bagPanel')
  request.r(i1185[6], i1185[7], 0, i1184, 'addSlotBooster')
  request.r(i1185[8], i1185[9], 0, i1184, 'holeBooster')
  request.r(i1185[10], i1185[11], 0, i1184, 'bagBooster')
  request.r(i1185[12], i1185[13], 0, i1184, 'buyAddSlotBooster')
  request.r(i1185[14], i1185[15], 0, i1184, 'buyHoleBooster')
  request.r(i1185[16], i1185[17], 0, i1184, 'buyBagBooster')
  return i1184
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1186 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1187 = data
  i1186.m_Spacing = i1187[0]
  i1186.m_ChildForceExpandWidth = !!i1187[1]
  i1186.m_ChildForceExpandHeight = !!i1187[2]
  i1186.m_ChildControlWidth = !!i1187[3]
  i1186.m_ChildControlHeight = !!i1187[4]
  i1186.m_ChildScaleWidth = !!i1187[5]
  i1186.m_ChildScaleHeight = !!i1187[6]
  i1186.m_ReverseArrangement = !!i1187[7]
  i1186.m_Padding = UnityEngine.RectOffset.FromPaddings(i1187[8], i1187[9], i1187[10], i1187[11])
  i1186.m_ChildAlignment = i1187[12]
  return i1186
}

Deserializers["DotweenAnimations.MoveAnimation"] = function (request, data, root) {
  var i1188 = root || request.c( 'DotweenAnimations.MoveAnimation' )
  var i1189 = data
  i1188.ease = i1189[0]
  i1188.distance = new pc.Vec2( i1189[1], i1189[2] )
  i1188.duration = i1189[3]
  i1188.delay = i1189[4]
  return i1188
}

Deserializers["_HoleMoney.Scripts.UI.UIWin"] = function (request, data, root) {
  var i1190 = root || request.c( '_HoleMoney.Scripts.UI.UIWin' )
  var i1191 = data
  request.r(i1191[0], i1191[1], 0, i1190, 'collectEffect')
  request.r(i1191[2], i1191[3], 0, i1190, 'winSoundFx')
  request.r(i1191[4], i1191[5], 0, i1190, 'rewardText')
  request.r(i1191[6], i1191[7], 0, i1190, 'coinText')
  request.r(i1191[8], i1191[9], 0, i1190, 'brickText')
  return i1190
}

Deserializers["Coffee.UIEffects.UIShiny"] = function (request, data, root) {
  var i1192 = root || request.c( 'Coffee.UIEffects.UIShiny' )
  var i1193 = data
  i1192.m_EffectFactor = i1193[0]
  i1192.m_Width = i1193[1]
  i1192.m_Rotation = i1193[2]
  i1192.m_Softness = i1193[3]
  i1192.m_Brightness = i1193[4]
  i1192.m_Gloss = i1193[5]
  i1192.m_EffectArea = i1193[6]
  i1192.m_Player = request.d('Coffee.UIEffects.EffectPlayer', i1193[7], i1192.m_Player)
  return i1192
}

Deserializers["Coffee.UIEffects.EffectPlayer"] = function (request, data, root) {
  var i1194 = root || request.c( 'Coffee.UIEffects.EffectPlayer' )
  var i1195 = data
  i1194.play = !!i1195[0]
  i1194.initialPlayDelay = i1195[1]
  i1194.duration = i1195[2]
  i1194.loop = !!i1195[3]
  i1194.loopDelay = i1195[4]
  i1194.updateMode = i1195[5]
  return i1194
}

Deserializers["Base.UI.CollectEffect"] = function (request, data, root) {
  var i1196 = root || request.c( 'Base.UI.CollectEffect' )
  var i1197 = data
  return i1196
}

Deserializers["_HoleMoney.Scripts.UI.UILose"] = function (request, data, root) {
  var i1198 = root || request.c( '_HoleMoney.Scripts.UI.UILose' )
  var i1199 = data
  request.r(i1199[0], i1199[1], 0, i1198, 'loseSoundFx')
  request.r(i1199[2], i1199[3], 0, i1198, 'levelText')
  return i1198
}

Deserializers["_HoleMoney.Scripts.UI.UISettings"] = function (request, data, root) {
  var i1200 = root || request.c( '_HoleMoney.Scripts.UI.UISettings' )
  var i1201 = data
  request.r(i1201[0], i1201[1], 0, i1200, 'musicOff')
  request.r(i1201[2], i1201[3], 0, i1200, 'soundOff')
  request.r(i1201[4], i1201[5], 0, i1200, 'hapticOff')
  request.r(i1201[6], i1201[7], 0, i1200, 'versionText')
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1203 = data
  i1202.enabled = !!i1203[0]
  i1202.type = i1203[1]
  i1202.color = new pc.Color(i1203[2], i1203[3], i1203[4], i1203[5])
  i1202.cullingMask = i1203[6]
  i1202.intensity = i1203[7]
  i1202.range = i1203[8]
  i1202.spotAngle = i1203[9]
  i1202.shadows = i1203[10]
  i1202.shadowNormalBias = i1203[11]
  i1202.shadowBias = i1203[12]
  i1202.shadowStrength = i1203[13]
  i1202.shadowResolution = i1203[14]
  i1202.lightmapBakeType = i1203[15]
  i1202.renderMode = i1203[16]
  request.r(i1203[17], i1203[18], 0, i1202, 'cookie')
  i1202.cookieSize = i1203[19]
  return i1202
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1204 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'm_FirstSelected')
  i1204.m_sendNavigationEvents = !!i1205[2]
  i1204.m_DragThreshold = i1205[3]
  return i1204
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1206 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1207 = data
  i1206.m_HorizontalAxis = i1207[0]
  i1206.m_VerticalAxis = i1207[1]
  i1206.m_SubmitButton = i1207[2]
  i1206.m_CancelButton = i1207[3]
  i1206.m_InputActionsPerSecond = i1207[4]
  i1206.m_RepeatDelay = i1207[5]
  i1206.m_ForceModuleActive = !!i1207[6]
  i1206.m_SendPointerHoverToParent = !!i1207[7]
  return i1206
}

Deserializers["_HoleMoney.Scripts.Game.LevelDesigner"] = function (request, data, root) {
  var i1208 = root || request.c( '_HoleMoney.Scripts.Game.LevelDesigner' )
  var i1209 = data
  request.r(i1209[0], i1209[1], 0, i1208, 'grid')
  i1208.columnSize = i1209[2]
  i1208.rowSize = i1209[3]
  return i1208
}

Deserializers["_HoleMoney.Scripts.Game.GameManager"] = function (request, data, root) {
  var i1210 = root || request.c( '_HoleMoney.Scripts.Game.GameManager' )
  var i1211 = data
  i1210.canClickHole = !!i1211[0]
  return i1210
}

Deserializers["_HoleMoney.Scripts.Managers.TutorialManager"] = function (request, data, root) {
  var i1212 = root || request.c( '_HoleMoney.Scripts.Managers.TutorialManager' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'uiCamera')
  request.r(i1213[2], i1213[3], 0, i1212, 'hand')
  request.r(i1213[4], i1213[5], 0, i1212, 'tutorialPanel1')
  request.r(i1213[6], i1213[7], 0, i1212, 'tutorialPanel2')
  var i1215 = i1213[8]
  var i1214 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Game.Hole')))
  for(var i = 0; i < i1215.length; i += 2) {
  request.r(i1215[i + 0], i1215[i + 1], 1, i1214, '')
  }
  i1212.holes = i1214
  return i1212
}

Deserializers["_HoleMoney.Scripts.Managers.BoosterManager"] = function (request, data, root) {
  var i1218 = root || request.c( '_HoleMoney.Scripts.Managers.BoosterManager' )
  var i1219 = data
  request.r(i1219[0], i1219[1], 0, i1218, 'bag')
  i1218.isUsingHoleBooster = !!i1219[2]
  i1218.isUsingBagBooster = !!i1219[3]
  request.r(i1219[4], i1219[5], 0, i1218, 'tempHole')
  return i1218
}

Deserializers["_HoleMoney.Scripts.Game.ResizeCamera"] = function (request, data, root) {
  var i1220 = root || request.c( '_HoleMoney.Scripts.Game.ResizeCamera' )
  var i1221 = data
  request.r(i1221[0], i1221[1], 0, i1220, 'mainCamera')
  i1220.minCameraSize = i1221[2]
  i1220.maxCameraSize = i1221[3]
  i1220.minZ = i1221[4]
  i1220.maxZ = i1221[5]
  i1220.minHeight = i1221[6]
  i1220.maxHeight = i1221[7]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1223 = data
  i1222.ambientIntensity = i1223[0]
  i1222.reflectionIntensity = i1223[1]
  i1222.ambientMode = i1223[2]
  i1222.ambientLight = new pc.Color(i1223[3], i1223[4], i1223[5], i1223[6])
  i1222.ambientSkyColor = new pc.Color(i1223[7], i1223[8], i1223[9], i1223[10])
  i1222.ambientGroundColor = new pc.Color(i1223[11], i1223[12], i1223[13], i1223[14])
  i1222.ambientEquatorColor = new pc.Color(i1223[15], i1223[16], i1223[17], i1223[18])
  i1222.fogColor = new pc.Color(i1223[19], i1223[20], i1223[21], i1223[22])
  i1222.fogEndDistance = i1223[23]
  i1222.fogStartDistance = i1223[24]
  i1222.fogDensity = i1223[25]
  i1222.fog = !!i1223[26]
  request.r(i1223[27], i1223[28], 0, i1222, 'skybox')
  i1222.fogMode = i1223[29]
  var i1225 = i1223[30]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1225[i + 0]) );
  }
  i1222.lightmaps = i1224
  i1222.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1223[31], i1222.lightProbes)
  i1222.lightmapsMode = i1223[32]
  i1222.mixedBakeMode = i1223[33]
  i1222.environmentLightingMode = i1223[34]
  i1222.ambientProbe = new pc.SphericalHarmonicsL2(i1223[35])
  i1222.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1223[36])
  i1222.useReferenceAmbientProbe = !!i1223[37]
  request.r(i1223[38], i1223[39], 0, i1222, 'customReflection')
  request.r(i1223[40], i1223[41], 0, i1222, 'defaultReflection')
  i1222.defaultReflectionMode = i1223[42]
  i1222.defaultReflectionResolution = i1223[43]
  i1222.sunLightObjectId = i1223[44]
  i1222.pixelLightCount = i1223[45]
  i1222.defaultReflectionHDR = !!i1223[46]
  i1222.hasLightDataAsset = !!i1223[47]
  i1222.hasManualGenerate = !!i1223[48]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1229 = data
  request.r(i1229[0], i1229[1], 0, i1228, 'lightmapColor')
  request.r(i1229[2], i1229[3], 0, i1228, 'lightmapDirection')
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1230 = root || new UnityEngine.LightProbes()
  var i1231 = data
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1239 = data
  var i1241 = i1239[0]
  var i1240 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1241.length; i += 1) {
    i1240.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1241[i + 0]));
  }
  i1238.ShaderCompilationErrors = i1240
  i1238.name = i1239[1]
  i1238.guid = i1239[2]
  var i1243 = i1239[3]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( i1243[i + 0] );
  }
  i1238.shaderDefinedKeywords = i1242
  var i1245 = i1239[4]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1245[i + 0]) );
  }
  i1238.passes = i1244
  var i1247 = i1239[5]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1247[i + 0]) );
  }
  i1238.usePasses = i1246
  var i1249 = i1239[6]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1249[i + 0]) );
  }
  i1238.defaultParameterValues = i1248
  request.r(i1239[7], i1239[8], 0, i1238, 'unityFallbackShader')
  i1238.readDepth = !!i1239[9]
  i1238.isCreatedByShaderGraph = !!i1239[10]
  i1238.compiled = !!i1239[11]
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1253 = data
  i1252.shaderName = i1253[0]
  i1252.errorMessage = i1253[1]
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1258 = root || new pc.UnityShaderPass()
  var i1259 = data
  i1258.id = i1259[0]
  i1258.subShaderIndex = i1259[1]
  i1258.name = i1259[2]
  i1258.passType = i1259[3]
  i1258.grabPassTextureName = i1259[4]
  i1258.usePass = !!i1259[5]
  i1258.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[6], i1258.zTest)
  i1258.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[7], i1258.zWrite)
  i1258.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[8], i1258.culling)
  i1258.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1259[9], i1258.blending)
  i1258.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1259[10], i1258.alphaBlending)
  i1258.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[11], i1258.colorWriteMask)
  i1258.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[12], i1258.offsetUnits)
  i1258.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[13], i1258.offsetFactor)
  i1258.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[14], i1258.stencilRef)
  i1258.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[15], i1258.stencilReadMask)
  i1258.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[16], i1258.stencilWriteMask)
  i1258.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[17], i1258.stencilOp)
  i1258.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[18], i1258.stencilOpFront)
  i1258.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1259[19], i1258.stencilOpBack)
  var i1261 = i1259[20]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 1) {
    i1260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1261[i + 0]) );
  }
  i1258.tags = i1260
  var i1263 = i1259[21]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( i1263[i + 0] );
  }
  i1258.passDefinedKeywords = i1262
  var i1265 = i1259[22]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1265[i + 0]) );
  }
  i1258.passDefinedKeywordGroups = i1264
  var i1267 = i1259[23]
  var i1266 = []
  for(var i = 0; i < i1267.length; i += 1) {
    i1266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1267[i + 0]) );
  }
  i1258.variants = i1266
  var i1269 = i1259[24]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1269[i + 0]) );
  }
  i1258.excludedVariants = i1268
  i1258.hasDepthReader = !!i1259[25]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1271 = data
  i1270.val = i1271[0]
  i1270.name = i1271[1]
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1273 = data
  i1272.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[0], i1272.src)
  i1272.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[1], i1272.dst)
  i1272.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1273[2], i1272.op)
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1275 = data
  i1274.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[0], i1274.pass)
  i1274.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[1], i1274.fail)
  i1274.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[2], i1274.zFail)
  i1274.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1275[3], i1274.comp)
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1279 = data
  i1278.name = i1279[0]
  i1278.value = i1279[1]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1283 = data
  var i1285 = i1283[0]
  var i1284 = []
  for(var i = 0; i < i1285.length; i += 1) {
    i1284.push( i1285[i + 0] );
  }
  i1282.keywords = i1284
  i1282.hasDiscard = !!i1283[1]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1289 = data
  i1288.passId = i1289[0]
  i1288.subShaderIndex = i1289[1]
  var i1291 = i1289[2]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( i1291[i + 0] );
  }
  i1288.keywords = i1290
  i1288.vertexProgram = i1289[3]
  i1288.fragmentProgram = i1289[4]
  i1288.exportedForWebGl2 = !!i1289[5]
  i1288.readDepth = !!i1289[6]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1295 = data
  request.r(i1295[0], i1295[1], 0, i1294, 'shader')
  i1294.pass = i1295[2]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1299 = data
  i1298.name = i1299[0]
  i1298.type = i1299[1]
  i1298.value = new pc.Vec4( i1299[2], i1299[3], i1299[4], i1299[5] )
  i1298.textureValue = i1299[6]
  i1298.shaderPropertyFlag = i1299[7]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1301 = data
  i1300.name = i1301[0]
  request.r(i1301[1], i1301[2], 0, i1300, 'texture')
  i1300.aabb = i1301[3]
  i1300.vertices = i1301[4]
  i1300.triangles = i1301[5]
  i1300.textureRect = UnityEngine.Rect.MinMaxRect(i1301[6], i1301[7], i1301[8], i1301[9])
  i1300.packedRect = UnityEngine.Rect.MinMaxRect(i1301[10], i1301[11], i1301[12], i1301[13])
  i1300.border = new pc.Vec4( i1301[14], i1301[15], i1301[16], i1301[17] )
  i1300.transparency = i1301[18]
  i1300.bounds = i1301[19]
  i1300.pixelsPerUnit = i1301[20]
  i1300.textureWidth = i1301[21]
  i1300.textureHeight = i1301[22]
  i1300.nativeSize = new pc.Vec2( i1301[23], i1301[24] )
  i1300.pivot = new pc.Vec2( i1301[25], i1301[26] )
  i1300.textureRectOffset = new pc.Vec2( i1301[27], i1301[28] )
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1303 = data
  i1302.name = i1303[0]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1304 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1305 = data
  i1304.name = i1305[0]
  i1304.wrapMode = i1305[1]
  i1304.isLooping = !!i1305[2]
  i1304.length = i1305[3]
  var i1307 = i1305[4]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1307[i + 0]) );
  }
  i1304.curves = i1306
  var i1309 = i1305[5]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1309[i + 0]) );
  }
  i1304.events = i1308
  i1304.halfPrecision = !!i1305[6]
  i1304._frameRate = i1305[7]
  i1304.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1305[8], i1304.localBounds)
  i1304.hasMuscleCurves = !!i1305[9]
  var i1311 = i1305[10]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( i1311[i + 0] );
  }
  i1304.clipMuscleConstant = i1310
  i1304.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1305[11], i1304.clipBindingConstant)
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1315 = data
  i1314.path = i1315[0]
  i1314.hash = i1315[1]
  i1314.componentType = i1315[2]
  i1314.property = i1315[3]
  i1314.keys = i1315[4]
  var i1317 = i1315[5]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1317[i + 0]) );
  }
  i1314.objectReferenceKeys = i1316
  return i1314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1321 = data
  i1320.time = i1321[0]
  request.r(i1321[1], i1321[2], 0, i1320, 'value')
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1325 = data
  i1324.functionName = i1325[0]
  i1324.floatParameter = i1325[1]
  i1324.intParameter = i1325[2]
  i1324.stringParameter = i1325[3]
  request.r(i1325[4], i1325[5], 0, i1324, 'objectReferenceParameter')
  i1324.time = i1325[6]
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1327 = data
  i1326.center = new pc.Vec3( i1327[0], i1327[1], i1327[2] )
  i1326.extends = new pc.Vec3( i1327[3], i1327[4], i1327[5] )
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1331 = data
  var i1333 = i1331[0]
  var i1332 = []
  for(var i = 0; i < i1333.length; i += 1) {
    i1332.push( i1333[i + 0] );
  }
  i1330.genericBindings = i1332
  var i1335 = i1331[1]
  var i1334 = []
  for(var i = 0; i < i1335.length; i += 1) {
    i1334.push( i1335[i + 0] );
  }
  i1330.pptrCurveMapping = i1334
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1337 = data
  i1336.name = i1337[0]
  i1336.ascent = i1337[1]
  i1336.originalLineHeight = i1337[2]
  i1336.fontSize = i1337[3]
  var i1339 = i1337[4]
  var i1338 = []
  for(var i = 0; i < i1339.length; i += 1) {
    i1338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1339[i + 0]) );
  }
  i1336.characterInfo = i1338
  request.r(i1337[5], i1337[6], 0, i1336, 'texture')
  i1336.originalFontSize = i1337[7]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1343 = data
  i1342.index = i1343[0]
  i1342.advance = i1343[1]
  i1342.bearing = i1343[2]
  i1342.glyphWidth = i1343[3]
  i1342.glyphHeight = i1343[4]
  i1342.minX = i1343[5]
  i1342.maxX = i1343[6]
  i1342.minY = i1343[7]
  i1342.maxY = i1343[8]
  i1342.uvBottomLeftX = i1343[9]
  i1342.uvBottomLeftY = i1343[10]
  i1342.uvBottomRightX = i1343[11]
  i1342.uvBottomRightY = i1343[12]
  i1342.uvTopLeftX = i1343[13]
  i1342.uvTopLeftY = i1343[14]
  i1342.uvTopRightX = i1343[15]
  i1342.uvTopRightY = i1343[16]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1345 = data
  i1344.name = i1345[0]
  var i1347 = i1345[1]
  var i1346 = []
  for(var i = 0; i < i1347.length; i += 1) {
    i1346.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1347[i + 0]) );
  }
  i1344.layers = i1346
  var i1349 = i1345[2]
  var i1348 = []
  for(var i = 0; i < i1349.length; i += 1) {
    i1348.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1349[i + 0]) );
  }
  i1344.parameters = i1348
  i1344.animationClips = i1345[3]
  i1344.avatarUnsupported = i1345[4]
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1353 = data
  i1352.name = i1353[0]
  i1352.defaultWeight = i1353[1]
  i1352.blendingMode = i1353[2]
  i1352.avatarMask = i1353[3]
  i1352.syncedLayerIndex = i1353[4]
  i1352.syncedLayerAffectsTiming = !!i1353[5]
  i1352.syncedLayers = i1353[6]
  i1352.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1353[7], i1352.stateMachine)
  return i1352
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1355 = data
  i1354.id = i1355[0]
  i1354.name = i1355[1]
  i1354.path = i1355[2]
  var i1357 = i1355[3]
  var i1356 = []
  for(var i = 0; i < i1357.length; i += 1) {
    i1356.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1357[i + 0]) );
  }
  i1354.states = i1356
  var i1359 = i1355[4]
  var i1358 = []
  for(var i = 0; i < i1359.length; i += 1) {
    i1358.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1359[i + 0]) );
  }
  i1354.machines = i1358
  var i1361 = i1355[5]
  var i1360 = []
  for(var i = 0; i < i1361.length; i += 1) {
    i1360.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1361[i + 0]) );
  }
  i1354.entryStateTransitions = i1360
  var i1363 = i1355[6]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 1) {
    i1362.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1363[i + 0]) );
  }
  i1354.exitStateTransitions = i1362
  var i1365 = i1355[7]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 1) {
    i1364.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1365[i + 0]) );
  }
  i1354.anyStateTransitions = i1364
  i1354.defaultStateId = i1355[8]
  return i1354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1368 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1369 = data
  i1368.id = i1369[0]
  i1368.name = i1369[1]
  i1368.cycleOffset = i1369[2]
  i1368.cycleOffsetParameter = i1369[3]
  i1368.cycleOffsetParameterActive = !!i1369[4]
  i1368.mirror = !!i1369[5]
  i1368.mirrorParameter = i1369[6]
  i1368.mirrorParameterActive = !!i1369[7]
  i1368.motionId = i1369[8]
  i1368.nameHash = i1369[9]
  i1368.fullPathHash = i1369[10]
  i1368.speed = i1369[11]
  i1368.speedParameter = i1369[12]
  i1368.speedParameterActive = !!i1369[13]
  i1368.tag = i1369[14]
  i1368.tagHash = i1369[15]
  i1368.writeDefaultValues = !!i1369[16]
  var i1371 = i1369[17]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 2) {
  request.r(i1371[i + 0], i1371[i + 1], 2, i1370, '')
  }
  i1368.behaviours = i1370
  var i1373 = i1369[18]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1373[i + 0]) );
  }
  i1368.transitions = i1372
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1379 = data
  i1378.fullPath = i1379[0]
  i1378.canTransitionToSelf = !!i1379[1]
  i1378.duration = i1379[2]
  i1378.exitTime = i1379[3]
  i1378.hasExitTime = !!i1379[4]
  i1378.hasFixedDuration = !!i1379[5]
  i1378.interruptionSource = i1379[6]
  i1378.offset = i1379[7]
  i1378.orderedInterruption = !!i1379[8]
  i1378.destinationStateId = i1379[9]
  i1378.isExit = !!i1379[10]
  i1378.mute = !!i1379[11]
  i1378.solo = !!i1379[12]
  var i1381 = i1379[13]
  var i1380 = []
  for(var i = 0; i < i1381.length; i += 1) {
    i1380.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1381[i + 0]) );
  }
  i1378.conditions = i1380
  return i1378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1384 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1385 = data
  i1384.mode = i1385[0]
  i1384.parameter = i1385[1]
  i1384.threshold = i1385[2]
  return i1384
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1391 = data
  i1390.destinationStateId = i1391[0]
  i1390.isExit = !!i1391[1]
  i1390.mute = !!i1391[2]
  i1390.solo = !!i1391[3]
  var i1393 = i1391[4]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1393[i + 0]) );
  }
  i1390.conditions = i1392
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1397 = data
  i1396.defaultBool = !!i1397[0]
  i1396.defaultFloat = i1397[1]
  i1396.defaultInt = i1397[2]
  i1396.name = i1397[3]
  i1396.nameHash = i1397[4]
  i1396.type = i1397[5]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1399 = data
  i1398.name = i1399[0]
  i1398.bytes64 = i1399[1]
  i1398.data = i1399[2]
  return i1398
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1400 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1401 = data
  i1400.hashCode = i1401[0]
  request.r(i1401[1], i1401[2], 0, i1400, 'material')
  i1400.materialHashCode = i1401[3]
  request.r(i1401[4], i1401[5], 0, i1400, 'atlas')
  i1400.normalStyle = i1401[6]
  i1400.normalSpacingOffset = i1401[7]
  i1400.boldStyle = i1401[8]
  i1400.boldSpacing = i1401[9]
  i1400.italicStyle = i1401[10]
  i1400.tabSize = i1401[11]
  i1400.m_Version = i1401[12]
  i1400.m_SourceFontFileGUID = i1401[13]
  request.r(i1401[14], i1401[15], 0, i1400, 'm_SourceFontFile_EditorRef')
  request.r(i1401[16], i1401[17], 0, i1400, 'm_SourceFontFile')
  i1400.m_AtlasPopulationMode = i1401[18]
  i1400.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1401[19], i1400.m_FaceInfo)
  var i1403 = i1401[20]
  var i1402 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1403.length; i += 1) {
    i1402.add(request.d('UnityEngine.TextCore.Glyph', i1403[i + 0]));
  }
  i1400.m_GlyphTable = i1402
  var i1405 = i1401[21]
  var i1404 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.add(request.d('TMPro.TMP_Character', i1405[i + 0]));
  }
  i1400.m_CharacterTable = i1404
  var i1407 = i1401[22]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 2) {
  request.r(i1407[i + 0], i1407[i + 1], 2, i1406, '')
  }
  i1400.m_AtlasTextures = i1406
  i1400.m_AtlasTextureIndex = i1401[23]
  i1400.m_IsMultiAtlasTexturesEnabled = !!i1401[24]
  i1400.m_ClearDynamicDataOnBuild = !!i1401[25]
  var i1409 = i1401[26]
  var i1408 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.add(request.d('UnityEngine.TextCore.GlyphRect', i1409[i + 0]));
  }
  i1400.m_UsedGlyphRects = i1408
  var i1411 = i1401[27]
  var i1410 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.add(request.d('UnityEngine.TextCore.GlyphRect', i1411[i + 0]));
  }
  i1400.m_FreeGlyphRects = i1410
  i1400.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1401[28], i1400.m_fontInfo)
  i1400.m_AtlasWidth = i1401[29]
  i1400.m_AtlasHeight = i1401[30]
  i1400.m_AtlasPadding = i1401[31]
  i1400.m_AtlasRenderMode = i1401[32]
  var i1413 = i1401[33]
  var i1412 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.add(request.d('TMPro.TMP_Glyph', i1413[i + 0]));
  }
  i1400.m_glyphInfoList = i1412
  i1400.m_KerningTable = request.d('TMPro.KerningTable', i1401[34], i1400.m_KerningTable)
  i1400.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1401[35], i1400.m_FontFeatureTable)
  var i1415 = i1401[36]
  var i1414 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1415.length; i += 2) {
  request.r(i1415[i + 0], i1415[i + 1], 1, i1414, '')
  }
  i1400.fallbackFontAssets = i1414
  var i1417 = i1401[37]
  var i1416 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1417.length; i += 2) {
  request.r(i1417[i + 0], i1417[i + 1], 1, i1416, '')
  }
  i1400.m_FallbackFontAssetTable = i1416
  i1400.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1401[38], i1400.m_CreationSettings)
  var i1419 = i1401[39]
  var i1418 = []
  for(var i = 0; i < i1419.length; i += 1) {
    i1418.push( request.d('TMPro.TMP_FontWeightPair', i1419[i + 0]) );
  }
  i1400.m_FontWeightTable = i1418
  var i1421 = i1401[40]
  var i1420 = []
  for(var i = 0; i < i1421.length; i += 1) {
    i1420.push( request.d('TMPro.TMP_FontWeightPair', i1421[i + 0]) );
  }
  i1400.fontWeights = i1420
  return i1400
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1423 = data
  i1422.m_FaceIndex = i1423[0]
  i1422.m_FamilyName = i1423[1]
  i1422.m_StyleName = i1423[2]
  i1422.m_PointSize = i1423[3]
  i1422.m_Scale = i1423[4]
  i1422.m_UnitsPerEM = i1423[5]
  i1422.m_LineHeight = i1423[6]
  i1422.m_AscentLine = i1423[7]
  i1422.m_CapLine = i1423[8]
  i1422.m_MeanLine = i1423[9]
  i1422.m_Baseline = i1423[10]
  i1422.m_DescentLine = i1423[11]
  i1422.m_SuperscriptOffset = i1423[12]
  i1422.m_SuperscriptSize = i1423[13]
  i1422.m_SubscriptOffset = i1423[14]
  i1422.m_SubscriptSize = i1423[15]
  i1422.m_UnderlineOffset = i1423[16]
  i1422.m_UnderlineThickness = i1423[17]
  i1422.m_StrikethroughOffset = i1423[18]
  i1422.m_StrikethroughThickness = i1423[19]
  i1422.m_TabWidth = i1423[20]
  return i1422
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1427 = data
  i1426.m_Index = i1427[0]
  i1426.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1427[1], i1426.m_Metrics)
  i1426.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1427[2], i1426.m_GlyphRect)
  i1426.m_Scale = i1427[3]
  i1426.m_AtlasIndex = i1427[4]
  i1426.m_ClassDefinitionType = i1427[5]
  return i1426
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1429 = data
  i1428.m_Width = i1429[0]
  i1428.m_Height = i1429[1]
  i1428.m_HorizontalBearingX = i1429[2]
  i1428.m_HorizontalBearingY = i1429[3]
  i1428.m_HorizontalAdvance = i1429[4]
  return i1428
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1431 = data
  i1430.m_X = i1431[0]
  i1430.m_Y = i1431[1]
  i1430.m_Width = i1431[2]
  i1430.m_Height = i1431[3]
  return i1430
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1434 = root || request.c( 'TMPro.TMP_Character' )
  var i1435 = data
  i1434.m_ElementType = i1435[0]
  i1434.m_Unicode = i1435[1]
  i1434.m_GlyphIndex = i1435[2]
  i1434.m_Scale = i1435[3]
  return i1434
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1440 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1441 = data
  i1440.Name = i1441[0]
  i1440.PointSize = i1441[1]
  i1440.Scale = i1441[2]
  i1440.CharacterCount = i1441[3]
  i1440.LineHeight = i1441[4]
  i1440.Baseline = i1441[5]
  i1440.Ascender = i1441[6]
  i1440.CapHeight = i1441[7]
  i1440.Descender = i1441[8]
  i1440.CenterLine = i1441[9]
  i1440.SuperscriptOffset = i1441[10]
  i1440.SubscriptOffset = i1441[11]
  i1440.SubSize = i1441[12]
  i1440.Underline = i1441[13]
  i1440.UnderlineThickness = i1441[14]
  i1440.strikethrough = i1441[15]
  i1440.strikethroughThickness = i1441[16]
  i1440.TabWidth = i1441[17]
  i1440.Padding = i1441[18]
  i1440.AtlasWidth = i1441[19]
  i1440.AtlasHeight = i1441[20]
  return i1440
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1444 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1445 = data
  i1444.id = i1445[0]
  i1444.x = i1445[1]
  i1444.y = i1445[2]
  i1444.width = i1445[3]
  i1444.height = i1445[4]
  i1444.xOffset = i1445[5]
  i1444.yOffset = i1445[6]
  i1444.xAdvance = i1445[7]
  i1444.scale = i1445[8]
  return i1444
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1446 = root || request.c( 'TMPro.KerningTable' )
  var i1447 = data
  var i1449 = i1447[0]
  var i1448 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.add(request.d('TMPro.KerningPair', i1449[i + 0]));
  }
  i1446.kerningPairs = i1448
  return i1446
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1452 = root || request.c( 'TMPro.KerningPair' )
  var i1453 = data
  i1452.xOffset = i1453[0]
  i1452.m_FirstGlyph = i1453[1]
  i1452.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1453[2], i1452.m_FirstGlyphAdjustments)
  i1452.m_SecondGlyph = i1453[3]
  i1452.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1453[4], i1452.m_SecondGlyphAdjustments)
  i1452.m_IgnoreSpacingAdjustments = !!i1453[5]
  return i1452
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1454 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1455 = data
  var i1457 = i1455[0]
  var i1456 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1457[i + 0]));
  }
  i1454.m_GlyphPairAdjustmentRecords = i1456
  return i1454
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1460 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1461 = data
  i1460.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1461[0], i1460.m_FirstAdjustmentRecord)
  i1460.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1461[1], i1460.m_SecondAdjustmentRecord)
  i1460.m_FeatureLookupFlags = i1461[2]
  return i1460
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1464 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1465 = data
  i1464.sourceFontFileName = i1465[0]
  i1464.sourceFontFileGUID = i1465[1]
  i1464.pointSizeSamplingMode = i1465[2]
  i1464.pointSize = i1465[3]
  i1464.padding = i1465[4]
  i1464.packingMode = i1465[5]
  i1464.atlasWidth = i1465[6]
  i1464.atlasHeight = i1465[7]
  i1464.characterSetSelectionMode = i1465[8]
  i1464.characterSequence = i1465[9]
  i1464.referencedFontAssetGUID = i1465[10]
  i1464.referencedTextAssetGUID = i1465[11]
  i1464.fontStyle = i1465[12]
  i1464.fontStyleModifier = i1465[13]
  i1464.renderMode = i1465[14]
  i1464.includeFontFeatures = !!i1465[15]
  return i1464
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1468 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1469 = data
  request.r(i1469[0], i1469[1], 0, i1468, 'regularTypeface')
  request.r(i1469[2], i1469[3], 0, i1468, 'italicTypeface')
  return i1468
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.GameData"] = function (request, data, root) {
  var i1470 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.GameData' )
  var i1471 = data
  i1470.currentLevel = i1471[0]
  i1470.currentLevelText = i1471[1]
  i1470.totalCoins = i1471[2]
  i1470.totalBricks = i1471[3]
  i1470.currentAmountOfAddSlotBooster = i1471[4]
  i1470.currentAmountOfHoleBooster = i1471[5]
  i1470.currentAmountOfBagBooster = i1471[6]
  i1470.maxLife = i1471[7]
  i1470.currentSkinId = i1471[8]
  i1470.userName = i1471[9]
  return i1470
}

Deserializers["Base.SO.MapData"] = function (request, data, root) {
  var i1472 = root || request.c( 'Base.SO.MapData' )
  var i1473 = data
  i1472.currentIslandID = i1473[0]
  i1472.currentTowerID = i1473[1]
  var i1475 = i1473[2]
  var i1474 = new (System.Collections.Generic.List$1(Bridge.ns('Base.SO.IslandData')))
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.add(request.d('Base.SO.IslandData', i1475[i + 0]));
  }
  i1472.islandsData = i1474
  return i1472
}

Deserializers["Base.SO.IslandData"] = function (request, data, root) {
  var i1478 = root || request.c( 'Base.SO.IslandData' )
  var i1479 = data
  i1478.islandID = i1479[0]
  i1478.unlocked = !!i1479[1]
  var i1481 = i1479[2]
  var i1480 = new (System.Collections.Generic.List$1(Bridge.ns('Base.SO.TowerData')))
  for(var i = 0; i < i1481.length; i += 1) {
    i1480.add(request.d('Base.SO.TowerData', i1481[i + 0]));
  }
  i1478.towersData = i1480
  return i1478
}

Deserializers["Base.SO.TowerData"] = function (request, data, root) {
  var i1484 = root || request.c( 'Base.SO.TowerData' )
  var i1485 = data
  i1484.towerID = i1485[0]
  i1484.unlocked = !!i1485[1]
  i1484.currentBrick = i1485[2]
  i1484.maxBricks = i1485[3]
  return i1484
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.LevelData"] = function (request, data, root) {
  var i1486 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.LevelData' )
  var i1487 = data
  i1486.xMapSize = i1487[0]
  i1486.yMapSize = i1487[1]
  var i1489 = i1487[2]
  var i1488 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.CoinPosition')))
  for(var i = 0; i < i1489.length; i += 1) {
    i1488.add(request.d('_HoleMoney.Scripts.ScriptableObjects.CoinPosition', i1489[i + 0]));
  }
  i1486.coinPositions = i1488
  var i1491 = i1487[3]
  var i1490 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.HolePosition')))
  for(var i = 0; i < i1491.length; i += 1) {
    i1490.add(request.d('_HoleMoney.Scripts.ScriptableObjects.HolePosition', i1491[i + 0]));
  }
  i1486.holePositions = i1490
  var i1493 = i1487[4]
  var i1492 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.PigRowData')))
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.add(request.d('_HoleMoney.Scripts.ScriptableObjects.PigRowData', i1493[i + 0]));
  }
  i1486.pigRows = i1492
  var i1495 = i1487[5]
  var i1494 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition')))
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.add(request.d('_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition', i1495[i + 0]));
  }
  i1486.obstaclePositions = i1494
  var i1497 = i1487[6]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition', i1497[i + 0]));
  }
  i1486.iceObstaclePositions = i1496
  return i1486
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.CoinPosition"] = function (request, data, root) {
  var i1500 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.CoinPosition' )
  var i1501 = data
  i1500.xPosition = i1501[0]
  i1500.yPosition = i1501[1]
  i1500.colorType = i1501[2]
  i1500.typeLock = i1501[3]
  i1500.typeLockValue = i1501[4]
  return i1500
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.HolePosition"] = function (request, data, root) {
  var i1504 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.HolePosition' )
  var i1505 = data
  i1504.xPosition = i1505[0]
  i1504.yPosition = i1505[1]
  i1504.colorType = i1505[2]
  i1504.typeLock = i1505[3]
  i1504.typeLockValue = i1505[4]
  return i1504
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.PigRowData"] = function (request, data, root) {
  var i1508 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.PigRowData' )
  var i1509 = data
  var i1511 = i1509[0]
  var i1510 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.Enums.ColorType')))
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.add(i1511[i + 0]);
  }
  i1508.pigType = i1510
  return i1508
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition"] = function (request, data, root) {
  var i1516 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.ObstaclePosition' )
  var i1517 = data
  i1516.xPosition = i1517[0]
  i1516.yPosition = i1517[1]
  return i1516
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.MaterialsSo"] = function (request, data, root) {
  var i1518 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.MaterialsSo' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'normalTileMaterial')
  request.r(i1519[2], i1519[3], 0, i1518, 'holeTileMaterial')
  request.r(i1519[4], i1519[5], 0, i1518, 'rainbowTileMaterial')
  var i1521 = i1519[6]
  var i1520 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.MainMaterials')))
  for(var i = 0; i < i1521.length; i += 1) {
    i1520.add(request.d('_HoleMoney.Scripts.ScriptableObjects.MainMaterials', i1521[i + 0]));
  }
  i1518.mainMaterials = i1520
  return i1518
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.MainMaterials"] = function (request, data, root) {
  var i1524 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.MainMaterials' )
  var i1525 = data
  i1524.colorType = i1525[0]
  request.r(i1525[1], i1525[2], 0, i1524, 'material')
  request.r(i1525[3], i1525[4], 0, i1524, 'pitMaterial')
  request.r(i1525[5], i1525[6], 0, i1524, 'coinMaterial')
  request.r(i1525[7], i1525[8], 0, i1524, 'pigMaterial')
  return i1524
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.LevelDesigner"] = function (request, data, root) {
  var i1526 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.LevelDesigner' )
  var i1527 = data
  var i1529 = i1527[0]
  var i1528 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextAsset')))
  for(var i = 0; i < i1529.length; i += 2) {
  request.r(i1529[i + 0], i1529[i + 1], 1, i1528, '')
  }
  i1526.mapLevel = i1528
  var i1531 = i1527[1]
  var i1530 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextAsset')))
  for(var i = 0; i < i1531.length; i += 2) {
  request.r(i1531[i + 0], i1531[i + 1], 1, i1530, '')
  }
  i1526.pigLevel = i1530
  var i1533 = i1527[2]
  var i1532 = new (System.Collections.Generic.List$1(Bridge.ns('_HoleMoney.Scripts.ScriptableObjects.ConfigsPerLevel')))
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.add(request.d('_HoleMoney.Scripts.ScriptableObjects.ConfigsPerLevel', i1533[i + 0]));
  }
  i1526.rewardPerLevel = i1532
  return i1526
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.ConfigsPerLevel"] = function (request, data, root) {
  var i1538 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.ConfigsPerLevel' )
  var i1539 = data
  i1538.numberOfSLots = i1539[0]
  i1538.coinReward = i1539[1]
  i1538.brickReward = i1539[2]
  return i1538
}

Deserializers["_HoleMoney.Scripts.ScriptableObjects.PrefabsSo"] = function (request, data, root) {
  var i1540 = root || request.c( '_HoleMoney.Scripts.ScriptableObjects.PrefabsSo' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'holePrefab')
  request.r(i1541[2], i1541[3], 0, i1540, 'coinPrefab')
  request.r(i1541[4], i1541[5], 0, i1540, 'pigPrefab')
  request.r(i1541[6], i1541[7], 0, i1540, 'boxPrefab')
  request.r(i1541[8], i1541[9], 0, i1540, 'iceBoxPrefab')
  request.r(i1541[10], i1541[11], 0, i1540, 'coinFxPrefab')
  request.r(i1541[12], i1541[13], 0, i1540, 'confettiPrefab')
  request.r(i1541[14], i1541[15], 0, i1540, 'starFxPrefab')
  return i1540
}

Deserializers["Base.SO.SkinsSo"] = function (request, data, root) {
  var i1542 = root || request.c( 'Base.SO.SkinsSo' )
  var i1543 = data
  var i1545 = i1543[0]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('Base.SO.Skin')))
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.add(request.d('Base.SO.Skin', i1545[i + 0]));
  }
  i1542.skins = i1544
  return i1542
}

Deserializers["Base.SO.Skin"] = function (request, data, root) {
  var i1548 = root || request.c( 'Base.SO.Skin' )
  var i1549 = data
  i1548.id = i1549[0]
  request.r(i1549[1], i1549[2], 0, i1548, 'skinSprite')
  return i1548
}

Deserializers["Base.SO.MapSo"] = function (request, data, root) {
  var i1550 = root || request.c( 'Base.SO.MapSo' )
  var i1551 = data
  var i1553 = i1551[0]
  var i1552 = new (System.Collections.Generic.List$1(Bridge.ns('Base.SO.Island')))
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.add(request.d('Base.SO.Island', i1553[i + 0]));
  }
  i1550.islands = i1552
  return i1550
}

Deserializers["Base.SO.Island"] = function (request, data, root) {
  var i1556 = root || request.c( 'Base.SO.Island' )
  var i1557 = data
  i1556.islandID = i1557[0]
  i1556.islandName = i1557[1]
  request.r(i1557[2], i1557[3], 0, i1556, 'islandPrefab')
  var i1559 = i1557[4]
  var i1558 = new (System.Collections.Generic.List$1(Bridge.ns('Base.SO.Tower')))
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.add(request.d('Base.SO.Tower', i1559[i + 0]));
  }
  i1556.towers = i1558
  return i1556
}

Deserializers["Base.SO.Tower"] = function (request, data, root) {
  var i1562 = root || request.c( 'Base.SO.Tower' )
  var i1563 = data
  i1562.towerID = i1563[0]
  return i1562
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1564 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1565 = data
  i1564.useSafeMode = !!i1565[0]
  i1564.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1565[1], i1564.safeModeOptions)
  i1564.timeScale = i1565[2]
  i1564.unscaledTimeScale = i1565[3]
  i1564.useSmoothDeltaTime = !!i1565[4]
  i1564.maxSmoothUnscaledTime = i1565[5]
  i1564.rewindCallbackMode = i1565[6]
  i1564.showUnityEditorReport = !!i1565[7]
  i1564.logBehaviour = i1565[8]
  i1564.drawGizmos = !!i1565[9]
  i1564.defaultRecyclable = !!i1565[10]
  i1564.defaultAutoPlay = i1565[11]
  i1564.defaultUpdateType = i1565[12]
  i1564.defaultTimeScaleIndependent = !!i1565[13]
  i1564.defaultEaseType = i1565[14]
  i1564.defaultEaseOvershootOrAmplitude = i1565[15]
  i1564.defaultEasePeriod = i1565[16]
  i1564.defaultAutoKill = !!i1565[17]
  i1564.defaultLoopType = i1565[18]
  i1564.debugMode = !!i1565[19]
  i1564.debugStoreTargetId = !!i1565[20]
  i1564.showPreviewPanel = !!i1565[21]
  i1564.storeSettingsLocation = i1565[22]
  i1564.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1565[23], i1564.modules)
  i1564.createASMDEF = !!i1565[24]
  i1564.showPlayingTweens = !!i1565[25]
  i1564.showPausedTweens = !!i1565[26]
  return i1564
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1566 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1567 = data
  i1566.logBehaviour = i1567[0]
  i1566.nestedTweenFailureBehaviour = i1567[1]
  return i1566
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1568 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1569 = data
  i1568.showPanel = !!i1569[0]
  i1568.audioEnabled = !!i1569[1]
  i1568.physicsEnabled = !!i1569[2]
  i1568.physics2DEnabled = !!i1569[3]
  i1568.spriteEnabled = !!i1569[4]
  i1568.uiEnabled = !!i1569[5]
  i1568.textMeshProEnabled = !!i1569[6]
  i1568.tk2DEnabled = !!i1569[7]
  i1568.deAudioEnabled = !!i1569[8]
  i1568.deUnityExtendedEnabled = !!i1569[9]
  i1568.epoOutlineEnabled = !!i1569[10]
  return i1568
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.TMP_Settings' )
  var i1571 = data
  i1570.m_enableWordWrapping = !!i1571[0]
  i1570.m_enableKerning = !!i1571[1]
  i1570.m_enableExtraPadding = !!i1571[2]
  i1570.m_enableTintAllSprites = !!i1571[3]
  i1570.m_enableParseEscapeCharacters = !!i1571[4]
  i1570.m_EnableRaycastTarget = !!i1571[5]
  i1570.m_GetFontFeaturesAtRuntime = !!i1571[6]
  i1570.m_missingGlyphCharacter = i1571[7]
  i1570.m_warningsDisabled = !!i1571[8]
  request.r(i1571[9], i1571[10], 0, i1570, 'm_defaultFontAsset')
  i1570.m_defaultFontAssetPath = i1571[11]
  i1570.m_defaultFontSize = i1571[12]
  i1570.m_defaultAutoSizeMinRatio = i1571[13]
  i1570.m_defaultAutoSizeMaxRatio = i1571[14]
  i1570.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1571[15], i1571[16] )
  i1570.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1571[17], i1571[18] )
  i1570.m_autoSizeTextContainer = !!i1571[19]
  i1570.m_IsTextObjectScaleStatic = !!i1571[20]
  var i1573 = i1571[21]
  var i1572 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1573.length; i += 2) {
  request.r(i1573[i + 0], i1573[i + 1], 1, i1572, '')
  }
  i1570.m_fallbackFontAssets = i1572
  i1570.m_matchMaterialPreset = !!i1571[22]
  request.r(i1571[23], i1571[24], 0, i1570, 'm_defaultSpriteAsset')
  i1570.m_defaultSpriteAssetPath = i1571[25]
  i1570.m_enableEmojiSupport = !!i1571[26]
  i1570.m_MissingCharacterSpriteUnicode = i1571[27]
  i1570.m_defaultColorGradientPresetsPath = i1571[28]
  request.r(i1571[29], i1571[30], 0, i1570, 'm_defaultStyleSheet')
  i1570.m_StyleSheetsResourcePath = i1571[31]
  request.r(i1571[32], i1571[33], 0, i1570, 'm_leadingCharacters')
  request.r(i1571[34], i1571[35], 0, i1570, 'm_followingCharacters')
  i1570.m_UseModernHangulLineBreakingRules = !!i1571[36]
  return i1570
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1574 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1575 = data
  i1574.m_GlyphIndex = i1575[0]
  i1574.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1575[1], i1574.m_GlyphValueRecord)
  return i1574
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1576 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1577 = data
  i1576.m_XPlacement = i1577[0]
  i1576.m_YPlacement = i1577[1]
  i1576.m_XAdvance = i1577[2]
  i1576.m_YAdvance = i1577[3]
  return i1576
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1578 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1579 = data
  i1578.hashCode = i1579[0]
  request.r(i1579[1], i1579[2], 0, i1578, 'material')
  i1578.materialHashCode = i1579[3]
  request.r(i1579[4], i1579[5], 0, i1578, 'spriteSheet')
  var i1581 = i1579[6]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('TMPro.TMP_Sprite', i1581[i + 0]));
  }
  i1578.spriteInfoList = i1580
  var i1583 = i1579[7]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 1, i1582, '')
  }
  i1578.fallbackSpriteAssets = i1582
  i1578.m_Version = i1579[8]
  i1578.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1579[9], i1578.m_FaceInfo)
  var i1585 = i1579[10]
  var i1584 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1585.length; i += 1) {
    i1584.add(request.d('TMPro.TMP_SpriteCharacter', i1585[i + 0]));
  }
  i1578.m_SpriteCharacterTable = i1584
  var i1587 = i1579[11]
  var i1586 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1587.length; i += 1) {
    i1586.add(request.d('TMPro.TMP_SpriteGlyph', i1587[i + 0]));
  }
  i1578.m_SpriteGlyphTable = i1586
  return i1578
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1590 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1591 = data
  i1590.name = i1591[0]
  i1590.hashCode = i1591[1]
  i1590.unicode = i1591[2]
  i1590.pivot = new pc.Vec2( i1591[3], i1591[4] )
  request.r(i1591[5], i1591[6], 0, i1590, 'sprite')
  i1590.id = i1591[7]
  i1590.x = i1591[8]
  i1590.y = i1591[9]
  i1590.width = i1591[10]
  i1590.height = i1591[11]
  i1590.xOffset = i1591[12]
  i1590.yOffset = i1591[13]
  i1590.xAdvance = i1591[14]
  i1590.scale = i1591[15]
  return i1590
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1596 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1597 = data
  i1596.m_Name = i1597[0]
  i1596.m_HashCode = i1597[1]
  i1596.m_ElementType = i1597[2]
  i1596.m_Unicode = i1597[3]
  i1596.m_GlyphIndex = i1597[4]
  i1596.m_Scale = i1597[5]
  return i1596
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1600 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'sprite')
  i1600.m_Index = i1601[2]
  i1600.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1601[3], i1600.m_Metrics)
  i1600.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1601[4], i1600.m_GlyphRect)
  i1600.m_Scale = i1601[5]
  i1600.m_AtlasIndex = i1601[6]
  i1600.m_ClassDefinitionType = i1601[7]
  return i1600
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1602 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1603 = data
  var i1605 = i1603[0]
  var i1604 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1605.length; i += 1) {
    i1604.add(request.d('TMPro.TMP_Style', i1605[i + 0]));
  }
  i1602.m_StyleList = i1604
  return i1602
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1608 = root || request.c( 'TMPro.TMP_Style' )
  var i1609 = data
  i1608.m_Name = i1609[0]
  i1608.m_HashCode = i1609[1]
  i1608.m_OpeningDefinition = i1609[2]
  i1608.m_ClosingDefinition = i1609[3]
  i1608.m_OpeningTagArray = i1609[4]
  i1608.m_ClosingTagArray = i1609[5]
  i1608.m_OpeningTagUnicodeArray = i1609[6]
  i1608.m_ClosingTagUnicodeArray = i1609[7]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1611 = data
  var i1613 = i1611[0]
  var i1612 = []
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1613[i + 0]) );
  }
  i1610.files = i1612
  i1610.componentToPrefabIds = i1611[1]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1617 = data
  i1616.path = i1617[0]
  request.r(i1617[1], i1617[2], 0, i1616, 'unityObject')
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1619 = data
  var i1621 = i1619[0]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 1) {
    i1620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1621[i + 0]) );
  }
  i1618.scriptsExecutionOrder = i1620
  var i1623 = i1619[1]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1623[i + 0]) );
  }
  i1618.sortingLayers = i1622
  var i1625 = i1619[2]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1625[i + 0]) );
  }
  i1618.cullingLayers = i1624
  i1618.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1619[3], i1618.timeSettings)
  i1618.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1619[4], i1618.physicsSettings)
  i1618.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1619[5], i1618.physics2DSettings)
  i1618.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1619[6], i1618.qualitySettings)
  i1618.enableRealtimeShadows = !!i1619[7]
  i1618.enableAutoInstancing = !!i1619[8]
  i1618.enableDynamicBatching = !!i1619[9]
  i1618.lightmapEncodingQuality = i1619[10]
  i1618.desiredColorSpace = i1619[11]
  var i1627 = i1619[12]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( i1627[i + 0] );
  }
  i1618.allTags = i1626
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1631 = data
  i1630.name = i1631[0]
  i1630.value = i1631[1]
  return i1630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1635 = data
  i1634.id = i1635[0]
  i1634.name = i1635[1]
  i1634.value = i1635[2]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1639 = data
  i1638.id = i1639[0]
  i1638.name = i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1641 = data
  i1640.fixedDeltaTime = i1641[0]
  i1640.maximumDeltaTime = i1641[1]
  i1640.timeScale = i1641[2]
  i1640.maximumParticleTimestep = i1641[3]
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1643 = data
  i1642.gravity = new pc.Vec3( i1643[0], i1643[1], i1643[2] )
  i1642.defaultSolverIterations = i1643[3]
  i1642.bounceThreshold = i1643[4]
  i1642.autoSyncTransforms = !!i1643[5]
  i1642.autoSimulation = !!i1643[6]
  var i1645 = i1643[7]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 1) {
    i1644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1645[i + 0]) );
  }
  i1642.collisionMatrix = i1644
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1649 = data
  i1648.enabled = !!i1649[0]
  i1648.layerId = i1649[1]
  i1648.otherLayerId = i1649[2]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1651 = data
  request.r(i1651[0], i1651[1], 0, i1650, 'material')
  i1650.gravity = new pc.Vec2( i1651[2], i1651[3] )
  i1650.positionIterations = i1651[4]
  i1650.velocityIterations = i1651[5]
  i1650.velocityThreshold = i1651[6]
  i1650.maxLinearCorrection = i1651[7]
  i1650.maxAngularCorrection = i1651[8]
  i1650.maxTranslationSpeed = i1651[9]
  i1650.maxRotationSpeed = i1651[10]
  i1650.baumgarteScale = i1651[11]
  i1650.baumgarteTOIScale = i1651[12]
  i1650.timeToSleep = i1651[13]
  i1650.linearSleepTolerance = i1651[14]
  i1650.angularSleepTolerance = i1651[15]
  i1650.defaultContactOffset = i1651[16]
  i1650.autoSimulation = !!i1651[17]
  i1650.queriesHitTriggers = !!i1651[18]
  i1650.queriesStartInColliders = !!i1651[19]
  i1650.callbacksOnDisable = !!i1651[20]
  i1650.reuseCollisionCallbacks = !!i1651[21]
  i1650.autoSyncTransforms = !!i1651[22]
  var i1653 = i1651[23]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1653[i + 0]) );
  }
  i1650.collisionMatrix = i1652
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1657 = data
  i1656.enabled = !!i1657[0]
  i1656.layerId = i1657[1]
  i1656.otherLayerId = i1657[2]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1661[i + 0]) );
  }
  i1658.qualityLevels = i1660
  var i1663 = i1659[1]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( i1663[i + 0] );
  }
  i1658.names = i1662
  i1658.shadows = i1659[2]
  i1658.anisotropicFiltering = i1659[3]
  i1658.antiAliasing = i1659[4]
  i1658.lodBias = i1659[5]
  i1658.shadowCascades = i1659[6]
  i1658.shadowDistance = i1659[7]
  i1658.shadowmaskMode = i1659[8]
  i1658.shadowProjection = i1659[9]
  i1658.shadowResolution = i1659[10]
  i1658.softParticles = !!i1659[11]
  i1658.softVegetation = !!i1659[12]
  i1658.activeColorSpace = i1659[13]
  i1658.desiredColorSpace = i1659[14]
  i1658.masterTextureLimit = i1659[15]
  i1658.maxQueuedFrames = i1659[16]
  i1658.particleRaycastBudget = i1659[17]
  i1658.pixelLightCount = i1659[18]
  i1658.realtimeReflectionProbes = !!i1659[19]
  i1658.shadowCascade2Split = i1659[20]
  i1658.shadowCascade4Split = new pc.Vec3( i1659[21], i1659[22], i1659[23] )
  i1658.streamingMipmapsActive = !!i1659[24]
  i1658.vSyncCount = i1659[25]
  i1658.asyncUploadBufferSize = i1659[26]
  i1658.asyncUploadTimeSlice = i1659[27]
  i1658.billboardsFaceCameraPosition = !!i1659[28]
  i1658.shadowNearPlaneOffset = i1659[29]
  i1658.streamingMipmapsMemoryBudget = i1659[30]
  i1658.maximumLODLevel = i1659[31]
  i1658.streamingMipmapsAddAllCameras = !!i1659[32]
  i1658.streamingMipmapsMaxLevelReduction = i1659[33]
  i1658.streamingMipmapsRenderersPerFrame = i1659[34]
  i1658.resolutionScalingFixedDPIFactor = i1659[35]
  i1658.streamingMipmapsMaxFileIORequests = i1659[36]
  i1658.currentQualityLevel = i1659[37]
  return i1658
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1666 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1667 = data
  i1666.xPlacement = i1667[0]
  i1666.yPlacement = i1667[1]
  i1666.xAdvance = i1667[2]
  i1666.yAdvance = i1667[3]
  return i1666
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"95":[96],"97":[96],"98":[96],"99":[96],"100":[96],"101":[96],"102":[8],"103":[68],"104":[105],"106":[105],"107":[105],"108":[105],"109":[105],"110":[105],"111":[105],"112":[113],"114":[113],"115":[113],"116":[113],"117":[113],"118":[113],"119":[113],"120":[113],"121":[113],"122":[113],"123":[113],"124":[113],"125":[113],"126":[68],"127":[13],"128":[129],"130":[129],"58":[16],"43":[44],"131":[28],"29":[28],"132":[16],"133":[68],"134":[68],"135":[79],"136":[137],"138":[16],"139":[16],"60":[58],"27":[26,16],"140":[16],"59":[58],"141":[16],"142":[16],"75":[16],"143":[16],"144":[16],"145":[16],"146":[16],"147":[16],"148":[16],"149":[26,16],"150":[16],"151":[16],"152":[16],"153":[16],"154":[26,16],"155":[16],"156":[80],"157":[80],"81":[80],"158":[80],"159":[68],"160":[68],"161":[137],"162":[68],"163":[68],"164":[26,16],"165":[16],"6":[13,16],"25":[16,26],"166":[16],"167":[26,16],"168":[13],"169":[26,16],"170":[16],"171":[137],"172":[139,16],"173":[139,16],"174":[139,16],"175":[139,16],"176":[139,16],"177":[139,16],"178":[139,16],"179":[139,16],"77":[139,16],"180":[139,16],"181":[139,16]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MonoBehaviour","_HoleMoney.Scripts.Game.TempSlot","_HoleMoney.Scripts.Game.Slot","UnityEngine.SpriteRenderer","TMPro.TextMeshPro","_HoleMoney.Scripts.Game.CoinBag","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","DG.Tweening.DOTweenVisualManager","DG.Tweening.DOTweenAnimation","UnityEngine.MeshRenderer","UnityEngine.MeshFilter","UnityEngine.Sprite","UnityEngine.RectTransform","UnityEngine.EventSystems.UIBehaviour","TMPro.TMP_FontAsset","UnityEngine.Texture2D","_HoleMoney.Scripts.Game.Row","_HoleMoney.Scripts.Game.Tile","UnityEngine.BoxCollider","_HoleMoney.Scripts.UI.UIBoosterBase","UnityEngine.GameObject","TMPro.TextMeshProUGUI","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Button","CrazyLabsExtension.HapticFeedbackUIButton","Base.UI.UIButtonBase","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","_HoleMoney.Scripts.Managers.CenterDataManager","_HoleMoney.Scripts.ScriptableObjects.GameData","Base.SO.MapData","_HoleMoney.Scripts.ScriptableObjects.LevelData","_HoleMoney.Scripts.ScriptableObjects.MaterialsSo","_HoleMoney.Scripts.ScriptableObjects.LevelDesigner","_HoleMoney.Scripts.ScriptableObjects.PrefabsSo","Base.SO.SkinsSo","Base.SO.MapSo","_HoleMoney.Scripts.Game.Hole","Base.Internal.SoundFx","UnityEngine.AudioSource","UnityEngine.AudioClip","_HoleMoney.Scripts.Game.Coin","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","_HoleMoney.Scripts.Game.Pig","Base.DotweenAnimations.BounceAnimation","Base.Internal.TimeToDeactivate","_HoleMoney.Scripts.Game.IceBox","_HoleMoney.Scripts.UI.GhostTrailUI","Base.UI.Build.IslandController","Base.UI.Build.TowerController","Base.UI.Build.UITowerBrickAmount","Base.UI.Build.SetHeight","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_HoleMoney.Scripts.Managers.AudioManager","Base.Internal.ActiveOnly3DLayoutGroup","_HoleMoney.Scripts.Game.TempSlotsManager","_HoleMoney.Scripts.Game.Grid","_HoleMoney.Scripts.Game.PigRowManager","_HoleMoney.Scripts.Game.PigRow","_HoleMoney.Scripts.Game.BagBooster","UnityEngine.Camera","_HoleMoney.Scripts.Managers.UIManager","_HoleMoney.Scripts.UI.UITop","_HoleMoney.Scripts.UI.UIWin","_HoleMoney.Scripts.UI.UILose","_HoleMoney.Scripts.UI.UIBoosters","DotweenAnimations.MoveAnimation","UnityEngine.UI.HorizontalLayoutGroup","Base.UI.CollectEffect","Coffee.UIEffects.UIShiny","_HoleMoney.Scripts.UI.UISettings","UnityEngine.Light","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","_HoleMoney.Scripts.Game.LevelDesigner","_HoleMoney.Scripts.Game.GameManager","_HoleMoney.Scripts.Managers.TutorialManager","_HoleMoney.Scripts.Managers.BoosterManager","UnityEngine.AudioListener","_HoleMoney.Scripts.Game.ResizeCamera","UnityEngine.Cubemap","UnityEngine.Font","UnityEngine.TextAsset","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","CrazyLabsExtension.HapticFeedbackToggle","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Kino.Bloom","ToonyColorsPro.Runtime.TCP2_CameraDepth","TCP2_Demo_InvertedMaskImage","TMPro.TextContainer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Coffee.UIEffects.BaseMaterialEffect","Coffee.UIEffects.BaseMeshEffect","Coffee.UIEffects.UIDissolve","Coffee.UIEffects.UIEffect","Coffee.UIEffects.UIFlip","Coffee.UIEffects.UIGradient","Coffee.UIEffects.UIHsvModifier","Coffee.UIEffects.UIShadow","Coffee.UIEffects.UISyncEffect","Coffee.UIEffects.UITransitionEffect"]

Deserializers.unityVersion = "2022.3.30f1";

Deserializers.productName = "Hole Coin";

Deserializers.lunaInitializationTime = "08/05/2025 03:25:57";

Deserializers.lunaDaysRunning = "0.2";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "31927";

Deserializers.projectId = "8dd6c23a054ebdf4789e7fb4978079d8";

Deserializers.packagesInfo = "com.unity.render-pipelines.universal: 14.0.11\ncom.unity.textmeshpro: 3.0.9\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

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

Deserializers.linearColorSpace = true;

Deserializers.buildID = "942f5a76-5acb-4ca8-b636-b5ad3e699ee0";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEditor","Recorder","RecorderWindow","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Coffee","UIEffects","GraphicConnector","Init"],["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

