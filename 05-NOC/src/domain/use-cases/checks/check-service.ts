// caso de uso codigo especializado en una tarea

interface CheckServiceUseCase {
  execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = ( error: string) => void;

// inyeccion de dependencias es inyectar una independencia en casos de uso o repositorio o cualquier cosa.
// normalmente se inyecta en el constructor de la clase. Esto significa que la clase depende de la dependencia.
export class CheckService implements CheckServiceUseCase {
  constructor(
    private readonly successCallback: SuccessCallback,
    private readonly errorCallback: ErrorCallback
  ) {}

  public async execute(url: string): Promise<boolean> {
    try {
      const req = await fetch( url );
      if ( !req.ok ) {
        throw new Error(`Error on check service ${url}`);
      }  

      this.successCallback();
      return true;
    } catch ( error ) {
      this.errorCallback(`${ error }`);
      return false;
    }
  }
}