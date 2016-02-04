$(document).ready(function() {
  
  $(".monster-card-generate button").on("click", function() {
    $(".monster-card-generate").addClass("hidden");
    $(".monster-card-wide").removeClass("hidden");
    monsterStats();
  });
  
  $(".monster-card-wide button").on("click", function() {
     monsterStats(); 
  });
  
});

var names = [
  "Bosco", 
  "Grimemirage", 
  "Pixie", 
  "Skeel", 
  "Thull", 
  "Reaper", 
  "Cra", 
  "Forest", 
  "Olsndot", 
  "Unkown", 
  "Rirdsaam",
  "Lieliah", 
  "Crabby", 
  "Creep", 
  "Fleeby",
  "Samwise",
  "Samson",
  "Philea",
  "Sansai",
  "Erm",
  "Noogi",
  "Sariman"
];

var img = [
  "dist/assets/img/wiz.png" , 
  "dist/assets/img/rogue.gif",
  "dist/assets/img/orc1.png", 
  "dist/assets/img/orc2.png", 
  "dist/assets/img/ranger.png", 
  "dist/assets/img/warrior.png",
  "dist/assets/img/deer.png",
  "dist/assets/img/dragon.png",
  // "dist/assets/img/orc3.png"
];

var skills = [
  "Fireball", 
  "Lighting", 
  "Freeze",
  "Liquify",
  "Summon Undead", 
  "Windstorm",
  "Nub Slayer", 
  "Wild Growth", 
  "AOE FlameThrower",
  "",
  "Flasher",
  "Pinky Minion!",
  "Death Portal",
  "Slice n' Dice",
  "Code Flinger"
]; 

function monsterStats() {
 
  var name = _.sample(names);
  $("#name").text(name);
  
  var randomImg = _.sample(img);
  $("img").attr("src", randomImg);

  
  var attack = _.random(5,50);
  $("#attack").text(attack);
  
  var health = _.random(10, 75);
  $("#hp").text(health);
  
  var armour = _.random(0, 50);
  $("#armour").text(armour);
  
  var skill = _.sample(skills);
  $("#skills").text(skill);
  
  var speed = _.random(5,20);
  $("#speed").text(speed);
  
  $("#title").text("a random " + name + " has appeared!");
  
}