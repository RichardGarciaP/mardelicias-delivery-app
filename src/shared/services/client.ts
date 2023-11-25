import 'react-native-url-polyfill/auto';
import {createClient} from '@supabase/supabase-js';

const projectUrl = 'https://nmswwbindwiwxgeravfq.supabase.co';
const anonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tc3d3YmluZHdpd3hnZXJhdmZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MTk1NzQzOCwiZXhwIjoyMDA3NTMzNDM4fQ.j5CpP112lKfGkkyne1yJwcV7tilncOKij2ALGM_piKo';

export const supabase = createClient(projectUrl, anonKey);
