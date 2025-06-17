import * as vscode from 'vscode';

export function activate() {
  // 显示欢迎消息
  vscode.window.showInformationMessage('🎉 🎉 🎉 欢迎使用 Striver Snippets！🎉 🎉 🎉 ', '知道了');
}

export function deactivate() {
  console.log('Striver Snippets 插件已停用');
}
