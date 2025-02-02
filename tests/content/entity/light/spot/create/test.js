if (typeof user === 'undefined') user = "highfidelity/";
if (typeof repository === 'undefined') repository = "hifi_tests/";
if (typeof branch === 'undefined') branch = "master/";

var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Spot light", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest();
    spectatorCameraConfig.position = { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z - 0.2 };

    // Test material matrix
    Script.include("../../../../../utils/test_stage.js?raw=true")

    // Add the test Cases
	var flags = { 
		hasKeyLight: false,
		hasAmbientLight: false
	};
    var createdEntities = setupStage(flags)

    var posOri = getStagePosOriAt(6.9, 0, 4)
    var lightOri = Quat.multiply(Quat.fromPitchYawRollDegrees(-90, 0, 0), posOri.ori);

    // Define zone properties
    var properties = {
    lifetime: 120,  
    type: "light",  
    name: "test create spot light",
    position: posOri.pos,
    rotation: lightOri,

    type: "Light",
    isSpotlight: true,
    color: { red: 255, green: 255, blue: 255 },
    intensity: 2.0,
    falloffRadius: 6.0,
    exponent: 0.1,
    cutoff: 45,
    dimensions: { x: 8.0, y: 8.0, z: 12.0 }, 
    };

    // Add the sphere and check its properties
    var light = Entities.addEntity(properties);
    createdEntities.push(light);

    var posOri2 = getStagePosOriAt(6.9, 4, 4)
    var lightOri2 = Quat.multiply(Quat.fromPitchYawRollDegrees(-45, 90, 0), posOri.ori);

    properties = {
        lifetime: 120,  
        type: "light",  
        name: "test create spot light",
        position: posOri2.pos,
        rotation: lightOri2,
    
        type: "Light",
        isSpotlight: true,
        color: { red: 255, green: 125, blue: 255 },
        intensity: 2.0,
        falloffRadius: 6.0,
        exponent: 1,
        cutoff: 20,
        dimensions: { x: 8.0, y: 8.0, z: 12.0 }, 
    };
    createdEntities.push(Entities.addEntity(properties));

    properties = Entities.getEntityProperties(light);
    print("Light added :" + light);
    print(JSON.stringify(properties));

    createdEntities.push(light);

    //Add test steps, These may be called via the timing mechanism for auto-testing,
    // or stepped through with the space bar
    
    autoTester.addStepSnapshot("Display the 2 spotlights");

    autoTester.addStep("Clean up after test", function () {
        for (var i = 0; i < createdEntities.length; i++) {
            Entities.deleteEntity(createdEntities[i]);
        }
    });
    
    var result = autoTester.runTest(testType);
});

