const printTree = require('./printTree');

describe('printTree function', () => {
  const data = {
    name: 1,
    items: [
      {
        name: 2,
        items: [{ name: 3 }, { name: 4 }]
      },
      {
        name: 5,
        items: [{ name: 6 }]
      }
    ]
  };

  it('should print the correct tree structure', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    printTree(data);
    const expectedOutput = [
      '1',
      '├── 2',
      '│   ├── 3',
      '│   └── 4',
      '└── 5',
      '    └── 6'
    ];
    expect(consoleSpy.mock.calls.map(call => call[0])).toEqual(expectedOutput);
    consoleSpy.mockRestore();
  });
});
