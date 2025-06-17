import * as vscode from 'vscode';

export function activate() {
  // 显示欢迎消息
//   vscode.window.showInformationMessage('🎉 🎉 🎉 欢迎使用 Striver Snippets！🎉 🎉 🎉 ', '知道了');

  // 在状态栏显示欢迎消息，3秒后自动消失
  const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  statusBarItem.text = '🎉 🎉 🎉 欢迎使用 Striver Snippets！';
  statusBarItem.show();

  // 3秒后自动隐藏状态栏消息
  setTimeout(() => {
    statusBarItem.hide();
    statusBarItem.dispose();
  }, 3000);
}

export function deactivate() {
  console.log('Striver Snippets 插件已停用');
}
