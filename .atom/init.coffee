# Your init script
#
# Atom will evaluate this file each time a new window is opened. It is run
# after packages are loaded/activated and after the previous editor state
# has been restored.
#
# An example hack to log to the console when each text editor is saved.
#
# atom.workspace.observeTextEditors (editor) ->
#   editor.onDidSave ->
#     console.log "Saved! #{editor.getPath()}"

# Needed for atom-script package
# https://github.com/rgbkrk/atom-script/issues/61
process.env.PATH = ['/usr/local/bin', process.env.PATH].join(':')
