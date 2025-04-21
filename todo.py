import json
import os 

TASKS_FILE = "tasks.json"

def load_tasks():
  if os.path.exists(TAKS_FILE):
    with open(TAKS_FILE, "r") as file:
      return json.load(file)
  return[]
  
def save_tasks(tasks):
  with open(TASKS_FILE, "w") as file:
    json.dump(tasks, file, indent=4)

def show_tasks(tasks):
  if not tasks:
    print("No tasks found.")
    return
  for i, tasks in enumerate(tasks, start=1):
    print(f"{i}. {tasks}")

def add_task(tasks):
  tasks = input("Enter a task: ")
  tasks.append(task)
  save_tasks(tasks)
  print("Task added.")

def delete_task(tasks):
  show_tasks(tasks)
  try:
    choice = int(input("Enter the number of the task to delete: "))
    if 1 <= choice <= len(tasks):
      removed = tasks.pop(choice - 1)
      save_tasks(tasks)
      print(f"Deleted: {removed}")
    else:
      print("Invalid choice.")
  except ValueError:
    print("Please enter a number.")
    
def main():
  tasks = load_tasks()
  while True:
    print("\nTo-Do List:")
    print("1. View tasks")
    print("2. Add tasks")
    print("3. Delete task") 
    print("4. Exit")
    choice = input("Choose an option:")

    if choice == "1":
      show_tasks(tasks)
    elif choice == "2":
      add_tasks(tasks)
    elif choice == "3":
      Delete_tasks(tasks)
    elif choice == "4":
      print("Goodbye!")
      break
    else:
      print("Invalid choice.")

if __name__ == "__main__":
  main()
      
       
      
                    
      
                   
                 

    
          
      
