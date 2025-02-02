// This is an automatically generated file, created by auto-tester on Jun 1 2018, 11:24

user = "highfidelity/";
repository = "hifi_tests/";
branch = "master/";

var autoTester = Script.require("https://github.com/highfidelity/hifi_tests/blob/master/tests/utils/autoTester.js?raw=true");

autoTester.enableRecursive();
autoTester.enableAuto();

Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/textures/procedural/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/shadows/normal/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/shadows/grazing/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/shadows/front/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/roughness_map/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/roughness/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/opacity/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/normal_map/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/emissive/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/base/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/material/albedo/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/lighting/ponctual/onTransparent/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/geometry/invalidURL/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/highlight/coverage/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/visible_sky/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/partial_sky/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/none/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/low_range_low_ceiling/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/low_range_high_ceiling/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/low_range_high_base_low_ceiling/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/low_range/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/high_range/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/glare_small/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/glare_large/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/haze/color/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/effect/bloom/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/render/antialiasing/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/renderState/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/lockEndUUID/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/lockEnd/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/ignore/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/faceAvatar/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/distanceScaleEnd/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/engine/interaction/pointer/laser/centerEndY/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/zone/zoneOrientation/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/zone/create/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/zone/ambientLightZoneEffects/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/zone/ambientLightInheritance/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/shape/create/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/procedural/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/material/create/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/material/apply/overlays/model/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/material/apply/entities/shape/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/material/apply/entities/model/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/material/apply/avatars/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/light/spot/create/test.js?raw=true");
Script.include("https://github.com/highfidelity/hifi_tests/blob/master/tests/content/entity/light/point/create/test.js?raw=true");

autoTester.runRecursive();
