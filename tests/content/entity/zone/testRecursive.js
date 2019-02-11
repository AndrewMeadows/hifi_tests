// This is an automatically generated file, created by nitpick
PATH_TO_THE_REPO_PATH_UTILS_FILE = "https://raw.githubusercontent.com/highfidelity/hifi_tests/master/tests/utils/branchUtils.js";
Script.include(PATH_TO_THE_REPO_PATH_UTILS_FILE);

if (typeof nitpick === 'undefined') nitpick = createNitpick(Script.resolvePath("."));
if (typeof testsRootPath === 'undefined') testsRootPath = nitpick.getTestsRootPath();

nitpick.enableRecursive();
nitpick.enableAuto();

Script.include(testsRootPath + "content/entity/zone/zoneOrientation/test.js");
Script.include(testsRootPath + "content/entity/zone/zoneEffects/test.js");
Script.include(testsRootPath + "content/entity/zone/shadowControl/test.js");
Script.include(testsRootPath + "content/entity/zone/create/test.js");
Script.include(testsRootPath + "content/entity/zone/ambientLightInheritance/test.js");

if (typeof runningRecursive === 'undefined') {
   runningRecursive = true;
   nitpick.runRecursive();
}

