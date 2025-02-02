if (typeof user === 'undefined') user = "highfidelity/";
if (typeof repository === 'undefined') repository = "hifi_tests/";
if (typeof branch === 'undefined') branch = "master/";

var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Laser - enabling and disabling", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest(true);

    Script.include("../laserPointerUtils.js?raw=true");

    var lasers = [];
    lasers.push(Pointers.createPointer(PickType.Ray, {
        position: Vec3.sum(Vec3.sum(pos, {x:0, y:0.5, z:0}), Vec3.multiply(-0.25, right)),
        direction: Vec3.normalize({x: 0, y: -1, z: 0}),
        filter: Picks.PICK_ENTITIES,
        renderStates: renderStates,
        defaultRenderStates: defaultRenderStates,
        enabled: true
    }));
    lasers.push(Pointers.createPointer(PickType.Ray, {
        position: Vec3.sum(Vec3.sum(pos, {x:0, y:0.5, z:0}), Vec3.multiply(0.25, right)),
        direction: Vec3.normalize({x: 0, y: -1, z: 0}),
        filter: Picks.PICK_ENTITIES,
        renderStates: renderStates,
        defaultRenderStates: defaultRenderStates,
        enabled: false
    }));

    for (i = 0; i < lasers.length; i++) {
        Pointers.setRenderState(lasers[i], "one");
    }

    Pointers.disablePointer(lasers[0]);
    Pointers.enablePointer(lasers[1]);

    autoTester.addStepSnapshot("Enabled right laser", function () {
        Pointers.disablePointer(lasers[1]);
        Pointers.enablePointer(lasers[0]);
    });

    autoTester.addStepSnapshot("Enabled left laser");
    
    autoTester.addStep("Clean up", function () {
        for (i = 0; i < lasers.length; i++) {
            Pointers.removePointer(lasers[i]);
        }
    });
    
    var result = autoTester.runTest(testType);
});