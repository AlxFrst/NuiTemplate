local ui = false;

-- CONFIG
local config = {
    command = 'NuiTemplate',
    menuKey = 'J'
}


RegisterCommand(config.command, function()
    ui = not ui
    if ui then
        SetNuiFocus(true, true)
        SendNUIMessage({
            showUI = true
        })
    else
        SendNUIMessage({
            showUI = false
        })
    end
end)

RegisterKeyMapping('NuiTemplate', 'Opens the UI', 'keyboard', config.menuKey)

RegisterNUICallback('closeMenu', function(data, cb)
    ui = false
    SetNuiFocus(false, false)
    cb('ok')
end)

-- PUT YOUR NUI CALLBACKS HERE
