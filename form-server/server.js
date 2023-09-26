const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "form_db",
});

db.connect(function (error) {
  if (error) {
    console.log("Error Connection to DB");
  } else {
    console.log("Successfully Connected to DB");
  }
});

// API Endpoint to Save Form Data
app.post('/formData', async (req, res) => {
  const formData = req.body;

  try {
    
    const formInsertResult = await db.query("INSERT INTO form_data (title, subTitle) VALUES (?, ?)", [formData.title, formData.subTitle]);
    const formId = formInsertResult.insertId;

    for (const question of formData.questions) {
      const questionInsertResult = await db.query("INSERT INTO questions (form_id, description, question_type) VALUES (?, ?, ?)", [formId, question.description, question.questionType]);
      const questionId = questionInsertResult.insertId;

      for (const option of question.options) {
        await db.query("INSERT INTO options (question_id, description) VALUES (?, ?)", [questionId, option.description]);
      }

      for (const answerData of option.answerData) {
        await db.query("INSERT INTO answers (description, selectedOption, question_id, formId) VALUES (?,?,?,?)", [ answerData.description, answerData.selectedOption, questionId, formId]);
      }

    } 

    console.log("Veri başarıyla kaydedildi");
    res.json({ message: "Veri başarıyla kaydedildi" });
  } catch (error) {
    console.error("Veri kaydetme hatası:", error);
    res.status(500).json({ error: "Veri kaydetme sırasında bir hata oluştu" });
  }
}); 

// API Endpoint to Save Answer Data
app.post('/answerData', async (req, res) => {
  const answerData = req.body;

  try {
    const connection = await db.getConnection();
    
    const answerInsertResult = await connection.query("INSERT INTO answers (description, selectedOption, question_id, formId) VALUES (?,?,?,?)", [ answerData.description, answerData.selectedOption, questionId, formId]);

    connection.release();
    console.log("Cevap başarıyla kaydedildi");
    res.json({ message: "Cevap başarıyla kaydedildi" });
  } catch (error) {
    console.error("Cevap kaydetme hatası:", error);
    res.status(500).json({ error: "Cevap kaydetme sırasında bir hata oluştu" });
  }
});


const port = 8090; // Update the port number as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
