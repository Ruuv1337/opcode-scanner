module.exports = packet => { // 4
  if (packet.mapped['S_SPAWN_DROPITEM']) {
    return false;
  }

  for (let i = packet.index - 1; i >= 0; i--) {
    let prev = packet.history[i];

    if (prev &&
      prev.name() === 'S_SPAWN_DROPITEM' &&
      prev.parsed.gameId === packet.parsed.gameId) {
      return true;
    }
  }

  return false;
}