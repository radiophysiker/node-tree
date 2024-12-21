/**
 * Функция для печати дерева.
 * @param {Object} node - Текущий узел.
 * @param {string} prefix - Префикс для отступов и линий.
 * @param {boolean} isLast - Является ли текущий узел последним в своём уровне.
 * @param {number} level - Уровень вложенности дерева.
 */
function printTree(node, prefix = '', isLast = true, level = 0) {
  const connector = level === 0 ? '' : (isLast ? '└── ' : '├── ');
  console.log(prefix + connector + node.name);

  if (node.items && node.items.length > 0) {
    const newPrefix = prefix + (isLast ? (level > 0 ? '    ' : '') : '│   ');
    node.items.forEach((child, index) => {
      const last = index === node.items.length - 1;
      printTree(child, newPrefix, last, level + 1);
    });
  }
}

module.exports = printTree;
