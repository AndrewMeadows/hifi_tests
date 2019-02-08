// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);
var nitpick = createNitpick(Script.resolvePath("."));

var testsRootPath = nitpick.getTestsRootPath();

if (typeof Test !== 'undefined') {
    Test.wait(10000);
};

nitpick.enableRecursive();
nitpick.enableAuto();

Script.include(testsRootPath + "protocol/zone/test.js");
Script.include(testsRootPath + "protocol/text/test.js");
Script.include(testsRootPath + "protocol/sphere/test.js");
Script.include(testsRootPath + "protocol/polyvox/test.js");
Script.include(testsRootPath + "protocol/polyline/test.js");
Script.include(testsRootPath + "protocol/particleEffect/test.js");
Script.include(testsRootPath + "protocol/model/test.js");
Script.include(testsRootPath + "protocol/material/test.js");
Script.include(testsRootPath + "protocol/line/test.js");
Script.include(testsRootPath + "protocol/light/test.js");
Script.include(testsRootPath + "protocol/box/test.js");
Script.include(testsRootPath + "engine/render/shadows/normal/test.js");
Script.include(testsRootPath + "engine/render/shadows/grazing/test.js");
Script.include(testsRootPath + "engine/render/shadows/front/test.js");
Script.include(testsRootPath + "engine/render/mesh/MyAvatar/visibility/test.js");
Script.include(testsRootPath + "engine/render/mesh/MyAvatar/scale/test.js");
Script.include(testsRootPath + "engine/render/material/roughness_map/test.js");
Script.include(testsRootPath + "engine/render/material/roughness/test.js");
Script.include(testsRootPath + "engine/render/material/opacity/test.js");
Script.include(testsRootPath + "engine/render/material/normal_map/test.js");
Script.include(testsRootPath + "engine/render/material/emissive/test.js");
Script.include(testsRootPath + "engine/render/material/base/test.js");
Script.include(testsRootPath + "engine/render/material/albedo/test.js");
Script.include(testsRootPath + "engine/render/lod/entity/model/test.js");
Script.include(testsRootPath + "engine/render/lighting/ponctual/onTransparent/test.js");
Script.include(testsRootPath + "engine/render/geometry/invalidURL/test.js");
Script.include(testsRootPath + "engine/render/effect/highlight/coverage/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/visible_sky/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/partial_sky/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/none/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/low_range_low_ceiling/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/low_range_high_ceiling/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/low_range_high_base_low_ceiling/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/low_range/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/high_range/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/glare_small/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/glare_large/test.js");
Script.include(testsRootPath + "engine/render/effect/haze/color/test.js");
Script.include(testsRootPath + "engine/render/effect/bloom/test.js");
Script.include(testsRootPath + "engine/render/camera/secondary/test.js");
Script.include(testsRootPath + "engine/render/camera/primary/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/parabola/renderState/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/parabola/lockEnd/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/parabola/ignore/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/parabola/enable/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/renderState/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/lockEndUUID/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/lockEnd/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/ignore/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/faceAvatar/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/enable/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/distanceScaleEnd/test.js");
Script.include(testsRootPath + "engine/interaction/pointer/laser/centerEndY/test.js");
Script.include(testsRootPath + "engine/interaction/pick/collision/myavatar/test.js");
Script.include(testsRootPath + "engine/interaction/pick/collision/many/test.js");
Script.include(testsRootPath + "engine/interaction/pick/collision/identical/test.js");
Script.include(testsRootPath + "engine/interaction/pick/collision/filter/test.js");
Script.include(testsRootPath + "engine/interaction/pick/collision/cube/test.js");
Script.include(testsRootPath + "engine/controller/reticle/test.js");
Script.include(testsRootPath + "content/overlay/material/test.js");
Script.include(testsRootPath + "content/entity/zone/zoneOrientation/test.js");
Script.include(testsRootPath + "content/entity/zone/zoneEffects/test.js");
Script.include(testsRootPath + "content/entity/zone/shadowControl/test.js");
Script.include(testsRootPath + "content/entity/zone/create/test.js");
Script.include(testsRootPath + "content/entity/zone/ambientLightInheritance/test.js");
Script.include(testsRootPath + "content/entity/text/topMargin/test.js");
Script.include(testsRootPath + "content/entity/text/textColor/test.js");
Script.include(testsRootPath + "content/entity/text/textAlpha/test.js");
Script.include(testsRootPath + "content/entity/text/rightMargin/test.js");
Script.include(testsRootPath + "content/entity/text/lineHeight/test.js");
Script.include(testsRootPath + "content/entity/text/leftMargin/test.js");
Script.include(testsRootPath + "content/entity/text/bottomMargin/test.js");
Script.include(testsRootPath + "content/entity/text/billboardMode/test.js");
Script.include(testsRootPath + "content/entity/text/backgroundColor/test.js");
Script.include(testsRootPath + "content/entity/text/backgroundAlpha/test.js");
Script.include(testsRootPath + "content/entity/shape/renderLayer/front/test.js");
Script.include(testsRootPath + "content/entity/shape/renderLayer/alpha/test.js");
Script.include(testsRootPath + "content/entity/shape/create/test.js");
Script.include(testsRootPath + "content/entity/procedural/shapeUniforms/test.js");
Script.include(testsRootPath + "content/entity/polyline/textures/test.js");
Script.include(testsRootPath + "content/entity/polyline/strokeColors/test.js");
Script.include(testsRootPath + "content/entity/polyline/normals/test.js");
Script.include(testsRootPath + "content/entity/polyline/linePoints/test.js");
Script.include(testsRootPath + "content/entity/polyline/isUVModeStretch/test.js");
Script.include(testsRootPath + "content/entity/polyline/glow/test.js");
Script.include(testsRootPath + "content/entity/polyline/faceCamera/test.js");
Script.include(testsRootPath + "content/entity/polyline/color/test.js");
Script.include(testsRootPath + "content/entity/parenting/test.js");
Script.include(testsRootPath + "content/entity/model/renderLayer/hud/test.js");
Script.include(testsRootPath + "content/entity/model/renderLayer/front/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/transparent/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/objReader/still_life/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/vertexColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boxColor/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/box/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/gltfReader/gltfTestSuite/boomBox/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/still_life/test.js");
Script.include(testsRootPath + "content/entity/model/modelReaders/fbxReader/simple/test.js");
Script.include(testsRootPath + "content/entity/material/fallthrough/test.js");
Script.include(testsRootPath + "content/entity/material/create/test.js");
Script.include(testsRootPath + "content/entity/material/apply/targeting/test.js");
Script.include(testsRootPath + "content/entity/material/apply/overlays/model/test.js");
Script.include(testsRootPath + "content/entity/material/apply/entities/shape/test.js");
Script.include(testsRootPath + "content/entity/material/apply/entities/model/test.js");
Script.include(testsRootPath + "content/entity/material/apply/avatars/test.js");
Script.include(testsRootPath + "content/entity/light/spot/create/test.js");
Script.include(testsRootPath + "content/entity/light/point/create/test.js");
Script.include(testsRootPath + "content/entity/image/subImage/test.js");
Script.include(testsRootPath + "content/entity/image/keepAspectRatio/test.js");
Script.include(testsRootPath + "content/entity/image/emissive/test.js");
Script.include(testsRootPath + "content/entity/image/color/test.js");
Script.include(testsRootPath + "content/entity/image/billboardMode/test.js");
Script.include(testsRootPath + "content/entity/image/alpha/test.js");
Script.include(testsRootPath + "content/entity/grid/gridEvery/test.js");
Script.include(testsRootPath + "content/entity/grid/followCamera/test.js");
Script.include(testsRootPath + "content/entity/grid/color/test.js");
Script.include(testsRootPath + "content/entity/grid/alpha/test.js");

nitpick.runRecursive();
