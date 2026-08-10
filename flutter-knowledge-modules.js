/* Shared navigation metadata, challenge bank and achievement definitions. */
(function (global) {
  const colors = ['#62e6ff', '#8bf5bb', '#ffc978', '#b09cff', '#ff91ca'];
  const definitions = [
    ['roadmap', '起点', '学习路线', '从前言和学习路线开始建立全局地图', 'chapter-1', '掌握“为什么 -> 怎么写 -> 项目验证”的学习闭环。'],
    ['compare', '起点', 'Flutter x React Native', '建立 Flutter 与 React Native 的迁移地图', 'chapter-2', '把 Widget、Props、build 和 setState 放回熟悉的 React 语境。'],
    ['dart', '第 1 周', 'Dart 基础', '类型、空安全、集合、函数与异步', 'chapter-3', '读懂 Flutter 代码前，先掌握 Dart 的类型和异步模型。'],
    ['classes', '第 2 周', '类与构造函数', 'Dart 面向对象、命名构造函数、Mixin 与 factory', 'chapter-4', 'Flutter 组件本质是 Dart 类，构造函数参数是组件配置入口。'],
    ['widget', '第 3 周', 'Widget 模型', 'Widget、Element、RenderObject 与状态保留', 'chapter-5', '理解三棵树，才能知道为什么 Widget 可频繁创建而 State 仍保留。'],
    ['state', '第 4 周', 'StatefulWidget', '状态、setState、生命周期和 Key', 'chapter-5', 'Widget 保存配置，State 保存运行时数据和资源。'],
    ['context', '第 4 周', 'BuildContext', '用上下文获取 Theme、MediaQuery、Navigator 与依赖', 'chapter-6', 'context 代表 Widget 在树中的位置，不是可长期保存的对象。'],
    ['layout', '第 5 周', '布局约束', 'Constraints -> Size -> Position 的核心模型', 'chapter-7', '父组件给约束，子组件定尺寸，父组件定位置。'],
    ['flex', '第 5 周', 'Row / Column / Flex', '主轴、交叉轴、Expanded 与 Flexible', 'chapter-7', '线性布局表达表单、列表头部和工具栏等常见结构。'],
    ['stack', '第 6 周', 'Stack / Wrap / Container', '叠放、换行与装饰组件', 'chapter-7', '不同布局意图使用不同 Widget，Container 不是万能容器。'],
    ['scroll', '第 7 周', '滚动与 Sliver', '长列表、懒加载和复杂滚动页面', 'chapter-7', '单一滚动容器和懒构建是长列表稳定性的基础。'],
    ['composition', '第 7 周', '布局嵌套与拆分', '用语义 Widget 组织复杂页面', 'chapter-8', '保留有语义的层级，删除无意义的容器嵌套。'],
    ['responsive', '第 8 周', '设计稿与适配', '逻辑像素、字体、主题、多屏与断点', 'chapter-9', '适配依靠约束、Token 和断点，不是全量比例缩放。'],
    ['components', '第 9 周', '常用组件', '文本、图片、表单、弹窗和底部面板', 'chapter-10', '稳定的基础组件是业务开发速度的来源。'],
    ['state-management', '第 10 周', '状态管理', '状态边界、数据流和状态库选型', 'chapter-11', '先明确所有权和副作用边界，再选择状态管理方案。'],
    ['navigation', '第 10 周', '导航与路由', 'Navigator、go_router、参数、返回值与拦截', 'chapter-12', '路由是页面状态的一部分，流转要清晰可验证。'],
    ['network', '第 11 周', '网络与 JSON', 'Repository、ApiClient、Token 与错误状态', 'chapter-13', '网络逻辑放在数据层，页面专注状态展示和交互。'],
    ['storage', '第 11 周', '本地存储', '偏好、敏感 Token、数据库与文件缓存', 'chapter-14', '按安全性、查询方式和生命周期选择存储方案。'],
    ['packages', '第 12 周', '第三方库', '依赖选型、平台配置与升级风险', 'chapter-15', '工程能力也包括判断依赖是否值得引入。'],
    ['debug', '第 12 周', '调试与排错', 'Inspector、DevTools、日志和最小复现', 'chapter-16', '稳定的排查流程比记住某个修复代码更重要。'],
    ['performance', '第 13 周', '性能优化', '重建、懒列表、图片、内存和 Profile 模式', 'chapter-17', '先测量再修改，避免凭感觉堆叠优化。'],
    ['theme', '第 13 周', '主题与国际化', 'ThemeData、TextTheme、深色模式和无障碍', 'chapter-18', '设计 Token 与 Theme 让换肤和可访问性更可控。'],
    ['testing', '第 14 周', '测试', 'Unit、Widget、Integration 与 Golden Test', 'chapter-19', '测试为重构、升级和布局修复提供验证安全网。'],
    ['native', '第 14 周', '原生集成', '权限、平台能力与 MethodChannel', 'chapter-20', '清楚 Flutter 与 Kotlin/Swift 的通信边界。'],
    ['release', '第 15 周', '发布与项目复盘', '签名、构建、监控与面试复盘', 'chapter-20', '发布、监控和复盘构成完整工程闭环。'],
    ['pronunciation', '复习', '组件发音', 'Flutter 常见组件的发音与中文协音', 'chapter-21', '中文协音只用于记忆，不代表标准英语发音。'],
    ['interview', '复习', '面试题总览', '按章节复习高频 Flutter 面试问题', 'chapter-22', '用为什么、取舍、排错和数据组织面试答案。'],
    ['checklist', '终点', '最终检查清单', '从布局、State 到发布的完整验收清单', 'chapter-23', '用可验证的清单确认知识已经能落到项目。'],
  ];

  const sectionRefs = {
    roadmap: [], compare: [], dart: [], classes: [], widget: ['4.1 Widget、Element、RenderObject', '4.2 StatelessWidget'],
    state: ['4.3 StatefulWidget 为什么拆成两个类', '4.4 `widget`、`context` 和 State', '4.5 `setState` 的真正作用', '4.6 StatefulWidget 生命周期', '4.7 Key 和状态保留', '面试题：为什么 StatefulWidget 要拆成两个类？'],
    context: ['5.1 `BuildContext` 是什么', '5.2 为什么 `context` 不能随意跨异步保存', '面试题：`BuildContext` 是 Widget 吗？'], layout: ['6.1 三句话理解布局', '6.2 约束的四种状态', '6.3 为什么 `Column` 中的列表要使用 `Expanded`'],
    flex: ['6.4 `Row` 和 `Column`', '6.5 `Expanded` 和 `Flexible`', '6.6 `Container`、`Padding`、`SizedBox`'], stack: ['6.7 `Stack` 和 `Positioned`', '6.8 `Wrap`'], scroll: ['6.9 滚动列表', '6.10 嵌套滚动优化', '6.11 布局常见报错', '面试题：为什么 `Expanded` 不能随便放？'],
    composition: [], responsive: [], components: [], 'state-management': [], navigation: [], network: [], storage: [], packages: [], debug: [], performance: [], theme: [], testing: [], native: ['19.1 Platform Channel'], release: ['19.2 发布前检查'], pronunciation: [], interview: [], checklist: [],
  };

  function makeQuiz(item) {
    const answer = item.answer;
    const other = ['把所有状态放到全局', '在 build 中重复创建请求', '用固定坐标替代约束布局', '只看最终页面不做测量'];
    return [
      { question: item.question, options: [answer, other[0], other[1], other[2]], answer: 0, explanation: item.explanation },
      { question: `${item.title} 的工程重点是什么？`, options: [answer, other[1], other[2], other[3]], answer: 0, explanation: item.explanation },
      { question: `遇到 ${item.title} 相关问题，优先选择哪种做法？`, options: [answer, other[0], other[2], other[3]], answer: 0, explanation: item.explanation },
      { question: `下列哪项最符合“${item.title}”的原则？`, options: [answer, other[0], other[1], other[3]], answer: 0, explanation: item.explanation },
      { question: `复习 ${item.title} 时，哪句话正确？`, options: [answer, other[1], other[2], other[3]], answer: 0, explanation: item.explanation },
    ];
  }

  const modules = definitions.map(([id, week, title, short, chapter, desc], index) => {
    const item = {
      id, week, title, short, chapter, desc, color: colors[index % colors.length],
      sections: sectionRefs[id] || [],
      question: `${title} 的核心是什么？`,
      answer: desc,
      explanation: `${desc} 阅读对应手册原文后，再用章节闯关检验是否能解释取舍和坑点。`,
      task: `阅读 ${title} 的完整内容，写下一个关键结论并完成章节挑战。`,
    };
    item.quiz = makeQuiz(item);
    return item;
  });

  global.FLUTTER_MODULES = modules;
  global.FLUTTER_BADGES = [
    { id: 'first-orbit', icon: '✦', title: '首次入轨', description: '完成第一个知识模块' },
    { id: 'five-streak', icon: '◈', title: '五日连学', description: '连续学习 5 天' },
    { id: 'chapter-clear', icon: '◎', title: '章节通关', description: '以 80% 通过一次章节挑战' },
    { id: 'wrong-review', icon: '↺', title: '错题回收', description: '完成一次错题复习' },
    { id: 'orbit-complete', icon: '✹', title: '全轨完成', description: '完成全部知识模块' },
  ];
})(window);
