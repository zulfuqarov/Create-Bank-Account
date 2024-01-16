class BankData {
  constructor(useName, password, Balance = 0) {
    this.useName = useName;
    this.password = password;
    this.Balance = Balance;
  }

  GetData() {
    return `
    <h3>Your Name: ${this.useName}</h1>
    <p>Password: ******</p>
    <p>Balance: ${this.Balance}</p>
    <hr>
    `;
  }

  AddBalance(Balance) {
    this.Balance += Balance;
    return;
  }
}

const CreateAccount = document.getElementById("CreateAccount");
const UserName = document.getElementById("username");
const password = document.getElementById("password");
const Balance = document.getElementById("initialBalance");
const resultDiv = document.getElementById("result");
CreateAccount.addEventListener("click", () => {
  const newBankData = new BankData(
    UserName.value,
    password.value,
    Balance.value
  );

  const a = newBankData.GetData();
  resultDiv.style.display = "block";
  resultDiv.innerHTML += a; 
});
