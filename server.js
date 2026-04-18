const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/generate-course', (req, res) => {
  const { courseGoal, email } = req.body;
  
  // Fake course data for now
  const coursePlan = {
    title: `${courseGoal} Course`,
    weeks: 8,
    summary: `Your ${courseGoal} course is ready!`
  };
  
  res.json({ 
    success: true, 
    courseId: '12345',
    summary: coursePlan 
  });
});

app.listen(3000, () => console.log('Server running'));
