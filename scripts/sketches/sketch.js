/**
 * SUPPLY MISSION - I
 * Created by @Sameer_Karna on 21st of November 2020
 * Project of WHitehat jr. - Class - 21
 * --------------------------------------------------------------
 * Copyright (c) 2020 the Daring Games group, All rights reserved
 * --------------------------------------------------------------
 * This program is given to the viewers "as is" to view it.
 * The above Copyright prohibits any copying of this program.
 * The viewer can handle & view this program.
 */


/**
 * To understand this program, I request you to read the following intructions.
 * ----------------------------------------------------------------------------
 * The @variables created in this program are for initialization of certain assets-
 * -such as sprites, images, time, gameStates etc...
 * 
 * You may also view the @function preload to see the initialization of assets.
 * 
 * @var game_time is the time for gameState @PLAY . This "time" is used for creating-
 * -certain effects which improves the quality of the game.
 * 
 * @var game_time_end_state is the same as @var game_time . But this time is for the 'END' states.
 * 
 * You may view the @function preload for seeing the loading process of assets such as sound, images & fonts.
 * 
 * You may see the @function setup for viewing different objects used in this game. In this function-
 * -sprites, @Matter bodies and @canvas is created. In this function the GameState's values are also declared.-
 * -In this function, different groups have been also declared.
 * 
 * You may see the @function draw for seeing the initialization of different game states and the conditions-
 * -inside them. This function is also used for editing the position of sprites, Matter Bodies etc. This function-
 * -is also used for drawing text and it also contains the @background property which specifies the canvas background-
 * -color. It also contains the @drawSprites function which draws all the sprites.
 * 
 * You may see the @function keyPressed for clearance of key Pressed commands for Matter elements. It has a condition if-
 * -the gameState is in "PLAY" mode & the gameTime of PLAY state is more that 35, then only the KeyDown command will work.-
 * -This keyDown commandalso has another condition. If the key is pressed (DOWN_ARROW), then the Matter Body (Package Box)-
 * -Will no longer be static.
 * 
 * You may see the @function spawnZombie1 for clearance of zombie sprites. This function contains the initialization of the 
 * first zombie sprite. This function is called in the @function draw because then only a zombie sprite can be spawned numerous-
 * -times. 
 * 
 * You may see the @function spawnZombie2 for clearance of the second zombie sprite. This function has the same properties of-
 * -the @function spawnZombie1 , but this is another zombie sprite.
 * ----------------------------------------------------------------------------------------------------------------------------
 */



/*==========================================================
=-------------------=| INITIALIZATION |=-------------------=
==========================================================*/



  //To create Game Time for PLAY state.
    var game_time;
    var game_time_end_state;


  //Variables for gameStates and their sub-parts.
    var gameState, START, PLAY, END1, END2, END3;


  //Variables for StartScreen assets.
    //Variables for game logo.
      var startScreen_img_logo, startScreen_img_sprite;

    //Variables for starting game zombie icon.
      var starting_game_icon, starting_game_icon_img;

    //Variables for play button.
      var playButton_sprite, playButton_image;


  /*=============================
  -------- START VAR END --------
  ==============================*/



  //Variables for Play Screen assets.
    //Variables for target building.
      var target_building_img, target_building_sprite;

    //Target Building - 2, in which the package box is supposed to drop.
      var target_building_2_img, target_building_2_sprite;

    //Thrust sprite and image variables, to show thrust effect of a plane.
      var thrust_img, thrust_sprite;

    //Zombie Group for creating a group for zombies.
      var zombieGroup, zombie2Group;

    //"Good Luck" emoji sprite and image variable, for a text effect in game state PLAY.
      var gl_emoji_sprite, gl_emoji_img;


  /*=============================
  -------- PLAY VAR END ---------
  ==============================*/



  //Variables for END1 screen assets.
    //Variable for 'well done' image.
      var wellDone_img, wellDone_sprite;

    //Variables for star image, to show points of the player.
      var star_sprite, star_img;


  /*=============================
  --------- END1 VAR END --------
  ==============================*/



  //Variables for FONTS.
    //Font Family: Killerboots.
      var The_Ultimatum;

    //Font Family: DLE digital.
      var Superba;

    //Font Family: Josefin Sans.
      var MAGNIFICIENTO;

    //Font Family: Josefin Slab.
      var infinity_XTREME;


  /*=============================
  -------- FONT VAR END ---------
  ==============================*/



  //Variable for sounds.
    //Variable for button click sound effect.
      var button_click_sound;

    //Starting background theme music.
      var starting_bg_theme_music;

    //Play State bg theme music
      var pl_state_bg_theme_music;

    //Variable for PLANE FLYING sounnd: this sound is called in gameState END1
      var Plane_Win_State_Sound;

    //Variable for Plane Crash sound.
      var crash_sound;


