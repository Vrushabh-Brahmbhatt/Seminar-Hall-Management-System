const mongoose = require("mongoose");
const SeminarHall = require("../models/seminarHallModel");

const seminarHalls = [
  {
    name: "Seminar Hall A",
    capacity: 100,
    details: "Located on the first floor, suitable for workshops.",
    images: [
      "https://c8.alamy.com/comp/HREHTX/microphone-with-blurred-photo-of-empty-conference-hall-or-seminar-HREHTX.jpg",
      "https://media.istockphoto.com/id/120759015/photo/interior-of-a-conference-hall.jpg?s=612x612&w=0&k=20&c=XI9EgF16qBl8oBdgVvcYUBr0nPD9OkFLCLrIAlQ-92A=",
      "https://thumbs.dreamstime.com/b/empty-conference-hall-18851712.jpg",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "Sound System", type: "AV", condition: "Excellent", available: true, quantity: 2 },
      { name: "Whiteboard", type: "Stationary", condition: "Good", available: true, quantity: 3 },
      { name: "AC", type: "HVAC", condition: "Good", available: true, quantity: 2 },
      { name: "Microphone", type: "AV", condition: "Good", available: true, quantity: 5 },
      { name: "WiFi", type: "Network", condition: "Excellent", available: true, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall B",
    capacity: 150,
    details: "Located on the ground floor, ideal for conferences.",
    images: [
      "https://5.imimg.com/data5/SV/DX/GLADMIN-33559172/conference-hall-500x500.jpg",
      "https://thumbs.dreamstime.com/b/conference-amphitheater-18851724.jpg",
      "https://thumbs.dreamstime.com/b/big-empty-modern-meeting-conference-hall-seminar-room-125088765.jpg",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "Sound System", type: "AV", condition: "Good", available: true, quantity: 3 },
      { name: "Whiteboard", type: "Stationary", condition: "Excellent", available: true, quantity: 2 },
      { name: "WiFi", type: "Network", condition: "Good", available: true, quantity: 1 },
      { name: "AC", type: "HVAC", condition: "Good", available: false, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall C",
    capacity: 120,
    details: "Located on the second floor, perfect for lectures.",
    images: [
      "https://plus.unsplash.com/premium_photo-1679547202918-bf37285d3caf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8fDA%3D",
      "https://rivierabulgaria.com/files/images/conference-halls/hall-riviera/01.jpg",
      "https://rivierabulgaria.com/files/images/conference-halls/hall-riviera/02.jpg",
    ],
    equipment: [
      { name: "Microphone", type: "AV", condition: "Good", available: true, quantity: 6 },
      { name: "AC", type: "HVAC", condition: "Good", available: true, quantity: 4 },
      { name: "Projector", type: "AV", condition: "Excellent", available: true, quantity: 2 },
      { name: "Sound System", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "WiFi", type: "Network", condition: "Excellent", available: true, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall D",
    capacity: 200,
    details: "Located near the auditorium, great for large meetings.",
    images: [
      "https://media.istockphoto.com/id/183317532/photo/empty-cinema-with-seats-and-projection-screen.jpg?s=612x612&w=is&k=20&c=rc-lzpF8X6lq8mzdGgxAeQPfJ8OhaD4JcLd9EBg63jg=",
      "https://media.istockphoto.com/id/183312860/photo/empty-cinema-with-seats.jpg?s=612x612&w=is&k=20&c=fN_7qbz_Jlp60zAvxq0ESbuHGC-2rBjqVA5goLVB3D4=",
    ],
    equipment: [
      { name: "Speaker System", type: "AV", condition: "Excellent", available: true, quantity: 3 },
      { name: "Projector", type: "AV", condition: "Good", available: false, quantity: 1 },
      { name: "AC", type: "HVAC", condition: "Good", available: true, quantity: 2 },
      { name: "WiFi", type: "Network", condition: "Good", available: false, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall E",
    capacity: 80,
    details: "Compact and cozy for small group discussions.",
    images: [
      "https://img.freepik.com/premium-photo/beige-leather-chairs-seminar-room-seats-empty-conference-room_81262-3962.jpg",
      "https://img.freepik.com/premium-photo/serious-handsome-speaker-preparing-conference-using-laptop-empty-boardroom_171337-76850.jpg",
    ],
    equipment: [
      { name: "Whiteboard", type: "Stationary", condition: "Good", available: false, quantity: 1 },
      { name: "Sound System", type: "AV", condition: "Excellent", available: true, quantity: 2 },
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "AC", type: "HVAC", condition: "Good", available: true, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall F",
    capacity: 300,
    details: "Spacious hall with advanced AV facilities.",
    images: [
      "https://img.freepik.com/premium-photo/conference-seminar-meeting-room-with-space-text_38682-15.jpg",
      "https://media.istockphoto.com/id/1407940562/photo/paper-pencil-water-bottle-glass-on-the-table-in-the-seminar-room-background.jpg?s=612x612&w=0&k=20&c=jeeOV6NxMZSE_UkwkyWFiYQde2i-U8RtnnuMn0M7u2Q=",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Excellent", available: true, quantity: 2 },
      { name: "WiFi", type: "Network", condition: "Good", available: true, quantity: 1 },
      { name: "Sound System", type: "AV", condition: "Good", available: true, quantity: 5 },
      { name: "AC", type: "HVAC", condition: "Good", available: true, quantity: 2 },
    ],
  },
  {
    name: "Seminar Hall G",
    capacity: 90,
    details: "Suitable for seminars and presentations.",
    images: [
      "https://static.vecteezy.com/system/resources/previews/011/928/364/non_2x/interior-of-big-modern-conference-room-free-photo.JPG",
      "https://static.vecteezy.com/system/resources/thumbnails/011/930/014/small_2x/interior-of-big-modern-conference-room-free-photo.JPG",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "Microphone", type: "AV", condition: "Excellent", available: true, quantity: 3 },
      { name: "Sound System", type: "AV", condition: "Good", available: false, quantity: 2 },
    ],
  },
  {
    name: "Seminar Hall H",
    capacity: 250,
    details: "Large hall with great acoustic facilities.",
    images: [
      "https://www.sofitel-kualalumpur-damansara.com/wp-content/uploads/sites/133/2022/02/IMGL0356-1170x780.jpg",
      "https://www.sofitel-kualalumpur-damansara.com/wp-content/uploads/sites/133/2022/02/IMGL3477-1170x780.jpg",
    ],
    equipment: [
      { name: "Speaker System", type: "AV", condition: "Good", available: true, quantity: 2 },
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "AC", type: "HVAC", condition: "Good", available: false, quantity: 1 },
    ],
  },
  {
    name: "Seminar Hall I",
    capacity: 170,
    details: "Bright and airy hall, great for interactive sessions.",
    images: [
      "https://www.sofitel-kualalumpur-damansara.com/wp-content/uploads/sites/133/2022/02/IMGL0413-1170x780.jpg",
      "https://www.sofitel-kualalumpur-damansara.com/wp-content/uploads/sites/133/2022/02/IMGL3515-1170x780.jpg",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 1 },
      { name: "Whiteboard", type: "Stationary", condition: "Good", available: true, quantity: 3 },
      { name: "Microphone", type: "AV", condition: "Excellent", available: true, quantity: 4 },
    ],
  },
  {
    name: "Seminar Hall J",
    capacity: 130,
    details: "Well-equipped with modern AV facilities.",
    images: [
      "https://d326yn2yk9qb38.cloudfront.net/6775/e5872798-748d-42f5-9d5c-347b08a89843_630x330.jpg",
      "https://d326yn2yk9qb38.cloudfront.net/6769/54a7eb42-6fdf-4b41-ae4f-3c8278fd555b_630x330.jpg",
    ],
    equipment: [
      { name: "Projector", type: "AV", condition: "Good", available: true, quantity: 2 },
      { name: "WiFi", type: "Network", condition: "Excellent", available: true, quantity: 1 },
      { name: "Sound System", type: "AV", condition: "Good", available: false, quantity: 3 },
    ],
  },
];

const seedDatabase = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    console.log("Clearing existing data...");
    await SeminarHall.deleteMany();
    console.log("Existing data cleared");

    console.log("Seeding seminar halls...");
    for (const [index, hall] of seminarHalls.entries()) {
      const displayId = index + 1;

      const newSeminarHall = new SeminarHall({
        name: hall.name,
        displayId,
        capacity: hall.capacity,
        details: hall.details,
        images: hall.images || [],
        equipment: hall.equipment,
      });

      console.log("Saving seminar hall:", hall.name);
      await newSeminarHall.save();
      console.log(`Seminar hall "${hall.name}" seeded successfully.`);
    }

    console.log("Seeding completed successfully!");
  } catch (err) {
    console.error("Error during seeding:", err);
  } 
};

module.exports = seedDatabase;
