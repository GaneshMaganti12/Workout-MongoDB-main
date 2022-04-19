const express=require("express")
// console.log(express)

const {findAllworkouts,findworkout,postAllworkouts}=require("./connect")
// var workouts= [
//     {
//       "id": 1,
//       "imageurl": "https://img.freepik.com/free-vector/family-riding-bikes-city-park_74855-5243.jpg?t=st=1647305796~exp=1647306396~hmac=4640dc17ff5a392e32a8307be80b9a5c82a2f208646d28f75c4d72bd2643f379&w=1380",
//       "discriptionforcard": "Cycling can help to protect you from serious diseases such as stroke, heart attack, some cancers, depression, diabetes, obesity and arthritis.",
//       "heading": "Cycling",
//       "Calorieburnperhour": 300,
//       "fulldiscription": "Cycling is a good way to control or reduce weight, as it raises your metabolic rate, builds muscle and burns body fat. If you’re trying to lose weight, cycling must be combined with a healthy eating plan. Cycling is a comfortable form of exercise and you can change the time and intensity – it can be built up slowly and varied to suit you.Riding to work or the shops is one of the most time-efficient ways to combine regular exercise with your everyday routine. An estimated one billion people ride bicycles every day – for transport, recreation and sport."
//     },
//     {
//       "id": 2,
//       "imageurl": "https://img.freepik.com/free-vector/landscape-with-woman-using-face-mask-jumping-with-rope_24877-63718.jpg?t=st=1647318609~exp=1647319209~hmac=ad9b4512717c6c970c381bf06cc7ba7b81f6bf126faa5637c73d7145e33df2ed&w=900",
//       "discriptionforcard": "Skipping a rope can improve the coordination between your eyes, feet, and hands. Whether you are keeping a close watch on your feet and rope movement or not, but your brain is aware of how your feet are moving.",
//       "heading": "Skipping",
//       "Calorieburnperhour": 900,
//       "fulldiscription": "Jumping rope is a form of cardiovascular exercise that everyone swears by, be it boxers, football players, or world-class athletes. A good jump rope routine for weight loss burns more calories per hour as compared to any other type of cardio. Does jump rope burn fat? Yes, skipping exercise not only burns fat but also tightens the core, builds stamina, tones the calves, and improves lung capacity."
//     },
//     {
//       "id": 3,
//       "Calorieburnperhour": 240,
//       "imageurl": "https://img.freepik.com/free-vector/push-up-demostration_1133-392.jpg?t=st=1647316839~exp=1647317439~hmac=30ebc33c27d6c1aafa4b712703b611a82861e27a87e0d57e2d8fad32468e6283&w=740",
//       "discriptionforcard": "The plank is a highly effective isometric exercise that burns approximately two to five calories per minute, based on body weight. Isometric exercise involves contraction of a particular group of muscles in a static position.",
//       "heading": "Pushups",
//       "fulldiscription": "The abdominal muscles used to hold the body rigid during the push-up are the rectus abdominis and the internal and external obliques.2 As the push-up involves multiple joints, it is a compound exercise. The upper body muscles that come into play in the push-up are the deltoids of the shoulders, the pectoral muscles of the chest, the triceps and biceps of the upper arm, the gluteal or hip muscles, and the erector spinae of the back. In daily life, you often need to push against objects, from doors to shopping carts. The functional fitness you develop with push-ups provides the strength needed to perform these movements. Working the stabilizer muscles around the shoulders can help protect you from rotator cuff injuries. A 2019 study also found that people who can do 40 push-ups have fewer cardiovascular disease events than those who cannot complete 10 push-ups."
//     },
//     {
//       "id": 4,
//       "Calorieburnperhour": 446,
//       "imageurl": "https://img.freepik.com/free-vector/workout-isometric-people-with-isolated-figures-male-athlete_1284-56438.jpg?t=st=1647401609~exp=1647402209~hmac=af9c85d285a03058932bb1419d9e2dd9755ae966d01ed51c0c485149455f38cb&w=1380",
//       "discriptionforcard": "The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously.",
//       "heading": "squats",
//       "fulldiscription": "The squat is a dynamic strength training exercise that requires several muscles in your upper and lower body to work together simultaneously. Many of these muscles help power you through daily tasks such as walking, climbing stairs, bending, or carrying heavy loads. They also help you perform athletic-related activities. Adding squats to your workouts can help boost your exercise performance, decrease your risk of injury, and keep you moving more easily throughout the day. But these are just a few of the benefits."
//     },
//     {
//       "id": 5,
//       "Calorieburnperhour": 40,
//       "imageurl": "https://img.freepik.com/free-vector/man-doing-pull-ups-workout-outdoor-fitness-equipment-male-cartoon-character-pulling-himself-horizontal-bar-sports-training-flat-vector-illustration_241107-1190.jpg?w=740",
//       "discriptionforcard": "A pullup is a challenging upper body exercise where you grip an overhead bar and lift your body until your chin is above that bar.",
//       "heading": "Pullup",
//       "fulldiscription": "A pullup is a challenging upper body exercise where you grip an overhead bar and lift your body until your chin is above that bar. It’s a hard exercise to execute — so hard, in fact, that a U.S. Marine can receive a passing score on the annual physical fitness test without doing pullups at all. If your first attempts to complete a pullup are a struggle, it isn’t necessarily because you don’t have sufficient upper body strength. It’s just physics. Pullups require you to lift your entire body mass straight up using only the muscles in your upper body. You’re counteracting gravity throughout the whole process."
//     },
//     {
//       "id": 6,
//       "imageurl": "https://img.freepik.com/free-vector/plank-glute-kick-back-exercise-woman-workout-fitness-aerobic-exercises_476141-1560.jpg?w=740",
//       "discriptionforcard": "The plank, or planking, is an exercise that involves your core muscles, improving your strength, balance and endurance. ",
//       "fulldiscription": "The plank, or planking, is an exercise that involves your core muscles, improving your strength, balance and endurance. The exercise is so-named because, when done properly, you straighten your entire body and maintain it rigidly, just like a plank of wood. Like other calisthenic exercises, it requires no extra equipment or weights, making it a convenient form of strength training if you're on a small budget or are traveling. To perform a basic plank, lie on a level surface, belly down. Position your feet so that your toes touch the floor. Bring your hands forward, near the sides of your head, so that your forearms lie on the floor, parallel to one another and to your torso. Slowly and gently, lift your torso and your legs off of the floor, putting all of your weight on your toes and your forearms and elbows. Keep your body straight, imagining it as a single rigid plank, from the top of your head to your heels. Hold the position for at least five seconds, breathing steadily throughout. When you complete the position, gently bring your torso back to the ground. Work up to holding the position for 60 seconds.",
//       "Calorieburnperhour": 240,
//       "heading": "plank"
//     },
//     {
//       "id": 7,
//       "heading": "Lunges",
//       "imageurl": "https://img.freepik.com/free-vector/lunge-exercise-woman-workout-fitness-aerobic-exercises_476141-1128.jpg?w=740",
//       "discriptionforcard": "The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout.",
//       "fulldiscription": "The lunge is a popular leg-strengthening exercise with a multitude of variations to add variety to your workout. In addition, varying your technique allows you to emphasize different muscles or parts of those muscles. This exercise is beneficial for injury prevention, as well as rehabilitation after injuries occur. It’s often part of a foundational strength program or rehab protocol, allowing athletes and exercisers to return to their sport or activity of interest as quickly as possible. The lunge is also a functional exercise that prepares you for movements needed in daily life.",
//       "Calorieburnperhour": 360
//     },
//     {
//       "id": 8,
//       "heading": "Deadlift",
//       "imageurl": "https://img.freepik.com/free-vector/strong-man-athlete-doing-deadlift-excercise-gym-gym-workout-concept-flat-style-character-design_285336-623.jpg?w=996",
//       "discriptionforcard": "The deadlift and its variants will also prove hugely beneficial to anyone who play sports.",
//       "fulldiscription": "The deadlift and its variants will also prove hugely beneficial to anyone who play sports. The activation it places on the hamstrings, glutes and quadriceps (if you adopt a sumo or trap bar stance) are invaluable for activities that require explosive leg strength – rugby, football, and track and field to name just three. These muscles are also vital in endurance sports such as swimming, cycling and running. The deadlift helps to keep them strong and in tip-top condition, preventing injury while also significantly boosting strength.",
//       "Calorieburnperhour": 500
//     },
//     {
//       "id": 9,
//       "heading": "Dumbbells",
//       "imageurl": "https://img.freepik.com/free-vector/strong-sport-man-character-doing-lifting-exercises-flat-cartoon-illustration_133260-2153.jpg?w=740",
//       "discriptionforcard": "The dumbbell is a type of exercise equipment used in weight training. Specifically, dumbbells are weights used without exercise machines.",
//       "fulldiscription": "The dumbbell is a type of exercise equipment used in weight training. Specifically, dumbbells are weights used without exercise machines. Dumbbells are sometimes also called hand weights and free weights—those used “free” of such equipment. Most dumbbells are designed with a narrow bar in the middle and two wider discs at each end. Some dumbbells are very light in weight (only a few pounds) while others are very heavy (50 pounds or more). They can be fixed in weight or variable. Specifically, dumbbells can vary in weight due to discs that can be added or removed from the bar by quantity and size (weight). In addition, dumbbells can be used individually (a dumbbell in one hand) or in pairs (one in each hand).",
//       "Calorieburnperhour": 570
//     }
//   ]


const app=express()
const cors=require("cors")

app.use(cors())

app.use(express.json())

app.get("/workouts",async(req,res)=>{
    console.log("i am in")

    let workouts=await findAllworkouts()

    console.log("workouts-hello",workouts)
    res.json(workouts)

})


app.post("/workouts",async(req,res)=>{
  console.log("i am in")

  let workouts=await postAllworkouts(req.body)

  console.log("workouts-hello",workouts)
  res.json(workouts)

})

app.get("/workouts/:id",async(req,res)=>{
  console.log("i am in")

  let workout=await findworkout(req.params.id)

  res.json(workout)

 
  // res.json(workout)

  // console.log(workout)
})



app.listen(4000,()=>(console.log("listening at 4000")))