/*=============================
-------- SOUND VAR END --------
==============================*/



  //Variables for sprites. These sprites will remain in each and every GameState.
    var helicopter_image, helicopter, packageSprite, packageIMG;


  //Variables for Matter Bodies
    var packageBody, ground;


  //Constants for Matter Elements.
    const Engine = Matter.Engine;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Body = Matter.Body;



  //This function is used for loadings assets.
    function preload() {

      //Loading Fonts.
        //Loading KILLERBOOTS font family and giving it a unique name.
          The_Ultimatum = loadFont("fonts/KILLERBOOTS.TTF");

        //Loading DLE DIGITAL font family and giving it a unique name.
          Superba = loadFont("fonts/DleDigitalRegular-62Vo.ttf");

        //Loading JOSEFIN SANS font family and giving it a unique name.
          MAGNIFICIENTO = loadFont("fonts/JosefinSans-Regular.ttf");

        //Loading JOSEFIN SLAB font family and giving it a unique name.
          infinity_XTREME = loadFont("fonts/JosefinSlab-SemiBold.ttf");


      //StartScreen Images/sounds.  
        //To load Logo of the game.
          startScreen_img_logo = loadImage("images/logo.png");

        //To load Image for playButton.
          playButton_image = loadImage("images/play_button.png");

        //To load button click sound.
          button_click_sound = loadSound('sounds/button_click.mp3');

        //To load the starting background theme music.
          starting_bg_theme_music = loadSound('sounds/starting_bg_music.mp3');

        //To load the starting game Icon image.
          starting_game_icon_img = loadImage("images/starting_gameIcon.png");


      //Play screen images/sounds.
        //To load the play state background theme music.
          pl_state_bg_theme_music = loadSound('sounds/playState_bg_music.mp3');

        //To load false target building's image.
          target_building_img = loadImage("images/Untitled.png");

        //To load the target building image.
          target_building_2_img = loadImage("images/destroyed_building_pickup_for_packageBox2.png");

        //To load Good Luck image for a text effect in PLAY state.
          gl_emoji_img = loadImage("images/gl.png");


      //END-1 screen images/sounds.
        //To load Plane flying sound effect
          Plane_Win_State_Sound = loadSound("sounds/airplane-fly-over-01.mp3");

        //To load thums up images for gameState END-1
          wellDone_img = loadImage("images/good.png");

        //To load golden star image for gameState END-1.
          star_img = loadImage("images/star.png");


      //END-2 screen images/sounds.
        //To load plane crashing sound effect.
          crash_sound = loadSound("sounds/crash-sound.mp3");


      //These images will remain in all gameStates.
        //Image for player helicopter/plane.
          helicopter_image = loadImage("images/plane.png");

        //Image for groundSprite.
          groundSpriteIMG = loadImage("images/ground (2).png");
        
        //Image for PackageSprite.
          packageIMG = loadImage("images/box.jpg");
        
        //To load Image for thrust effect
          thrust_img = loadImage("images/pngegg.png");    
    }



  //This function is used for creating canvas, Matter bodies, Sprites etc.
    function setup() {

      //To create a Canvas with certain dimensions.
        createCanvas(1200, 700);

      //For creating a center alignment of assets.
        rectMode(CENTER);
      
      //To create an engine on which the Matter World will run.
        engine = Engine.create();

      //To create a world in which Matter bodies will be placed.
        world = engine.world;

      
      //These sprites will remain in all gameStates.
        //To create a Package Body.
          packageBody = Bodies.rectangle(width/2 , 100 , 20 , 20, {restitution:0.7, isStatic:true});
            World.add(world, packageBody);
      
        //To create a ground sprite for the ground body.
          ground_sprite = createSprite(1200, 710, 1900, 10);
            ground_sprite.addImage(groundSpriteIMG, 1200, 1200);
            ground_sprite.visible = false;
            ground_sprite.x = width/2;

        //To create a Package Sprite for the Package body.
          packageSprite=createSprite(-5, 80, 20,20);
            packageSprite.addImage(packageIMG);
            packageSprite.visible = false;
            packageSprite.scale = 0.04;

        //To create a helicopter sprite.
          helicopter=createSprite(0, 100, 10, 10);
            helicopter.addImage(helicopter_image);
            helicopter.visible = false;
            helicopter.scale=0.1;

        //Thrust effect sprite.
          thrust_sprite = createSprite(0, 100);
            thrust_sprite.addImage(thrust_img);
            thrust_sprite.scale = 0.069;
            thrust_sprite.rotation = 270;
            thrust_sprite.visible = false;

        //To create a ground body.
          ground = Bodies.rectangle(width/2, 565, width, 10 , {isStatic:true});
            World.add(world, ground);


      //These sprites will only remain in GameState START.
        //To create the LOGO Sprite.
          startScreen_img_sprite = createSprite(600, 200);
            startScreen_img_sprite.addImage(startScreen_img_logo);
            startScreen_img_sprite.visible = false;

        //To create the play Button sprite.
          playButton_sprite = createSprite(600, 450);
            playButton_sprite.addImage(playButton_image);
            playButton_sprite.scale = 0.2;
            playButton_sprite.visible = false;

        //To create the starting game icon.
          starting_game_icon= createSprite(1100, 500);
            starting_game_icon.addImage(starting_game_icon_img);
            starting_game_icon.scale = 0.3;
            starting_game_icon.velocityX = -1;
            starting_game_icon.visible = false;


      //These sprites will remain only in GameState PLAY.
        //To create false target building sprite.
          target_building_sprite = createSprite(2000, 443);
            target_building_sprite.addImage(target_building_img);
            target_building_sprite.scale = 0.4;
          
        //To create the target buildng sprite.
          target_building_2_sprite = createSprite(random(2600, 3500), 460);
            target_building_2_sprite.addImage(target_building_2_img);
            target_building_2_sprite.scale = 0.25;

        //Good Luck thumbs up image for a text effect.
          gl_emoji_sprite = createSprite(950, 300);
            gl_emoji_sprite.addImage(gl_emoji_img);
            gl_emoji_sprite.scale = 0.13;
            gl_emoji_sprite.visible = false;


      //These sprites will remain only in GameState END-1.
        //Well Done (thumbs up) image for this game State.
          wellDone_sprite = createSprite(600, -200);
            wellDone_sprite.addImage(wellDone_img);
            wellDone_sprite.visible = false;
            wellDone_sprite.scale = 0.5;

        //Star Sprites for telling the score and creating an effect.
          //Star - 1.
            star_sprite = createSprite(450, 450);
              star_sprite.addImage(star_img);
              star_sprite.scale = 0.2;
              star_sprite.visible = false;

          //Star - 2.
            star_sprite2 = createSprite(600, 450);
              star_sprite2.addImage(star_img);
              star_sprite2.scale = 0.2;
              star_sprite2.visible = false;

          //Star - 3.
            star_sprite3 = createSprite(750, 450);
              star_sprite3.addImage(star_img);
              star_sprite3.scale = 0.2;
              star_sprite3.visible = false;


      //To play the starting background theme music.
        starting_bg_theme_music.play();


      //To run the Matter Engine.
        Engine.run(engine);
      
      
      //To declare the values of each game State. 
        START = 0;
        PLAY = 1;
        END1 = 2;
        END2 = 3;
        END3 = 4;


      //This will set a specific game state in the beginning.
        gameState = START;


      //This defines the value of the game time.
        game_time = 0;


      //This defines the value of game time for end state.
        game_time_end_state = 0;


      //Creating the zombie groups.
        zombieGroup = createGroup();
        zombie2Group = createGroup();
    }



  //Function draw which draws the sprites, takes if/else conditions and also creates text (if any).
    function draw() {

      //For creating a center alignment of assets.
        rectMode(CENTER);

      //To set a background color.
        background(0);

      //To specify the location & position of the groundSprite IMG & set its velocity.
        groundSpriteIMG.width = 2500;

      //Conditions for when the game state will be set to start
        if(gameState === START) {

          //To make the assets which are needed visible.
            startScreen_img_sprite.visible = true;
            playButton_sprite.visible = true;
            starting_game_icon.visible = true;

          //Key Condition for when mouse is pressed over the button sprite.
            if(mousePressedOver(playButton_sprite)) {

              //Button click sound will play.
                button_click_sound.play();

              //GameState will change to 'PLAY'.
                gameState = PLAY;

              //Sound of PLAY state will start.
                pl_state_bg_theme_music.play();
            }
        }


      //Condition for when the game state will be set to "START".
        if(gameState === PLAY) {
          
          //To mae the assets which have been invisible, visible.
            ground_sprite.visible = true;
            helicopter.visible = true;
            packageSprite.visible = true;
        
          //To stop the start state's theme music.
            starting_bg_theme_music.stop();
        
          //To make the assets which are not needed, invisible.
            startScreen_img_sprite.visible = false;
            playButton_sprite.visible = false;
            starting_game_icon.visible = false;

          //To make the ground move only if the game time is more than 8.
            if(game_time >8) {
              ground_sprite.velocityX = -4;
            }

          //Condition for package box to move with the plane by a specific time.
            if(game_time >0 && game_time <7) {
              packageSprite.velocityX = 3;
            } else {
              packageSprite.velocityX = 0;
            }

          //At a certain point, package should move with the plane to conceal it.
            if(game_time >10) {
              packageSprite.velocityX = -0.5;
            }

          //To make the package box stop with the plane at a certain point.
            if(game_time >18) {
              packageSprite.velocityX = 0;
            }

          //To create a starting effect for the plane via game time.
            if(game_time <7) {
              helicopter.velocityX = 3;
            } else {
              helicopter.velocityX = 0;
            }

            if(game_time >10) {
              helicopter.velocityX = -0.5;
            }

            if(game_time >18) {
              helicopter.velocityX = 0;
            }

          //To make the X position of the thrust sprite the same as helicopter.
            thrust_sprite.x = helicopter.x - 152;

          //To create a starting effect for the plane via game time.  
            if(game_time >0 && game_time <19) {
              thrust_sprite.visible = true;
            } else {
              thrust_sprite.visible = false;
            }

          //To make the building come in the screen only if the game time is more than "30".
            if(game_time >30) {
              target_building_2_sprite.velocityX = -4;
              target_building_sprite.velocityX = -4;
            }

          //Setting the Game time.
            if(frameCount/10) {
              game_time = game_time + 1 / 20;
            }

          //To spawn a zombie at each frameRate.
            spawnZombie1();
            spawnZombie2();

          //To create ann infinte scrolling baclground for the game.
            if(ground_sprite.x <0) {
              ground_sprite.x = width/2;
            }

          //If the package is dropped then this will set a specific velocity & position.
            if(packageSprite.y >510) { 
              packageSprite.velocityX = 1;

              if(packageSprite.isTouching(ground_sprite)) {
                packageSprite.velocityX = -4;
              }
            }

          //If the package box is touching target building.
            if(packageSprite.isTouching(target_building_2_sprite)) {
              Plane_Win_State_Sound.play();
              gameState = END1;
            }

          //If the package box is touching the false target building.
            if(packageSprite.isTouching(target_building_sprite)) {
              gameState = END2;
              crash_sound.play();
            }

          //If the game time reaches "90", then the game will end.
            if(game_time >90) {
              gameState = END3;
            } 

          //To match the position of the package box with the package body.
            packageSprite.y= packageBody.position.y + 20; 
        }


      //Condition for gameState END-1, this gameState will come into play only if the player wins.
        if(gameState === END1) {

          //To make the assets which are not needed anymore, destroy.
            zombieGroup.destroyEach();
            zombie2Group.destroyEach();
            target_building_2_sprite.destroy();
            packageSprite.destroy();

          //To set the gametime for end state.
            if(frameCount/10) {
              game_time_end_state = game_time_end_state + 1 / 20;
            }

          //If helicopter goes out of the screen then the following program comes into play.
            if(helicopter.x >1300) {

              //To make the well done image sprite
              wellDone_sprite.visible = true;
              wellDone_sprite.velocityY = 14;

              //If well done sprite's position is greater than 200.
                if(wellDone_sprite.y > 200) {
                  wellDone_sprite.velocityY = 0;
                }

              //If game time of end state is more than 17.
                if(game_time_end_state >17) {
                  star_sprite.visible = true;
                }

                if(game_time_end_state >19) {
                  star_sprite2.visible = true;
                }

                if(game_time_end_state >20) {
                  star_sprite3.visible = true;
                }

              //To make the assets which are not needed anymore, invisible.
                if(game_time_end_state >24) {
                  star_sprite.visible = false;
                  star_sprite2.visible = false;
                  star_sprite3.visible = false;
                  wellDone_sprite.visible = false;
                }

              //This changes the background color.
                background(255, 255, 255);

              //To make the assets which are not needed anymore, destroy.
                helicopter.destroy();
                thrust_sprite.destroy();
                packageSprite.destroy();
                ground_sprite.destroy();
                target_building_2_sprite.destroy();
            }

            //To stop the play state music.
              pl_state_bg_theme_music.stop();

            //This sets the helicopter's X velocity.
              helicopter.velocityX = 3;

            //To make the thrust sprite visible and setting its position. 
              thrust_sprite.visible = true;
                thrust_sprite.x = helicopter.x - 152;
            
            //To make the ground stop moving.
              ground_sprite.velocityX = 0;

            //To make the target building stop moving.
              target_building_2_sprite.velocityX = 0;
          }


        //Condition for the game State END-2, when the player hits the wrong building and loses.
          if(gameState === END2) {

            //To stop the play state music.
              pl_state_bg_theme_music.stop();

            //To make the ground stop moving.
              ground_sprite.velocityX = 0;

            //This destroys the assets which are not needed anymore.
              packageSprite.destroy();

            //To set the game time of end state.
              if(frameCount/10) {
                game_time_end_state = game_time_end_state + 1 / 20;
              }

            //Condition If game time is more than 10.
              if(game_time_end_state >10) {

                //This changes the background color.
                  background(255, 255, 255);

                //This makes the assets which are not needed anymore, invisible.
                  target_building_2_sprite.visible = false;
                  target_building_sprite.visible = false;
                  ground_sprite.visible = false;
              }

            //To stop buildings' movement.
              target_building_sprite.velocityX = 0;
              target_building_2_sprite.velocityX = 0;

            //This destroys the zombies.
              zombieGroup.destroyEach();
              zombie2Group.destroyEach();

            //To create a crashing effect for helicopter by rotating it.
              helicopter.rotationSpeed = 7;
              helicopter.velocityY = 8;

            //If helicopter's Y position is more than "300".
              if(helicopter.y >300) {
                helicopter.velocityX = 4;
              }
          }


        //Condition for the gameState END-3, when the time runs out and the player loses.
          if(gameState === END3) {

            //This changes the background color.
              background(255, 255, 255);

            //To make the assets which are not needed anymore, invisible.
              target_building_2_sprite.visible = false;
              target_building_sprite.visible = false;
              ground_sprite.visible = false;
              helicopter.visible = false;
              thrust_sprite.visible = false;
              packageSprite.visible = false;

            //This stops the play state's music.
              pl_state_bg_theme_music.stop();

            //This destroys the zombies.
              zombieGroup.destroyEach();
              zombie2Group.destroyEach();
          }


      //To display and draw the sprites.
        drawSprites();

      //TEXT CONDITIONS.
          //Text condition for when the game state is play and time is between
            if(game_time >10 && game_time <17 && gameState == PLAY) {

              //Push and pop command seperates the program inside it.
                push();

                  //Color of text.
                    fill(255);

                  //Size of text.
                    textSize(50);

                  //Font.
                    textFont(The_Ultimatum);

                  //TextStyle.
                    textStyle(BOLD);

                  //Stroke color.
                    stroke("green");

                  //Tint.
                    tint(0, 153, 204);

                  //StrokeWeight.
                    strokeWeight(3);

                  //TEXT
                    text("SOLDIER!", 500, 200);

                  //Textstyle.
                    textStyle(NORMAL);

                  //Strokeweight.
                    strokeWeight(0);

                  //TEXT.
                    text("YOUR JOB IS TO DELIVER", 300, 300);
                    text("THE PACKAGE SAFELY", 350, 400);
                    text("TO CIVILLIANS", 450, 500);
                pop();
            }


        //If the game state is play and time is between 17 & 24.
          if(game_time >17 && game_time <24 && gameState == PLAY) {

            //Push and pop command seperates the program inside it.
              push();

                //Color of text.  
                  fill(255);

                //Size of text.
                  textSize(50);

                //Font.
                  textFont(The_Ultimatum);

                //TextStyle.
                  textStyle(NORMAL);

                //TEXT.
                  text("A ZENDEVOUS PLACE", 300, 250);
                  text("HAS BEEN SCHEDULED", 280, 350);
                  text("BY THE SURVIVORS", 320, 450);
              pop();
          }

        //If the gameState is PLAY and time is between 24 and 31.
          if(game_time >24 && game_time <31 && gameState == PLAY) {

            //Push and pop command seperates the program inside it.
              push();

                //Color of text.
                  fill(255);

                //TextSize.
                  textSize(50);

                //Font.
                  textFont(The_Ultimatum);

                //Text style.
                  textStyle(NORMAL);

                //TEXT.
                  text("YOU HAVE TO", 400, 200);
                  text("DROP THE PACKAGE", 310, 300);
                  text("IN THE SECOND", 370, 400);
                  text("BUILDING YOU SEE", 320, 500);
              pop();
          }
        

        //If the gameState is PLAY and gametime is between 34 and 41.
          if(game_time >34 && game_time <41 && gameState == PLAY) {

            //Push and pop command seperates the program inside it.
              push();

                //Thumbs up image made visible.
                  gl_emoji_sprite.visible = true;

                //Color of text.
                  fill(255);

                //Text size.
                  textSize(120);

                //Font.
                  textFont(The_Ultimatum);

                //Textstyle.
                  textStyle(BOLD);

                //TEXT.
                  text("GOOD LUCK", 150, 350);

                //TextStyle.
                textStyle(NORMAL);
              pop();
          } 
            else {

              //Thumbs up sprite made invisible.
                gl_emoji_sprite.visible = false;
          }


        //If gameState is PLAY.
          if(gameState == PLAY) {

            //Push and pop command seperates the program inside it.
              push();

                //Color of text.
                  fill("white");

                //Font.
                  textFont("Arial");

                //Size of text.
                  textSize(10);

                //TEXT FOR GAMETIME.
                  text(game_time, -1000, -1000);
              pop();
          }


        //If gameState is END -1.
          if(gameState == END1) {

            //Font.
              textFont(Superba);

            //Text color.
              fill("green");

            //Size of text.
              textSize(15);

            //TEXT.
              text(game_time_end_state, -1000, -1000);
          } 


        //If gamestate is END - 2.
          if(gameState == END2) {

            //Font.
              textFont(Superba);

            //Color of text.
              fill("green");

            //Size.
              textSize(15);

            //TEXT.
              text(game_time_end_state, -1000, -1000);
          } 

        
        //If game state is END - 1 && gameENd Time is more than 24.
          if(gameState == END1 && game_time_end_state >24) {

            //Push and pop command seperates the program inside it.
              push();

                //Size of text.
                  textSize(100);

                //TextColor.
                  fill(95,255,60);

                //TEXT.
                  text("WELL DONE", 165, 200);

                //Font.
                  textFont(infinity_XTREME);

                //Text size.
                  textSize(50);

                //Color of text.
                  fill("grey");

                //TEXT.
                  text("To Play Again, Refresh the page.", 270, 400);

                //Size of text.
                  textSize(20);

                //Color of text.
                  fill("green");

                //TEXT.
                  text("Supply Mission - I", 500, 620);
                  text("Copyright © 2020 Daring Games, All rights reserved", 350, 660);
              pop();
          }


        //If game State is END -2 and gameEndTime is more than 10.
          if(gameState == END2 && game_time_end_state >10) {

            //Push and pop command seperates the program inside it.
              push();

                //Size of text.
                  textSize(120);

                //TextColor.
                  fill("red");

                //TEXT.
                  text("OH NO!", 280, 200);

                //Font.
                  textFont(The_Ultimatum);

                //Size of text.
                  textSize(30);

                //TEXT.
                  text("YOU DID NOT COMPLETE YOUR MISSION", 270, 270);

                //Color of text.
                  fill("green");

                //TEXT.
                  text("YOU HAD TO DROP THE PACKAGE IN THE SECOND BUILDING!", 120, 313);

                //Font.
                  textFont(infinity_XTREME);

                //Size of text.
                  textSize(50);

                //Color.
                  fill("grey");

                //TEXT.
                  text("To complete your Mission", 300, 420);
                  text("Play Again by Refreshing the page", 220, 480);

                //Size of text.
                  textSize(20);

                //Color of text.
                  fill("green");

                //TEXT.
                  text("Supply Mission - I", 500, 620);
                  text("Copyright © 2020 Daring Games, All rights reserved", 350, 660);
              pop();
          }


        //If gameState is END - 3.
          if(gameState === END3) {

            //Color of text.
              fill("red");

            //Size of text.
              textSize(110);

            //Font.
              textFont(Superba);

            //TEXT.
              text("GAME OVER", 110, 200);

            //Font.
              textFont(The_Ultimatum);

            //Size of text.
              textSize(30);

            //TEXT.
              text("YOU DID NOT COMPLETE YOUR MISSION", 270, 270);

            //Text font.
              textFont(infinity_XTREME);

            //Size of text.
              textSize(50);

            //Color.
              fill("grey");

            //TEXT.
              text("To complete your Mission", 300, 420);
              text("Play Again by Refreshing the page", 220, 480);

            //Size of text.
              textSize(20);

            //Color of text.
              fill("green");

            //TEXT.
              text("Supply Mission - I", 500, 620);
              text("Copyright © 2020 Daring Games, All rights reserved", 350, 660);
          }
    } 



  //Function for a keyboard event.
    function keyPressed() {

      //This is a cndition for a specific event.
        if (keyCode === DOWN_ARROW && gameState === PLAY && game_time >35) {
          Matter.Body.setStatic(packageBody, false)
        }
    }


  //To spawn one type of a zombie.
    function spawnZombie1() {

      //Spawning zombies at a certain framerate.
        if(frameCount%50 == 0 && game_time >20) {

          //Creating Zombie sprites.
            zombie = createSprite(1200, 560);
              zombie.scale = 0.45;
              zombie.addAnimation("images/zombie1.png", "images/zombie2.png", "images/zombie3.png", "images/zombie4.png");
              zombie.velocityX = -6;
              zombie.lifetime = 200;

          //If gameState is END 1.
            if(gameState == END1) {
              zombie.destroy();
            }

          //This adds the zombie to the zombie group.
            zombieGroup.add(zombie);
        }
    }


  //To spawn another type of a zombie.
    function spawnZombie2() {

      //Spawning zombies at a certain framerate.
        if(frameCount%80 == 0 && game_time >20) {

          //Creating Zombie sprites.
            zombie2 = createSprite(1200, 560);
              zombie2.scale = 0.5;
              zombie2.addAnimation("images/zomb1.png", "images/zomb2.png", "images/zomb3.png", "images/zomb4.png");
              zombie2.velocityX = -5;

          //If gameState is END 1.
            if(gameState == END1) {
              zombie2.destroy();
            }

          //This adds the zombie to the zombie group.
            zombie2Group.add(zombie2);
        }
    }



/*==========================================================
=-------------------=| MAIN JSDOC END |=-------------------=
==========================================================*/