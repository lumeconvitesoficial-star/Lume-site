from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = "lume-dev-secret-key"  # troque por algo seguro em produção


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contato", methods=["POST"])
def contato():
    nome = request.form.get("nome", "").strip()
    email = request.form.get("email", "").strip()
    mensagem = request.form.get("mensagem", "").strip()

    if not nome or not email or not mensagem:
        flash("Preencha todos os campos antes de enviar.", "erro")
        return redirect(url_for("home") + "#contato")

    # Aqui futuramente: enviar e-mail, salvar em banco de dados, etc.
    print(f"[Novo contato] {nome} <{email}>: {mensagem}")

    flash("Mensagem enviada! Retornaremos em breve.", "sucesso")
    return redirect(url_for("home") + "#contato")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
