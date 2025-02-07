#  AI Chatbot developed with Flask & Google Gemini

A simple Mordern, responsive chatbot built using Flask, Javascript, HTML, and CSS, powered by Google Gemini AI. this chatbot suppoerts Markdown syntax and features a clean scrollable UI.

🚀 Features

- ✅AI-Powered: uses Google Gemini AI for intelligent responses
- ✅Mordern UI: Sleek, scrollable, and mobilefriendly interface
- ✅Markdown Support: Understands and renders markdown formatting (bold, italics, headers etc.).
- ✅Flask Backend: Handles request and responses efficiently.
- ✅Frontend with JS, HTML & CSS: interactive and dynamic chat interface.

🛠️Tech Stack
- Backend: FLASK, Google Gemini API, Google AI Studio.
- Frontend: HTML, CSS, JAVASCRIPT
- Markdown Parsing: python markdown library

🚀Installation & Setup

1️⃣Clone the Repository

```bash
git clone https://github.com/Arsey-Tracy/AI-CHATBOT.git
cd AI-CHATBOT
```

2️⃣Install dependencies
```bash
pip install flask markdown google-generativeai
```

3️⃣ Set up Google Gemini API key
replace YOUR_API_KEY in app.py with your Google Gemini API key:
```python
genai.configure(api_key="YOUR_API_KEY")
```

5️⃣Run the Flask App

```bash
python app.py
```

The chatbot will be available at http://127.0.0.1:5000

🖥️Project Structure
```
/AI-CHATBOT
|-- /static
|   |-- styles.css
|   |-- script.js
|   /templates
|
|   |-- index.html
|-- app.py # Flask backend
|-- README.md # project documentation
|-- requirements.txt  # Dependencies

```
📌Usage

Start typing a message in the input box.
The chatbot responds using Google Gemini AI
Supports Markdown Syntax, so try generating the following:
- bold text
- italics
- header
- list items

📜License

This project is open-source under the MIT License.

⭐Contributing
Feel free to fork, improve and submit a pull request!
