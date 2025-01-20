// routes/index.js
const express = require('express');
const { createGenericRouter } = require('../controllers/GenricController');
const router = express.Router();

// Import all models
const Adaptability = require('../Models/SOFTSKILLS/Adaptability');
const CommunicationSkills = require('../Models/SOFTSKILLS/CommunicationSkills');
const CriticalThinking = require('../Models/SOFTSKILLS/CriticalThinking');
const Leadership = require('../Models/SOFTSKILLS/Leadership');
const LogicalQuestions = require('../Models/APTITUDE/LogicalQuestions');
const Numerical = require('../Models/APTITUDE/Numerical');
const ProblemSolving = require('../Models/SOFTSKILLS/ProblemSolving');
const TimeManagement = require('../Models/SOFTSKILLS/TimeManagement');
const Teamwork = require('../Models/SOFTSKILLS/TeamWork');
const VerbalQuestions = require('../Models/APTITUDE/VerbalQuestions');
const Creativity = require('../Models/SOFTSKILLS/Creativity');
const conflict=require('../Models/SOFTSKILLS/conflict');
const JavaScript=require('../Models/TECHNICAL/javascrpitquestions');
const JavaQuestions=require('../Models/TECHNICAL/javaquestions');
const Python=require('../Models/TECHNICAL/Python');
const C=require('../Models/TECHNICAL/C');
const Software=require('../Models/INDUSTRYEXPERTISE/Software');
const Agile=require('../Models/INDUSTRYEXPERTISE/Agile');
const ProjectManagement=require('../Models/INDUSTRYEXPERTISE/ProjectManagement');
const SoftwareQuality=require('../Models/INDUSTRYEXPERTISE/SoftwareQuality');
const Values = require('../Models/SOFTSKILLS/Values');
//const LogicalMedium=require('../Models/APTITUDE/Logical-Reasoning/LogicalMedium');
//const LogicalHard=require('../Models/APTITUDE/Logical-Reasoning/LogicalHard');
//const QAEasy=require('../Models/APTITUDE/QuantitativeAptitude/Easy');
//const QAMedium=require('../Models/APTITUDE/QuantitativeAptitude/QAMedium');
// const QAHard=require('../Models/APTITUDE/QuantitativeAptitude/QAHard');
// const VerbalEasy=require('../Models/APTITUDE/Verbal/VerbalEasy');
// const VerbalMedium=require('../Models/APTITUDE/Verbal/VerbalMedium');
// const VerbalHard=require('../Models/APTITUDE/Verbal/VerbalHard');
//const CareerSkills=require('../Models/SOFTSKILLS/Professional/CareerSkills')
//const TeamSkills=require('../Models/SOFTSKILLS/Professional/TeamSkills')
const Banking=require('../Models/INDUSTRYEXPERTISE/Banking')
const CloudComputing=require('../Models/INDUSTRYEXPERTISE/cloudcomputing')
const DEVEOPS=require('../Models/INDUSTRYEXPERTISE/DEVEOPS')
const Digital=require('../Models/INDUSTRYEXPERTISE/Digital')
const Finance=require('../Models/INDUSTRYEXPERTISE/Finance')
const hr=require('../Models/INDUSTRYEXPERTISE/hr')
const Insurance=require('../Models/INDUSTRYEXPERTISE/Insurance')
const Law=require('../Models/INDUSTRYEXPERTISE/Law')
const sales=require('../Models/INDUSTRYEXPERTISE/sales')
const LAMP=require('../Models/TECHNICAL/FullStack/LAMP')
const MEAN=require('../Models/TECHNICAL/FullStack/MEAN')
const MERN=require('../Models/TECHNICAL/FullStack/MERN')
const RUBYONRAILS=require('../Models/TECHNICAL/FullStack/RUBYONRAILS')
const c_hash=require('../Models/TECHNICAL/c_hash')
const golang=require('../Models/TECHNICAL/C')
const web=require('../Models/TECHNICAL/web')
const PythonDjango=require('../Models/TECHNICAL/PythonDjango')







// Create routes for each model
router.use(createGenericRouter(Adaptability, 'Adaptability-Flexibility'));
router.use(createGenericRouter(CommunicationSkills, 'Communication'));
router.use(createGenericRouter(CriticalThinking, 'Critical-Thinking'));
router.use(createGenericRouter(Leadership, 'Leadership'));
router.use(createGenericRouter(LogicalQuestions, 'Logical-Reasoning'));
router.use(createGenericRouter(Numerical, 'Quantitative-Aptitude'));
router.use(createGenericRouter(ProblemSolving, 'Problem-Solving')); 
router.use(createGenericRouter(TimeManagement, 'Time-Management'));
router.use(createGenericRouter(Teamwork, 'Teamwork'));
router.use(createGenericRouter(VerbalQuestions, 'Verbal-Ability'));
router.use(createGenericRouter(Creativity, 'Creativity'));
router.use(createGenericRouter(conflict, 'Conflict-Management'));
router.use(createGenericRouter(JavaScript, 'Javascrpit'));
router.use(createGenericRouter(JavaQuestions, 'Java'));
router.use(createGenericRouter(Python, 'Python'));
router.use(createGenericRouter(C, 'C-Programming'));
router.use(createGenericRouter(Software, 'Software-Engineering'));
router.use(createGenericRouter(Agile,'Agile-Methodology'));
router.use(createGenericRouter(ProjectManagement,'Project-Management'));
router.use(createGenericRouter(SoftwareQuality,'Quality-Engineering'));
router.use(createGenericRouter(Values,'Values'));

