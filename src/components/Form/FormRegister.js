import React from "react";
import Button from "../Button/Button";

const FormRegister = () => {
	return (
		<div>
			<form>
				<div class="mb-3">
					<label for="inputNombre" class="form-label">
						Ingresa tu nombre
					</label>
					<input type="text" class="form-control" id="inputNombre" />
				</div>
				<div class="mb-3">
					<label for="inputApellido" class="form-label">
						Ingresa tu primer apellido
					</label>
					<input type="text" class="form-control" id="inputApellido" />
				</div>
				<div class="mb-3">
					<label for="inputApellido2" class="form-label">
						Ingresa tu segundo apellido
					</label>
					<input type="text" class="form-control" id="inputApellido2" />
				</div>
				<div class="mb-3">
					<label for="inputFechaNacimiento" class="form-label">
						Ingresa tu fecha de nacimiento
					</label>
					<input type="date" class="form-control" id="inputFechaNacimiento" />
				</div>
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
				<div class="mb-3">
					<label for="inputContraseñaConfirmacion" class="form-label">
						Confirma tu contraseña
					</label>
					<input
						type="password"
						class="form-control"
						id="ingresoContraseñaConfirmacion"
					/>
				</div>

				<div class="mb-3 form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label" for="exampleCheck1">
						Acepto
					</label>
				</div>
				<Button
					accion={"Registrarse"}
					type="submit"
					color={"btn btn-outline-dark"}
				/>
			</form>
		</div>
	);
};

export default FormRegister;
