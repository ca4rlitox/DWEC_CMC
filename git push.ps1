# Definir la ruta base donde están las carpetas (según tu imagen)
$rutaBase = "C:\Users\Charlie\Documents\DAW2"

# Lista de las carpetas específicas que contienen los repositorios Git
$carpetas = @("DWEC_CMC", "DWES_CMC")

foreach ($carpeta in $carpetas) {
    $rutaCompleta = Join-Path $rutaBase $carpeta
    
    # Verificar si la carpeta existe
    if (Test-Path $rutaCompleta) {
        Write-Host "----------------------------------------" -ForegroundColor Cyan
        Write-Host "Entrando a: $carpeta" -ForegroundColor Yellow
        Write-Host "----------------------------------------" -ForegroundColor Cyan
        
        # Cambiar a la carpeta del repositorio
        Set-Location $rutaCompleta
        
        # Ejecutar git pull
        git add .
        $mensaje = Read-Host "Introduce el mensaje del commit:"
        git commit -m "$mensaje"
        git push
    } else {
        Write-Host "La carpeta $carpeta no existe en la ruta especificada." -ForegroundColor Red
    }
}

# Regresar a la ruta inicial
Set-Location $rutaBase
