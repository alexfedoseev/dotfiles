const iTerm = Application('iTerm');
const Utils = Library('utils');

iTerm.includeStandardAdditions = true;
iTerm.activate();

function run(path, cmd) {
  const container = iTerm.createWindowWithDefaultProfile();

  const rootSession = container.currentSession;
  const buildSession = rootSession.splitHorizontallyWithDefaultProfile();
  const serverSession = buildSession.splitVerticallyWithDefaultProfile();

  Utils.prepareSessions(path, [rootSession, buildSession, serverSession]);

  rootSession.write({ text: cmd.root, newline: false });
  buildSession.write({ text: cmd.build, newline: false });
  serverSession.write({ text: cmd.server, newline: false });
  rootSession.select();
}
