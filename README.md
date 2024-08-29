# learning-k8s

- kubectl apply -f pod.yaml **(creates the pod in default namespace and run container in pod with image from spec)**
- kubectl port-forward express-app-pod 3000:3000 **(forwad ports from host to container)**

# Some useful commands

- minikube start/stop **(start/stop local minikube cluster)**
- minikube node list **(list the nodes in our cluster)**
- kubectl get pods -A **(gives the list of running pods in our cluster in all the namespace)**
- kubectl get pods -n kube-system **(gives the list of pods in given namespace,-w to watch changes)**
- kubectl delete pods {podname} -n {namespace} **(deletes the given pod)**
- kubectl logs {podname} -n {namespace} **(to see logs within container of pod, if pod has multiple container use -c flag to specify container name)**
- kubectl describe pod {podname} -n {namespace} **(describe stats of given pod)**
- kubectl get events -n {namespace} **(gives list of events happening behind the scene)**
- kubectl explain {resourceName} **(explain about kubernetes resource and its manifest file)**
- kubectl create namespace {newNameSpace} **(creates the namespace)**
- kubectl get namespace **(list the available namespace)**
- kubectl config set-context --current --namespace=my-app **(set the context to given namespace)**
- kubectl config current-context **(gives name of current context)**
- kubectl run my-nginx-pod --image=nginx **(creates new pod with the container spawn from the given image)**
- kubectl port-forward my-nginx-pod 8080:80 **(forwards the port from localhost to port entry inside container running on given pod)**
- kubectl create -f pod.yaml **(create the resource from given manifest yaml file, it will throw an error if resource already exits)**
- kubectl apply -f pod.yaml **(create or update the resource from given manifest yaml file, it will update resource if resource already exits)**
- kubectl edit pod {podname} **(allows you to change/update config from command line)**