// router.use(createGenericRouter(Easy,'LogicalReasoning/Easy'))
// router.use(createGenericRouter(LogicalMedium,'LogicalQuestions/Medium'))
// router.use(createGenericRouter(LogicalHard,'LogicalQuestions/HardLogicals'))
// router.use(createGenericRouter(QAEasy,'QuantitativeAptitude/Easy'))
// router.use(createGenericRouter(QAMedium,'QuantitativeAptitude/Medium'))
// router.use(createGenericRouter(QAHard,'QuantitativeAptitude/Hard'))
//router.use(createGenericRouter(VerbalEasy,'Easy'))
//router.use(createGenericRouter(VerbalMedium,'Medium'))
//router.use(createGenericRouter(VerbalHard,'Hard'))
//router.use(createGenericRouter(CareerSkills,'CareerSkills'))
//router.use(createGenericRouter(TeamSkills,'TeamSkills'))
router.use(createGenericRouter(Banking,'Banking'))
router.use(createGenericRouter(CloudComputing,'CloudComputing'))
router.use(createGenericRouter(DEVEOPS,'Devops'))
router.use(createGenericRouter(Digital,'DigitalMarketing'))
router.use(createGenericRouter(Finance,'Finance'))
router.use(createGenericRouter(hr,'HR'))
router.use(createGenericRouter(Insurance,'Insurance'))
router.use(createGenericRouter(Law,'Law'))
router.use(createGenericRouter(sales,'Sales'))
router.use(createGenericRouter(LAMP,'LAMP'))
router.use(createGenericRouter(MEAN,'MEAN'))
router.use(createGenericRouter(MERN,'MERN'))
router.use(createGenericRouter(RUBYONRAILS,'RubyOnRails'))
router.use(createGenericRouter(c_hash,'C#'))
router.use(createGenericRouter(golang,'Golang'))
router.use(createGenericRouter(web,'Web-Technology'))
router.use(createGenericRouter(PythonDjango,'Python-Django'))













/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
      Creativity,
      conflict,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});*/








/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});*/





module.exports = router;
/*const express = require('express');
const { createGenericRouter } = require('../controllers/GenricController');

// Import all models
const Adaptability = require('../Models/SOFTSKILLS/Adaptability');
const CommunicationSkills = require('../Models/SOFTSKILLS/CommunicationSkills');
const CriticalThinking = require('../Models/SOFTSKILLS/CriticalThinking');
const EmotionalIntelligence = require('../Models/SOFTSKILLS/EmotionalIntelligence');
const Leadership = require('../Models/SOFTSKILLS/Leadership');
const ProblemSolving = require('../Models/SOFTSKILLS/ProblemSolving');
const TimeManagement = require('../Models/SOFTSKILLS/TimeManagement');
const Teamwork = require('../Models/SOFTSKILLS/TeamWork');
const WorkEthics = require('../Models/SOFTSKILLS/WorkEthics');
const LogicalQuestions = require('../Models/APTITUDE/LogicalQuestions');
const Numerical = require('../Models/APTITUDE/Numerical');
const VerbalQuestions = require('../Models/APTITUDE/VerbalQuestions');



const router = express.Router();*/

// Add routes for soft skills collections
/*router.get('/softskills/random', async (req, res) => {
  try {
    const softSkillsCollections = [
      Adaptability,
      CommunicationSkills,
      CriticalThinking,
      EmotionalIntelligence,
      Leadership,
      ProblemSolving,
      TimeManagement,
      Teamwork,
      WorkEthics,
    ];

    const randomQuestions = [];

    for (const Model of softSkillsCollections) {
      const randomDocs = await Model.aggregate([{ $sample: { size: 5 } }]); // Sample size per model
      randomQuestions.push(...randomDocs);
    }

    const shuffledQuestions = randomQuestions.sort(() => Math.random() - 0.5);

    res.json({
      totalQuestions: shuffledQuestions.length,
      questions: shuffledQuestions,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching random soft skills questions',
      error: error.message,
    });
  }
});

// Generic routes for all models
router.use(createGenericRouter(Adaptability, 'adaptability'));
router.use(createGenericRouter(CommunicationSkills, 'communication-skills'));
router.use(createGenericRouter(CriticalThinking, 'critical-thinking'));
router.use(createGenericRouter(EmotionalIntelligence, 'emotional-intelligence'));
router.use(createGenericRouter(Leadership, 'leadership'));
router.use(createGenericRouter(ProblemSolving, 'problem-solving'));
router.use(createGenericRouter(TimeManagement, 'time-management'));
router.use(createGenericRouter(Teamwork, 'teamwork'));
router.use(createGenericRouter(WorkEthics, 'work-ethics'));
router.use(createGenericRouter(LogicalQuestions, 'logical-questions'));
router.use(createGenericRouter(Numerical, 'numerical-questions'));
router.use(createGenericRouter(VerbalQuestions, 'verbal-questions'));

module.exports = router;*/
