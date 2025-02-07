from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
import markdown

# Configure Google Gemini API
genai.configure(api_key="AIzaSyDg8D9hSrptLlBN2Fooi-oTdWGsE6Fqhrk")
model = genai.GenerativeModel("gemini-2.0-flash")

# Initialize Flask app
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    if not user_input:
        return jsonify({"error": "No input provided!"}), 400

    # Generate response using Google Gemini
    response = model.generate_content(user_input)
    
    # Convert markdown response to HTML
    html_response = markdown.markdown(response.text)
    
    return jsonify({"response": html_response})

if __name__ == "__main__":
    app.run(debug=True)