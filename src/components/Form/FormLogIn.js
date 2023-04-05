import React from "react";

const FormLogIn = () => {
	return (
		<div>
			<div class="mb-3">
				<label for="inputCorreo" class="form-label">
					Ingresa tu correo electrónico
				</label>
				<input type="email" class="form-control" id="inputCorreo" />
			</div>
			<div class="mb-3">
				<label for="inputContraseña" class="form-label">
					Ingresa tu contraseña
				</label>
				<input type="password" class="form-control" id="ingresoContraseña" />
			</div>
		</div>
	);
};

export default FormLogIn;
