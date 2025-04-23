function setStateResolve() {
    // Verifica se o usuário tem permissão para alterar o estado
    if (!g_user.hasRole('incident_admin') && !g_form.canWrite('state')) {
        alert('Você não tem permissão para alterar o status deste incidente.');
        return;
    }

    // Define o novo valor do campo 'state'
   	g_form.setValue('incident_state', 6);
	  g_form.setValue('state', 6);
	  g_form.setValue('resolved_by', g_user.userID, g_user.getFullName());
    
    // Salva as alterações no formulário
    g_form.save();
}
