import Main from "../components/eventBus/Main";
import { AuthProvider } from "../components/eventBus/useAuth";
import External from "../components/eventBus/External";

type Callback = (...args: any[]) => any;
export class EventBus {
  private callback?: Callback;
  listen(callback: Callback) {
    this.callback = callback;
  }
  emit(...param: any[]) {
    this.callback!(...param);
  }
}

const eventBus = new EventBus();

const EventBusPage = () => {
  return (
    <>
      <AuthProvider eventBus={eventBus}>
        <Main eventBus={eventBus} />
      </AuthProvider>
      <External eventBus={eventBus} />
    </>
  );
};

export default EventBusPage;
