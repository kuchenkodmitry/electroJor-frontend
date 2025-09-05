test('e2e placeholder', async () => {
  const res = await Promise.resolve('ok');
  expect(res).toBe('ok');
});
