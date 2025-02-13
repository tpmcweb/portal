// 加密的登入資料（加密）
const encryptedCredentials={student:"dHBtY3BvcnRhbA==",teacher:"MTkyOTM4MjEx",admin:"MTkyOTM4MjEx"}; 
// 加密的目標頁面（加密）
const encryptedPages={student:"c3R1ZGVudC5odG1s",teacher:"dGVhY2hlci5odG1s",admin:"YWRtaW4uaHRtbA=="}; 
// 登入函數
function login(){const username=document.getElementById("username").value;const password=document.getElementById("password").value; // 檢查用戶名是否存在
if(encryptedCredentials[username]){ // 驗證
const decryptedPassword=atob(encryptedCredentials[username]);if(decryptedPassword===password){ // 登入成功
localStorage.setItem("loggedInUser",username);const targetPage=atob(encryptedPages[username]);window.location.href=targetPage;}else{showError("錯誤的密碼！");}}else{showError("錯誤的登入名稱！");}}
// 顯示錯誤訊息
function showError(message){const errorMessage=document.getElementById("error-message");errorMessage.textContent=message;errorMessage.style.display="block";}
// 檢查登入狀態
function checkLoginStatus(requiredRole){const loggedInUser=localStorage.getItem("loggedInUser");if(loggedInUser!==requiredRole){alert("未經授權的訪問！請先登入。");window.location.href="index.html";}}