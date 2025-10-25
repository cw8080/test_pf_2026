// 要素の取得
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const messageElement = document.getElementById('message');

// ★ 認証情報（固定値）★
const VALID_USERNAME = 'aaa';
const VALID_PASSWORD = '111';

// フォーム送信時のイベントリスナー
loginForm.addEventListener('submit', function(event) {
    // フォームのデフォルト動作（ページ遷移）を停止
    event.preventDefault();

    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // 認証チェック
    if (enteredUsername === VALID_USERNAME && enteredPassword === VALID_PASSWORD) {
        // 成功
        messageElement.textContent = '✅ ログイン成功！';
        messageElement.className = 'success';



        setTimeout(() => { window.location.href = 'https://sites.google.com/view/index-xyz'; }, 2000);

        
        // 通常はここで次のページへ遷移 (例: window.location.href = 'home.html';)
    } else {
        // 失敗
        messageElement.textContent = '❌ ユーザー名またはパスワードが間違っています。';
        messageElement.className = 'error';
    }
});
