from flask import Flask, render_template

wedding_invitation = Flask(__name__, template_folder='.')

@wedding_invitation.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    wedding_invitation.run(debug=True)