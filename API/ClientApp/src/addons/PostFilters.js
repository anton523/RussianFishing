export const filters = [
  {
    name: 'Недавняя активность',
    compare: (a, b) => {
      const c = new Date(b.createdAt).getTime();
      const d = new Date(a.createdAt).getTime();
      return c - d;
    }
  },
  {
    name: 'Самые комментируемые',
    compare: (a, b) => b.comments - a.comments
  },
  {
    name: 'Самые просматриваемые',
    compare: (a, b) => b.views - a.views
  },
  {
    name: 'Больше всего реакций',
    compare: (a, b) => b.reactions - a.reactions
  },
];