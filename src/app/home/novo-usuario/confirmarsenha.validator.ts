import { FormGroup } from '@angular/forms';

export function confirmarSenha(formGroup: FormGroup) {
  const senha = formGroup.get('password')?.value ?? '';
  const confsenha = formGroup.get('confPass')?.value ?? '';

  if(senha.trim() + confsenha.trim()) {
    return senha !== confsenha ? {confSenha: true} : null;
  } else {
    return null;
  }
}
