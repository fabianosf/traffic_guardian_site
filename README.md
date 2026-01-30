# 🛡️ Traffic Guardian

> **Seu site caiu? Nós avisamos primeiro.**
> Sistema de monitoramento de uptime 24/7 com alertas em tempo real via Telegram e E-mail.

![Project Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.0-green)

---

## 📸 Screenshots

<p align="center">
  <img src="./frontend/public/og-image.jpg" alt="Traffic Guardian Landing Page" width="100%">
</p>

## 🚀 Sobre o Projeto

O **Traffic Guardian** é uma solução SaaS (Software as a Service) desenvolvida para monitorar a disponibilidade de sites e APIs. Se um serviço monitorado sair do ar (código de erro 500, 404 ou timeout), o sistema dispara notificações imediatas para o proprietário, permitindo uma reação rápida para evitar prejuízos.

### ✨ Funcionalidades Principais

- ⏱️ **Monitoramento em Tempo Real:** Verificação automática a cada 60 segundos.
- 🔔 **Alertas Multicanais:** Notificações instantâneas via Bot do Telegram e E-mail.
- 📊 **Dashboard Intuitivo:** Gerencie múltiplos sites em uma interface limpa e moderna.
- 📱 **Design Responsivo:** Funciona perfeitamente em desktop e mobile.
- 🔒 **Segurança:** Autenticação via Token JWT.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando uma arquitetura moderna e escalável:

### Frontend (Client-side)
- **React.js** (Vite)
- **Tailwind CSS** (Estilização e Design System)
- **Lucide React** (Ícones)
- **React Router Dom** (Navegação)

### Backend (Server-side)
- **Python & Django** (Framework principal)
- **Django REST Framework** (API)
- **Celery** (Tarefas assíncronas e agendamento)
- **Redis** (Broker de mensagens para o Celery)
- **PostgreSQL/SQLite** (Banco de dados)

### Infraestrutura & DevOps
- **Docker & Docker Compose** (Containerização)
- **Nginx** (Servidor Web reverso)
- **Vercel** (Hospedagem Frontend)
- **VPS Linux** (Hospedagem Backend)

---

## ⚙️ Como Rodar Localmente

Siga estes passos para rodar o projeto na sua máquina:

### Pré-requisitos
- Node.js e npm
- Python 3.8+
- Docker (Opcional, mas recomendado)

### Opção A: Via Docker (Recomendado 🐳)

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/fabianosf/traffic_guardian.git](https://github.com/fabianosf/traffic_guardian.git)
   cd traffic_guardian