// entity es una clase que representa una entidad en la base de datos

export enum LogSeverityLevel {
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export class LogEntity {
  // Usar readonly permite que se lean desde fuera pero no se modifiquen
  // en este caso no aplica
  public message: string;
  public level: LogSeverityLevel; // Enum
  public createdAt: Date;

  constructor( message: string, level: LogSeverityLevel ) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }

  // factory constructor, otra forma de crear un objeto
  static fromJson = ( json: string ): LogEntity => {
    const { message, level, createdAt } = JSON.parse( json );
    if ( !message || !level || !createdAt ) throw new Error('Invalid log');
    
    const log = new LogEntity( message, level );
    log.createdAt = new Date( createdAt );
    
    return log;
  }
}

// export class LogEntity {
//     constructor(
//         public message: string, 
//         public level: LogSeverityLevel,
//         public createdAt: Date = new Date()
//     ) {}
// }
// Al poner public o private directamente en los argumentos del constructor, TypeScript crea la propiedad y la asigna automáticamente por ti.

// ----- Redondly -----
// funciona como final en java, ejemplos de uso un id o el createdAt
// Usar el readonly permite que se lean desde fuera pero no se modifiquen, usar en lugar de private cuando se quiera que la propiedad sea de solo lectura

// ----- Private -----
// No se puede acceder desde fuera

// ----- Public -----
// Se puede acceder desde fuera