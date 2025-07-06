/**
 * Clase que representa un cliente dentro del sistema.
 * Contiene información personal y de contacto del cliente.
 */
export class Customer {
    /** Nombre completo del cliente */
    public Name: string;

    /** Correo electrónico del cliente */
    public Email: string;

    /** Número de teléfono móvil del cliente */
    public MobileNumber: string;

    /** Dirección física del cliente */
    public Address: string;

    /** Contraseña del cliente (almacenada en texto plano en este ejemplo educativo) */
    public Password: string;

    /**
     * Método de fábrica estático para crear una instancia de Customer.
     * 
     * @param name Nombre del cliente.
     * @param email Correo electrónico del cliente.
     * @param mobileNumber Número de teléfono móvil.
     * @param address Dirección física del cliente.
     * @param password Contraseña del cliente.
     * @returns Una instancia de `Customer` con los datos proporcionados.
     */
    public static Create(name: string, email: string, mobileNumber: string, address: string, password: string): Customer {
        const c = new Customer();
        c.Name = name;
        c.Email = email; 
        c.MobileNumber = mobileNumber; 
        c.Address = address; 
        c.Password = password;
        return c;
    }
}
