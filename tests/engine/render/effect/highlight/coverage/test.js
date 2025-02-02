if (typeof user === 'undefined') user = "highfidelity/";
if (typeof repository === 'undefined') repository = "hifi_tests/";
if (typeof branch === 'undefined') branch = "master/";

var autoTester = Script.require("https://github.com/" + user + repository + "blob/" + branch + "tests/utils/autoTester.js?raw=true" );

autoTester.perform("Highlight Test", Script.resolvePath("."), function(testType) {
    var spectatorCameraConfig = autoTester.setupTest();
    
    var createdEntities = [];
    var createdOverlays = [];

    // all objects will have a finite lifetime
    var LIFETIME = 300; // 5 min

    // Initial setup
    MyAvatar.goToLocation(
        { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z },
        true,
        Quat.angleAxis(0, { x: 0, y: 1, z: 0 }),
        true
    );
    
    spectatorCameraConfig.position = { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z - 8.0 };
    spectatorCameraConfig.orientation = { x: 0.0, y: 1.0, z: 0.0, w: 0.0 };
    
    var blueBox = Entities.addEntity({
        type: "Box",
        name: "BlueBox",
        position: { x: MyAvatar.position.x - 1.0, y: MyAvatar.position.y + 0.5, z: MyAvatar.position.z - 1.0 },
        dimensions: { x: 2, y: 0.25, z: 0.25 },
        dynamic: false,
        lifetime: LIFETIME,
        color: { red: 0, green: 0, blue: 155 }
    });
    
    var redSphere = Entities.addEntity({
        type: "Sphere",
        name: "RedSphere",
        position: { x: MyAvatar.position.x + 1.0, y: MyAvatar.position.y + 1.0, z: MyAvatar.position.z - 1.0 },
        dimensions: { x: 0.5, y: 0.5, z: 0.5 },
        dynamic: false,
        lifetime: LIFETIME,
        color: { red: 200, green: 0, blue: 0 }
    });
    
    var greenPaint = Entities.addEntity({
        color: {
            blue: 10,
            green: 10,
            red: 10
        },
        position: {x: MyAvatar.position.x + 1.25, y: MyAvatar.position.y - 0.5, z: MyAvatar.position.z + 1.0 },
        dimensions: { x: 1, y: 2.1, z: 0.1 },
        linePoints: [
            {
                "x": 0,
                "y": 0,
                "z": 0
            },
            {
                "x": 0.10061257518827915,
                "y": 0.16649961471557617,
                "z": 0.001007152532110922
            },
            {
                "x": 0.23273462429642677,
                "y": 0.40803611278533936,
                "z": 0.0010143050894839689
            },
            {
                "x": 0.34589760005474091,
                "y": 0.63782751560211182,
                "z": 0.0010214576468570158
            },
            {
                "x": 0.51725380122661591,
                "y": 1.0473054647445679,
                "z": 0.0010309943900210783
            },
            {
                "x": 0.61552040278911591,
                "y": 1.2999576330184937,
                "z": 0.0010381469473941252
            },
            {
                "x": 0.71815483272075653,
                "y": 1.5337413549423218,
                "z": 0.0010429153189761564
            },
            {
                "x": 0.86931221187114716,
                "y": 1.8406063318252563,
                "z": 0.0010524520621402189
            },
            {
                "x": 0.91085426509380341,
                "y": 1.9616776704788208,
                "z": 0.0010548362479312345
            },
            {
                "x": 0.88525764644145966,
                "y": 2.0158451795578003,
                "z": 0.0010548362479312345
            },
            {
                "x": 0.81161491572856903,
                "y": 1.9779795408248901,
                "z": 0.0010500678763492033
            },
            {
                "x": 0.72746269404888153,
                "y": 1.8921512365341187,
                "z": 0.001045299504767172
            },
            {
                "x": 0.50455085933208466,
                "y": 1.6641658544540405,
                "z": 0.0010309943900210783
            },
            {
                "x": 0.32814018428325653,
                "y": 1.4712589979171753,
                "z": 0.0010190734610660002
            },
            {
                "x": 0.2354239858686924,
                "y": 1.3538247346878052,
                "z": 0.0010143050894839689
            }
        ],
        name: "hifi_polyline_markerStroke",
        normals: [
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            },
            {
                "x": -6.1036087572574615e-05,
                "y": 1.862645149230957e-09,
                "z": 1
            }
        ],
        rotation: {
            "w": 1,
            "x": 0,
            "y": 0,
            "z": 0
        },
        strokeWidths: [
            0.020000000949949026,
            0.030666666571050882,
            0.041333334520459175,
            0.052000000141561031,
            0.062666665762662888,
            0.073333331383764744,
            0.0839999970048666,
            0.094666667282581329,
            0.094666667282581329,
            0.0839999970048666,
            0.073333331383764744,
            0.062666665762662888,
            0.052000000141561031,
            0.041333334520459175,
            0.030666666571050882
        ],
        textures: "http://mpassets.highfidelity.com/53f930fb-a433-4ccf-8974-2c53a631e40e-v1/markerStroke.png",
        type: "PolyLine",
        lifetime: LIFETIME,
        dynamic: false,
    });
    
    var hifi = Entities.addEntity({
        type: "Model",
        name: "Hifi",
        position: { x: MyAvatar.position.x, y: MyAvatar.position.y, z: MyAvatar.position.z + 2.0 },
        dimensions: { x: 2, y: 2, z: 2 },
        dynamic: false,
        lifetime: LIFETIME,
        modelURL: "https://github.com/highfidelity/hifi_tests/blob/master/assets/models/material_matrix_models/fbx/master/hifi.fbx?raw=true"
    });
    
    var terrain = Entities.addEntity(       {
        type: "PolyVox",
        name: "Terrain",
        position: { x: MyAvatar.position.x, y: MyAvatar.position.y - 3.0, z: MyAvatar.position.z + 5.0 },
        dimensions: { x: 16, y: 16, z: 16 },
        voxelData: "ABAAQAAQAAAAzgAAQAB42u3YMQ7DIBBE0bn/pZ0mRQxYRhFSwvr9bqn5mt05DmAdaeekndPOaeePl+T8kpxfcqadcYMfi6X+5wv/0/mfzv8cve+9/+A/fpr39/7Le/7jMf7Le/7jwff+wrwH//Hf9/66vA//+Y/t+/25vLff8x8F+v25vLff8x8V9v2p+36434P/2L7fG+T9cL93z/MfFfN+tN+75/mP/fN+rs97PzKK/yiW96P9Xn/HfxT0f5j3+jv+4zF5f9Xfgf+olvdX9zzq8wIVumOl",
        voxelSurfaceStyle: 0,
        voxelVolumeSize: { x: 16, y: 64, z: 16},
        lifetime: LIFETIME,
        dynamic: false,
        xTextureURL: "http://headache.hungry.com/~seth/hifi/dirt.jpeg",
        yTextureURL: "http://headache.hungry.com/~seth/hifi/grass.png",
        zTextureURL: "http://headache.hungry.com/~seth/hifi/dirt.jpeg"
    });

    var overlayProperties = {
        url: "https://github.com/highfidelity/hifi_tests/blob/master/assets/models/material_matrix_models/fbx/blender/hifi_metallicV_albedoVM_ao.fbx?raw=true",
        name: "overlayModel",
        position: { x: MyAvatar.position.x + 2.0, y: MyAvatar.position.y, z: MyAvatar.position.z + 3.0 },
        dimensions: { x: 2, y: 2, z: 2 },
        grabbable: true
    }
    var overlayModel = Overlays.addOverlay("model", overlayProperties);

    createdOverlays.push(overlayModel);

    createdEntities.push(blueBox);
    createdEntities.push(redSphere);
    createdEntities.push(greenPaint);
    createdEntities.push(hifi);
    createdEntities.push(terrain);

    autoTester.addStepSnapshot("Step 1",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 0, green: 255, blue: 250 },
                outlineOccludedColor: { red: 0, green: 255, blue: 250 },
                fillUnoccludedColor: { red: 255, green: 0, blue: 0 },
                fillOccludedColor: { red: 255, green: 0, blue: 0 },

                outlineUnoccludedAlpha: 0.7,
                outlineOccludedAlpha: 1.0,
                fillUnoccludedAlpha: 0.0,
                fillOccludedAlpha: 0.0,
                
                outlineWidth: 2,
                isOutlineSmooth: true
            }
            Selection.enableListHighlight("TestHifi1", style)
            Selection.addToSelectedItemsList("TestHifi1", "entity", blueBox)
        }
    );
    
    autoTester.addStepSnapshot("Step 2",
        function() {
             Selection.addToSelectedItemsList("TestHifi1", "entity", hifi)
        }
    );
    
    autoTester.addStepSnapshot("Step 3",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 0, green: 255, blue: 250 },
                outlineOccludedColor: { red: 0, green: 255, blue: 250 },
                fillUnoccludedColor: { red: 255, green: 0, blue: 0 },
                fillOccludedColor: { red: 255, green: 0, blue: 0 },

                outlineUnoccludedAlpha: 0.7,
                outlineOccludedAlpha: 1.0,
                fillUnoccludedAlpha: 0.0,
                fillOccludedAlpha: 0.5,
                
                outlineWidth: 2,
                isOutlineSmooth: true
            }
            Selection.enableListHighlight("TestHifi1", style)
        }
    );
    
    autoTester.addStepSnapshot("Step 4",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 255, green: 0, blue: 0 },
                outlineOccludedColor: { red: 0, green: 0, blue: 250 },
                fillUnoccludedColor: { red: 0, green: 255, blue: 0 },
                fillOccludedColor: { red: 0, green: 255, blue: 125 },

                outlineUnoccludedAlpha: 0.7,
                outlineOccludedAlpha: 1.0,
                fillUnoccludedAlpha: 0.5,
                fillOccludedAlpha: 0.3,
                
                outlineWidth: 5,
                isOutlineSmooth: false
            }
            Selection.enableListHighlight("TestHifi2", style)
            Selection.addToSelectedItemsList("TestHifi2", "entity", redSphere)
        }
    );

    autoTester.addStepSnapshot("Step 5",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 0, green: 244, blue: 255 },
                outlineOccludedColor: { red: 244, green: 255, blue: 250 },
                fillUnoccludedColor: { red: 0, green: 255, blue: 255 },
                fillOccludedColor: { red: 0, green: 255, blue: 125 },

                outlineUnoccludedAlpha: 0.7,
                outlineOccludedAlpha: 1.0,
                fillUnoccludedAlpha: 0.5,
                fillOccludedAlpha: 0.3,
                
                outlineWidth: 5,
                isOutlineSmooth: false
            }
            Selection.enableListHighlight("TestHifi4", style)
            Selection.addToSelectedItemsList("TestHifi4", "avatar", MyAvatar.sessionUUID)
        }
   );
   
    autoTester.addStepSnapshot("Step 6",   
       function() {
            var style = {        
                outlineUnoccludedColor: { red: 0, green: 255, blue: 0 },
                outlineOccludedColor: { red: 250, green: 0, blue: 0 },
                fillUnoccludedColor: { red: 128, green: 0, blue: 255 },
                fillOccludedColor: { red: 180, green: 255, blue: 85 },

                outlineUnoccludedAlpha: 0.7,
                outlineOccludedAlpha: 1.0,
                fillUnoccludedAlpha: 0.4,
                fillOccludedAlpha: 0.4,
                
                outlineWidth: 2,
                isOutlineSmooth: false
            }
            Selection.enableListHighlight("TestHifi3", style)
            Selection.addToSelectedItemsList("TestHifi3", "overlay", overlayModel)
        }
    );
    
    autoTester.addStepSnapshot("Step 7",    
        function() {
            Selection.addToSelectedItemsList("TestHifi3", "entity", terrain)
        }
    );
    
    autoTester.addStepSnapshot("Step 8",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 128, green: 255, blue: 250 },
                outlineOccludedColor: { red: 250, green: 25, blue: 250 },
                fillUnoccludedColor: { red: 250, green: 255, blue: 0 },
                fillOccludedColor: { red: 128, green: 255, blue: 0 },

                outlineUnoccludedAlpha: 0.0,
                outlineOccludedAlpha: 0.0,
                fillUnoccludedAlpha: 0.6,
                fillOccludedAlpha: 0.8,
                
                outlineWidth: 10,
                isOutlineSmooth: false
            }
            Selection.enableListHighlight("TestHifi2", style)
        }
    );
    
    autoTester.addStepSnapshot("Step 9",
        function () {
            Selection.disableListHighlight("TestHifi2");
        }
    );
    
    autoTester.addStepSnapshot("Step 10",
        function() {
            var style = {        
                outlineUnoccludedColor: { red: 250, green: 255, blue: 0 },
                outlineOccludedColor: { red: 128, green: 255, blue: 0 },
                fillUnoccludedColor: { red: 128, green: 255, blue: 250 },
                fillOccludedColor: { red: 250, green: 25, blue: 250 },

                outlineUnoccludedAlpha: 0.0,
                outlineOccludedAlpha: 0.0,
                fillUnoccludedAlpha: 0.6,
                fillOccludedAlpha: 0.8,
                
                outlineWidth: 5,
                isOutlineSmooth: true
            }
            Selection.enableListHighlight("TestHifi2", style)
        }
    );
    
    autoTester.addStepSnapshot("Step 11",
        function () {
            Selection.disableListHighlight("TestHifi1");
            Selection.disableListHighlight("TestHifi2");
            Selection.disableListHighlight("TestHifi3");
        }
    );
    
    autoTester.addStepSnapshot("Take snapshot");

    autoTester.addStep("Clean up after test", 
        function () {
            Selection.disableListHighlight("TestHifi1");
            Selection.disableListHighlight("TestHifi2"); 
            Selection.disableListHighlight("TestHifi3"); 
            Selection.disableListHighlight("TestHifi4"); 
            
            for (var i = 0; i < createdEntities.length; i++) {
                Entities.deleteEntity(createdEntities[i]);
            }

            for (var i = 0; i < createdOverlays.length; i++) {
                Overlays.deleteOverlay(createdOverlays[i]);
            }
        }
    );
    
    var result = autoTester.runTest(testType);
});
